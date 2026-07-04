import { Link } from 'react-router'

import {
  getFragrancesByAudience,
  getLineById,
  type OmmiAudience,
} from '../data/ommiCatalog'

type AudiencePerfumesPageProps = {
  audience: OmmiAudience
}

export function AudiencePerfumesPage({ audience }: AudiencePerfumesPageProps) {
  const fragrances = getFragrancesByAudience(audience)

  return (
    <main className="placeholder-page">
      <Link to="/perfumes" className="back-link">
        Volver a perfumes
      </Link>
      <span className="page-kicker">Perfumes {audience}</span>
      <h1>{audience[0].toUpperCase() + audience.slice(1)}</h1>
      <p>Selección placeholder alimentada por el nuevo campo audience.</p>
      <div className="placeholder-grid">
        {fragrances.map((fragrance) => {
          const entry = getLineById(fragrance.primaryEntryId)

          return (
            <Link
              className="placeholder-card"
              key={fragrance.id}
              to={`/perfumes/${entry.slug}/${fragrance.slug}`}
            >
              <span>
                N°{fragrance.number} · {entry.name}
              </span>
              <strong>{fragrance.family}</strong>
              <small>{fragrance.elements.join(' · ')}</small>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
