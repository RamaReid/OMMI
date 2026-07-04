import { Menu, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router'

export function FloatingHeader() {
  return (
    <header className="floating-header">
      <Link className="brand-mark" to="/" aria-label="OMMI home">
        OMMI
      </Link>
      <nav className="header-nav" aria-label="Navegación principal">
        <Link to="/perfumes">Perfumes</Link>
        <Link to="/sets/discovery">Sets</Link>
        <Link to="/guia">Guía</Link>
        <Link to="/confianza">Confianza</Link>
      </nav>
      <div className="header-actions">
        <Link className="icon-link" to="/sets/discovery" aria-label="Ver sets">
          <ShoppingBag size={18} strokeWidth={1.8} />
        </Link>
        <button className="icon-link mobile-menu" type="button" aria-label="Menú">
          <Menu size={18} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  )
}
