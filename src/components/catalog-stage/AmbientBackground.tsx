import { motion } from 'motion/react'

import type { OmmiLine } from '../../data/ommiCatalog'

type AmbientBackgroundProps = {
  line: OmmiLine
}

export function AmbientBackground({ line }: AmbientBackgroundProps) {
  return (
    <motion.div
      key={line.id}
      aria-hidden="true"
      className="ambient-background"
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="ambient-layer ambient-base" />
      <div className="ambient-layer ambient-halo-primary" />
      <div className="ambient-layer ambient-halo-secondary" />
      <div className="ambient-layer ambient-reflection" />
      <div className="ambient-layer ambient-grain" />
      <div className="ambient-layer ambient-vignette" />
    </motion.div>
  )
}
