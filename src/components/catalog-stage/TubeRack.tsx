import { useEffect, useRef } from 'react'

import type {
  OmmiFragrance,
  OmmiLine,
  OmmiLineId,
} from '../../data/ommiCatalog'

type TubeRackProps = {
  lines: OmmiLine[]
  fragrances: OmmiFragrance[]
  activeLineId: OmmiLineId
  activeFragranceId: string | null
  onFragranceFocus: (fragrance: OmmiFragrance) => void
}

const intensityLabel: Record<OmmiFragrance['intensity'], string> = {
  baja: 'baja',
  media: 'media',
  alta: 'alta',
}

export function TubeRack({
  lines,
  fragrances,
  activeLineId,
  activeFragranceId,
  onFragranceFocus,
}: TubeRackProps) {
  const rackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef(new Map<string, HTMLButtonElement>())

  useEffect(() => {
    const targetId =
      activeFragranceId ??
      fragrances.find((fragrance) => fragrance.lineId === activeLineId)?.id

    if (!targetId) return

    itemRefs.current.get(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }, [activeFragranceId, activeLineId, fragrances])

  const updateFocusFromScroll = () => {
    const rack = rackRef.current

    if (!rack) return

    const rackRect = rack.getBoundingClientRect()
    const isHorizontal = rack.scrollWidth > rack.clientWidth
    const rackCenter = isHorizontal
      ? rackRect.left + rackRect.width / 2
      : rackRect.top + rackRect.height / 2

    let closestFragrance: OmmiFragrance | undefined
    let closestDistance = Number.POSITIVE_INFINITY

    for (const fragrance of fragrances) {
      const node = itemRefs.current.get(fragrance.id)

      if (!node) continue

      const rect = node.getBoundingClientRect()
      const itemCenter = isHorizontal
        ? rect.left + rect.width / 2
        : rect.top + rect.height / 2
      const distance = Math.abs(itemCenter - rackCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestFragrance = fragrance
      }
    }

    if (closestFragrance && closestFragrance.id !== activeFragranceId) {
      onFragranceFocus(closestFragrance)
    }
  }

  return (
    <aside className="tube-rack-shell" aria-label="Selector de fragancias">
      <div className="tube-rack-title">
        <span>Selector</span>
        <strong>{lines.find((line) => line.id === activeLineId)?.name}</strong>
      </div>
      <div className="tube-rack" ref={rackRef} onScroll={updateFocusFromScroll}>
        {lines.map((line) => (
          <section
            className="tube-group"
            data-active={line.id === activeLineId}
            key={line.id}
            aria-label={`Fragancias ${line.name}`}
          >
            <span className="tube-group-label">{line.name}</span>
            {fragrances
              .filter((fragrance) => fragrance.lineId === line.id)
              .map((fragrance) => {
                const isActive = fragrance.id === activeFragranceId
                const isSameLine = fragrance.lineId === activeLineId

                return (
                  <button
                    key={fragrance.id}
                    ref={(node) => {
                      if (node) {
                        itemRefs.current.set(fragrance.id, node)
                      } else {
                        itemRefs.current.delete(fragrance.id)
                      }
                    }}
                    type="button"
                    className="tube-item"
                    data-active={isActive}
                    data-near={isSameLine && !isActive}
                    onClick={() => onFragranceFocus(fragrance)}
                    onFocus={() => onFragranceFocus(fragrance)}
                    onMouseEnter={() => onFragranceFocus(fragrance)}
                  >
                    <span className="tube-body" aria-hidden="true">
                      <span className="tube-liquid" />
                      <span className="tube-cap" />
                    </span>
                    <span className="tube-copy">
                      <span className="tube-number">N°{fragrance.number}</span>
                      <span className="tube-family">{fragrance.family}</span>
                      <span className="tube-notes">
                        {fragrance.elements.join(' · ')}
                      </span>
                      <span className="tube-intensity">
                        Intensidad {intensityLabel[fragrance.intensity]}
                      </span>
                    </span>
                  </button>
                )
              })}
          </section>
        ))}
      </div>
    </aside>
  )
}
