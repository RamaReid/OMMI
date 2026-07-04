import { Link } from 'react-router'

type InfoPageProps = {
  kicker: string
  title: string
  body: string
}

export function InfoPage({ kicker, title, body }: InfoPageProps) {
  return (
    <main className="placeholder-page">
      <Link to="/" className="back-link">
        Volver al selector
      </Link>
      <span className="page-kicker">{kicker}</span>
      <h1>{title}</h1>
      <p>{body}</p>
    </main>
  )
}
