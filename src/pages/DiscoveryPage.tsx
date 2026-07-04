import { Link } from 'react-router'

import { getFragrancesByLine } from '../data/ommiCatalog'

export function DiscoveryPage() {
  const sets = getFragrancesByLine('discovery')

  return (
    <main className="placeholder-page">
      <Link to="/" className="back-link">
        Volver al selector
      </Link>
      <span className="page-kicker">Sets</span>
      <h1>Discovery</h1>
      <p>Explorar, comparar y elegir con menos incertidumbre.</p>
      <div className="placeholder-grid">
        {sets.map((set) => (
          <article className="placeholder-card" key={set.id}>
            <span>Set {set.number}</span>
            <strong>{set.family}</strong>
            <small>{set.elements.join(' · ')}</small>
          </article>
        ))}
      </div>
    </main>
  )
}
