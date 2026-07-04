import { motion } from 'motion/react'

import type { OmmiLine } from '../../data/ommiCatalog'

type AmbientBackgroundProps = {
  line: OmmiLine
}

export function AmbientBackground({ line }: AmbientBackgroundProps) {
  const texture = line.assets.lineTexture ?? line.assets.backgroundTexture

  return (
    <motion.div
      key={line.id}
      aria-hidden="true"
      className="ambient-background"
      style={texture ? { backgroundImage: `url(${texture})` } : undefined}
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="ambient-layer ambient-base" />
      <div className="ambient-layer ambient-halo-primary" />
      <div className="ambient-layer ambient-halo-secondary" />
      <div className="ambient-layer ambient-reflection" />
      {texture ? <div className="ambient-layer ambient-texture" /> : null}
      <div className="ambient-layer ambient-grain" />
      <div className="ambient-layer ambient-vignette" />
    </motion.div>
  )
}
