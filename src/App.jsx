import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowMiyagiWorks from './pages/HowMiyagiWorks'
import ManagerConsole from './pages/ManagerConsole'
import PracticeOntology from './pages/PracticeOntology'
import AiOperations from './pages/AiOperations'
import Connections from './pages/Connections'
import ReceptionistAssistant from './pages/ReceptionistAssistant'
import Security from './pages/Security'
import Integrations from './pages/Integrations'
import Pricing from './pages/Pricing'
import RequestDemo from './pages/RequestDemo'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/manager" element={<ManagerConsole />} />
          <Route path="/products/manager/ontology" element={<PracticeOntology />} />
          <Route path="/products/manager/ai-operations" element={<AiOperations />} />
          <Route path="/products/manager/connections" element={<Connections />} />
          <Route path="/products/receptionist-assistant" element={<ReceptionistAssistant />} />
          <Route path="/how-miyagi-works" element={<HowMiyagiWorks />} />
          <Route path="/security" element={<Security />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/request-demo" element={<RequestDemo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App