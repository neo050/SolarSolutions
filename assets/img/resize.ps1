for ($w = 400; $w -le 2500; $w += 150) {
    # חישוב הגובה לפי יחס 3:2, מעוגל למטה
    $h = [Math]::Floor($w * 2 / 3)

    # הרכבת שם הקובץ
    $outfile = "solar_panels_{0}x{1}.webp" -f $w, $h

    # יצירת מחרוזת scale עם $w:$h בפורמט תקין
    $scaleExpr = "scale=$($w):$($h)"

    # קריאה ל-ffmpeg
    ffmpeg -i original.jpg -vf $scaleExpr -c:v libwebp -q:v 30 $outfile
}
