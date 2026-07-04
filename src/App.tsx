import { Route, Routes } from 'react-router'

import { DiscoveryPage } from './pages/DiscoveryPage'
import { Home } from './pages/Home'
import { LineCatalogPage } from './pages/LineCatalogPage'
import { ProductPage } from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfumes/:lineSlug" element={<LineCatalogPage />} />
      <Route path="/perfumes/:lineSlug/:fragranceSlug" element={<ProductPage />} />
      <Route path="/sets/discovery" element={<DiscoveryPage />} />
    </Routes>
  )
}

export default App
