$ErrorActionPreference = 'Stop'
$base = 'c:\Users\zabdi\Desktop\Franyalith y Zabdiel'
$tmp = Join-Path $base 'scripts\_tmp'
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

$zips = @(
  @{ Year = '2022'; File = 'Fotos mas relevantes 2022.zip' },
  @{ Year = '2023'; File = 'Mejores Fotos 2023.zip' },
  @{ Year = '2024'; File = 'Lo mejor de 2024 pero solo estuve yo en fotos Asi que hay que poner algo ingenioso como que Estoy para Ti en el titulo.zip' },
  @{ Year = '2025'; File = 'Lo mejor 2025 Fotos solo mias asi que hay que ser ingeniosos.zip' }
)

foreach ($z in $zips) {
  $dest = Join-Path $tmp $z.Year
  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  $src = Join-Path $base $z.File
  Write-Host "Extracting $($z.Year)..."
  Expand-Archive -Force -Path $src -DestinationPath $dest
}

Write-Host "Done. File counts:"
foreach ($z in $zips) {
  $dest = Join-Path $tmp $z.Year
  $count = (Get-ChildItem $dest -Recurse -File | Measure-Object).Count
  Write-Host "  $($z.Year) -> $count files"
}
