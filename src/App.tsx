import { Route, Routes } from 'react-router'

import { AudiencePerfumesPage } from './pages/AudiencePerfumesPage'
import { DiscoveryPage } from './pages/DiscoveryPage'
import { Home } from './pages/Home'
import { InfoPage } from './pages/InfoPage'
import { LineCatalogPage } from './pages/LineCatalogPage'
import { PerfumesPage } from './pages/PerfumesPage'
import { ProductPage } from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfumes" element={<PerfumesPage />} />
      <Route
        path="/perfumes/masculinos"
        element={<AudiencePerfumesPage audience="masculino" />}
      />
      <Route
        path="/perfumes/femeninos"
        element={<AudiencePerfumesPage audience="femenino" />}
      />
      <Route
        path="/perfumes/unisex"
        element={<AudiencePerfumesPage audience="unisex" />}
      />
      <Route path="/perfumes/:lineSlug" element={<LineCatalogPage />} />
      <Route path="/perfumes/:lineSlug/:fragranceSlug" element={<ProductPage />} />
      <Route path="/sets/discovery" element={<DiscoveryPage />} />
      <Route
        path="/guia"
        element={
          <InfoPage
            kicker="Guía"
            title="Elegir por uso, piel y carácter"
            body="Esta ruta queda preparada para explicar cómo cruzar ocasión, familia olfativa, intensidad y audiencia antes de elegir."
          />
        }
      />
      <Route
        path="/confianza"
        element={
          <InfoPage
            kicker="Confianza"
            title="Evidencia visible"
            body="Esta sección queda reservada para trazabilidad, conservación, concentración, lotes y criterios de calidad."
          />
        }
      />
      <Route
        path="/sobre-ommi"
        element={
          <InfoPage
            kicker="Sobre OMMI"
            title="Sistema olfativo OMMI"
            body="OMMI se organiza como una arquitectura de elección, no como una lista plana de referencias."
          />
        }
      />
    </Routes>
  )
}

export default App
