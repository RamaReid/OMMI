import type { OmmiLine, OmmiLineId } from '../../data/ommiCatalog'

type LineIndicatorProps = {
  lines: OmmiLine[]
  activeLineId: OmmiLineId
  onLineChange: (lineId: OmmiLineId) => void
}

export function LineIndicator({
  lines,
  activeLineId,
  onLineChange,
}: LineIndicatorProps) {
  return (
    <div className="line-indicator" aria-label="Indicador de línea">
      {lines.map((line) => (
        <button
          key={line.id}
          type="button"
          aria-label={line.name}
          aria-pressed={line.id === activeLineId}
          className="line-dot"
          style={{ backgroundColor: line.palette.primary }}
          onClick={() => onLineChange(line.id)}
        />
      ))}
    </div>
  )
}
