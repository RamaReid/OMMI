import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router'

import { getLineRoute } from '../../data/ommiCatalog'
import type { OmmiLine } from '../../data/ommiCatalog'

type BottleAvatarProps = {
  line: OmmiLine
  isBackVisible: boolean
  isDragging: boolean
  onBackVisibleChange: (isVisible: boolean) => void
  onDraggingChange: (isDragging: boolean) => void
}

export function BottleAvatar({
  line,
  isBackVisible,
  isDragging,
  onBackVisibleChange,
  onDraggingChange,
}: BottleAvatarProps) {
  const navigate = useNavigate()
  const dragStartX = useRef<number | null>(null)
  const movedDuringPointer = useRef(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [frontImageFailed, setFrontImageFailed] = useState(false)
  const [backImageFailed, setBackImageFailed] = useState(false)
  const canShowFrontImage = Boolean(line.assets.bottleFront && !frontImageFailed)
  const canShowBackImage = Boolean(line.assets.bottleBack && !backImageFailed)

  const resetDrag = () => {
    dragStartX.current = null
    onDraggingChange(false)
  }

  return (
    <motion.button
      type="button"
      className="bottle-avatar"
      data-back-visible={isBackVisible}
      data-dragging={isDragging}
      aria-label={`Abrir línea ${line.name}`}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        setTilt({ x: x * 9, y: y * -7 })
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onPointerDown={(event) => {
        dragStartX.current = event.clientX
        movedDuringPointer.current = false
        event.currentTarget.setPointerCapture(event.pointerId)
      }}
      onPointerMove={(event) => {
        if (dragStartX.current === null) return

        const deltaX = event.clientX - dragStartX.current

        if (Math.abs(deltaX) > 8) {
          movedDuringPointer.current = true
          onDraggingChange(true)
        }

        if (deltaX > 54) {
          onBackVisibleChange(false)
        }

        if (deltaX < -54) {
          onBackVisibleChange(true)
        }
      }}
      onPointerCancel={resetDrag}
      onPointerUp={() => {
        const shouldNavigate = !movedDuringPointer.current
        resetDrag()

        if (shouldNavigate) {
          navigate(getLineRoute(line))
        }
      }}
      animate={{
        rotateX: tilt.y,
        rotateY: isBackVisible ? 180 + tilt.x : tilt.x,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
    >
      <span className="bottle-glow" />
      <span className="bottle-form">
        <span className="bottle-cap" />
        <span className="bottle-neck" />
        <span className="bottle-face bottle-front">
          {canShowFrontImage ? (
            <img
              className="bottle-image"
              src={line.assets.bottleFront}
              alt=""
              onError={() => setFrontImageFailed(true)}
            />
          ) : (
            <>
              <span className="bottle-brand">OMMI</span>
              <span className="bottle-line">{line.name}</span>
              <span className={`bottle-label bottle-label-${line.labelShape}`} />
              <span className="bottle-elements">
                {line.olfactoryElements.slice(0, 3).join(' · ')}
              </span>
            </>
          )}
        </span>
        <span className="bottle-face bottle-back">
          {canShowBackImage ? (
            <img
              className="bottle-image"
              src={line.assets.bottleBack}
              alt=""
              onError={() => setBackImageFailed(true)}
            />
          ) : (
            <>
              <span className="back-title">Trazabilidad</span>
              <span>Lote visible</span>
              <span>Contenido</span>
              <span>Conservación</span>
            </>
          )}
        </span>
      </span>
    </motion.button>
  )
}
