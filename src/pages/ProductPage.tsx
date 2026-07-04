import { Link, useParams } from 'react-router'

import { getFragranceBySlug, getLineBySlug } from '../data/ommiCatalog'

export function ProductPage() {
  const { lineSlug, fragranceSlug } = useParams()
  const line = getLineBySlug(lineSlug ?? '')
  const fragrance = getFragranceBySlug(lineSlug ?? '', fragranceSlug ?? '')

  if (!line || !fragrance) {
    return (
      <main className="placeholder-page">
        <Link to="/" className="back-link">
          Volver
        </Link>
        <h1>Fragancia no encontrada</h1>
        <p>Este placeholder espera una línea y una fragancia válidas.</p>
      </main>
    )
  }

  return (
    <main className="placeholder-page">
      <Link to={`/perfumes/${line.slug}`} className="back-link">
        Volver a {line.name}
      </Link>
      <span className="page-kicker">Ficha placeholder</span>
      <h1>
        N°{fragrance.number} {fragrance.family}
      </h1>
      <p>{fragrance.elements.join(' · ')}</p>
      <div className="placeholder-card wide">
        <span>Línea {line.name}</span>
        <strong>Intensidad {fragrance.intensity}</strong>
        <small>
          Esta página queda preparada para ficha final, assets reales y detalle
          olfativo.
        </small>
      </div>
    </main>
  )
}
