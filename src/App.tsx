import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { OffProjectsPage, OnProjectsPage } from './pages/ProjectsChannelPage'
import { ProjectPage } from './pages/ProjectPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="off-projects" element={<OffProjectsPage />} />
          <Route path="off-projects/:projectId" element={<ProjectPage />} />
          <Route path="on-projects" element={<OnProjectsPage />} />
          <Route path="on-projects/:projectId" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="work" element={<Navigate to="/off-projects" replace />} />
          <Route path="work/:projectId" element={<Navigate to="/off-projects" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
