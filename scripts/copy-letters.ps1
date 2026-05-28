$ErrorActionPreference = 'Stop'
$base = 'c:\Users\zabdi\Desktop\Franyalith y Zabdiel'
$dest = Join-Path $base 'public\cartas'
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$mappings = @(
  @{ Src = 'Hay éxtasis en mi agonía - Z0108L.rtf';                 Dst = '2021-lily-extasis.rtf' },
  @{ Src = 'Feliz 18 cumple franyi.txt';                            Dst = '2023-zab-cumple18.txt' },
  @{ Src = 'Feliz quinto aniversario Franyalith Granda.pdf';        Dst = '2024-zab-quintoaniv.pdf' },
  @{ Src = 'Siempre habrá una manera de pertenecer, y ya te pertenezco..pdf'; Dst = '2024-lily-pertenezco.pdf' }
)

foreach ($m in $mappings) {
  $srcPath = Join-Path $base $m.Src
  $dstPath = Join-Path $dest $m.Dst
  Copy-Item -Force -Path $srcPath -Destination $dstPath
  Write-Host "Copied -> $($m.Dst)"
}

Get-ChildItem $dest | Select-Object Name, Length | Format-Table -AutoSize
