import { Link } from 'react-router'

import {
  getCrossListedFragrances,
  getFragrancesByAudience,
  ommiLines,
} from '../data/ommiCatalog'

export function PerfumesPage() {
  const crossListed = getCrossListedFragrances()

  return (
    <main className="placeholder-page">
      <Link to="/" className="back-link">
        Volver al selector
      </Link>
      <span className="page-kicker">Perfumes</span>
      <h1>Elegir por entrada o audiencia</h1>
      <p>
        La matriz queda preparada para cruzar ocasión, carácter y audiencia sin
        duplicar fragancias.
      </p>
      <div className="placeholder-grid">
        {ommiLines.map((line) => (
          <Link
            className="placeholder-card"
            key={line.id}
            to={`/perfumes/${line.slug}`}
          >
            <span>{line.name}</span>
            <strong>{line.shortDescriptor}</strong>
            <small>{line.olfactoryElements.join(' · ')}</small>
          </Link>
        ))}
      </div>
      <nav className="line-link-row" aria-label="Audiencias">
        <Link to="/perfumes/masculinos">
          Masculinos ({getFragrancesByAudience('masculino').length})
        </Link>
        <Link to="/perfumes/femeninos">
          Femeninos ({getFragrancesByAudience('femenino').length})
        </Link>
        <Link to="/perfumes/unisex">
          Unisex ({getFragrancesByAudience('unisex').length})
        </Link>
        <Link to="/guia">Guía</Link>
      </nav>
      <p className="page-note">
        {crossListed.length} fragancias ya aparecen cruzadas en más de una
        entrada.
      </p>
    </main>
  )
}
