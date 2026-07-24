import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'
import ExpertisePage from './pages/ExpertisePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

const VaultIndex = lazy(() => import('./pages/VaultIndex'))
const VaultPost = lazy(() => import('./pages/VaultPost'))

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/vault" element={
            <Suspense fallback={<div />}>
              <VaultIndex />
            </Suspense>
          } />
          <Route path="/vault/:slug" element={
            <Suspense fallback={<div />}>
              <VaultPost />
            </Suspense>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
