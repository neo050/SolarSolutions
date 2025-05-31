param(
    [int]$TargetWidth = 1600
)

$TargetHeight = [math]::Floor($TargetWidth * 2 / 3)
$ratio        = $TargetWidth / $TargetHeight

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$imgDir    = Join-Path $scriptDir "assets\img"
$images    = Get-ChildItem -Path $imgDir -Filter "project*.jpg" -File

if (-not $images) {
    Write-Error ("No project*.jpg files found in {0}" -f $imgDir)
    exit 1
}

Write-Host ("Converting to WebP {0}x{1}..." -f $TargetWidth,$TargetHeight)

foreach ($file in $images) {
    $src = $file.FullName
    $dst = [IO.Path]::ChangeExtension($src,'.webp')

    $filter = "scale='if(gt(a,${ratio}),-1,${TargetWidth})':'if(gt(a,${ratio}),${TargetHeight},-1)',crop=${TargetWidth}:${TargetHeight}"

    & ffmpeg -hide_banner -loglevel error `
             -y -i $src `
             -vf $filter `
             -c:v libwebp -q:v 80 -compression_level 6 `
             $dst

    if ($LASTEXITCODE) { throw "ffmpeg failed on $src" }

    Write-Host ("  OK  {0}" -f ($file.BaseName + '.webp'))
}

Write-Host ("`nDone - {0} images resized to {1}x{2} and saved as WebP." -f $images.Count,$TargetWidth,$TargetHeight)
