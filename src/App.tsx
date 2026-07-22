import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'
import VaultIndex from './pages/VaultIndex'
import VaultPost from './pages/VaultPost'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vault" element={<VaultIndex />} />
          <Route path="/vault/:slug" element={<VaultPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
