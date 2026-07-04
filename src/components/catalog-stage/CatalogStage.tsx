import { useMemo, useState } from 'react'

import {
  getLineById,
  getPrimaryFragrancesByEntry,
  ommiFragrances,
  ommiLines,
} from '../../data/ommiCatalog'
import type { OmmiFragrance, OmmiLineId } from '../../data/ommiCatalog'
import { AmbientBackground } from './AmbientBackground'
import { BottleAvatar } from './BottleAvatar'
import { CategoryPrism } from './CategoryPrism'
import { FloatingHeader } from './FloatingHeader'
import { LineIndicator } from './LineIndicator'
import { PackageHint } from './PackageHint'
import { TubeRack } from './TubeRack'

type CatalogStageProps = {
  initialLineId?: OmmiLineId
}

type StageStyle = React.CSSProperties & {
  '--ambient-base': string
  '--ambient-halo-primary': string
  '--ambient-halo-secondary': string
  '--ambient-shadow': string
  '--ambient-accent': string
}

const firstFragranceIdForLine = (lineId: OmmiLineId) =>
  getPrimaryFragrancesByEntry(lineId)[0]?.id ?? null

export function CatalogStage({ initialLineId = 'firma' }: CatalogStageProps) {
  const [activeLineId, setActiveLineId] = useState<OmmiLineId>(initialLineId)
  const [activeFragranceId, setActiveFragranceId] = useState<string | null>(
    firstFragranceIdForLine(initialLineId),
  )
  const [isBottleBackVisible, setIsBottleBackVisible] = useState(false)
  const [isDraggingBottle, setIsDraggingBottle] = useState(false)

  const activeLine = getLineById(activeLineId)
  const activeFragrance = useMemo(
    () =>
      ommiFragrances.find(
        (fragrance) => fragrance.id === activeFragranceId,
      ) ?? null,
    [activeFragranceId],
  )

  const stageStyle: StageStyle = {
    '--ambient-base': activeLine.palette.base,
    '--ambient-halo-primary': activeLine.palette.primary,
    '--ambient-halo-secondary': activeLine.palette.secondary,
    '--ambient-shadow': activeLine.palette.shadow,
    '--ambient-accent': activeLine.palette.accent,
  }

  const changeLine = (lineId: OmmiLineId) => {
    setActiveLineId(lineId)
    setActiveFragranceId(firstFragranceIdForLine(lineId))
    setIsBottleBackVisible(false)
  }

  const focusFragrance = (fragrance: OmmiFragrance) => {
    setActiveFragranceId(fragrance.id)

    if (fragrance.primaryEntryId !== activeLineId) {
      setActiveLineId(fragrance.primaryEntryId)
      setIsBottleBackVisible(false)
    }
  }

  return (
    <main className="catalog-stage" style={stageStyle}>
      <AmbientBackground line={activeLine} />
      <FloatingHeader />

      <section className="stage-copy" aria-live="polite">
        <span className="stage-kicker">Sistema de elección olfativa</span>
        <h1>{activeLine.name}</h1>
        <p>{activeLine.shortDescriptor}</p>
        <div className="character-row">
          {activeLine.characterWords.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
      </section>

      <div className="stage-centerpiece">
        <PackageHint line={activeLine} />
        <BottleAvatar
          line={activeLine}
          isBackVisible={isBottleBackVisible}
          isDragging={isDraggingBottle}
          onBackVisibleChange={setIsBottleBackVisible}
          onDraggingChange={setIsDraggingBottle}
        />
      </div>

      <CategoryPrism
        lines={ommiLines}
        activeLineId={activeLineId}
        onLineChange={changeLine}
      />

      <TubeRack
        lines={ommiLines}
        fragrances={ommiFragrances}
        activeLineId={activeLineId}
        activeFragranceId={activeFragranceId}
        onFragranceFocus={focusFragrance}
      />

      <LineIndicator
        lines={ommiLines}
        activeLineId={activeLineId}
        onLineChange={changeLine}
      />

      <div className="stage-current-fragrance">
        <span>En foco</span>
        <strong>
          {activeFragrance
            ? `N°${activeFragrance.number} ${activeFragrance.family}`
            : activeLine.name}
        </strong>
      </div>
    </main>
  )
}
