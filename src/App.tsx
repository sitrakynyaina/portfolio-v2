import { Routes, Route } from 'react-router'
import { AppProvider } from '@/context/AppContext'
import Home from './pages/Home'
import VlogFayze from './pages/Fayze'
import VlogIzaAryO from './pages/IzaAryO'
import VlogSafeAI from './pages/SafeAI'
import VlogCodeKids from './pages/CodeKids'
import IzaAryOGithubPlaceholder from './pages/IzaAryGithubPlaceholder'
import GeneralGithubPlaceholder from './pages/GeneralGithubPlaceholder'

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vlog/fayze" element={<VlogFayze />} />
        <Route path="/vlog/IzaAryO" element={<VlogIzaAryO />} />
        <Route path="/vlog/SafeAI" element={<VlogSafeAI />} />
        <Route path="/vlog/CodeKids" element={<VlogCodeKids />} />
        <Route path="/projects/iza-ary-o/github" element={<IzaAryOGithubPlaceholder/>}/>
        <Route path="/projects/general/github" element={<GeneralGithubPlaceholder/>}/>
      </Routes>
    </AppProvider>
  )
}
