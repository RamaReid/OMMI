import { Link, useParams } from 'react-router'

import {
  getFragrancesByEntry,
  getLineBySlug,
  ommiLines,
} from '../data/ommiCatalog'

export function LineCatalogPage() {
  const { lineSlug } = useParams()
  const line = getLineBySlug(lineSlug ?? '')

  if (!line) {
    return (
      <main className="placeholder-page">
        <Link to="/" className="back-link">
          Volver
        </Link>
        <h1>Línea no encontrada</h1>
        <p>La ruta no coincide con una línea OMMI disponible.</p>
      </main>
    )
  }

  const fragrances = getFragrancesByEntry(line.id)

  return (
    <main className="placeholder-page">
      <Link to="/" className="back-link">
        Volver al selector
      </Link>
      <span className="page-kicker">Catálogo de línea</span>
      <h1>{line.name}</h1>
      <p>{line.shortDescriptor}</p>
      <div className="placeholder-grid">
        {fragrances.map((fragrance) => (
          <Link
            key={fragrance.id}
            className="placeholder-card"
            to={`/perfumes/${line.slug}/${fragrance.slug}`}
          >
            <span>N°{fragrance.number}</span>
            <strong>{fragrance.family}</strong>
            <small>{fragrance.elements.join(' · ')}</small>
          </Link>
        ))}
      </div>
      <nav className="line-link-row" aria-label="Otras líneas">
        {ommiLines.map((candidate) => (
          <Link key={candidate.id} to={`/perfumes/${candidate.slug}`}>
            {candidate.name}
          </Link>
        ))}
      </nav>
    </main>
  )
}
