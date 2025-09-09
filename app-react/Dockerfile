# ----------------------------
# Build stage
# ----------------------------
FROM node:18-alpine AS build

WORKDIR /app

# Install deps (leverage cache)
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci || npm install

# Copy source
COPY . .

# Build static site
RUN npm run build

# ----------------------------
# Production stage (Nginx)
# ----------------------------
FROM nginx:1.27-alpine AS runner

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

