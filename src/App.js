import React from 'react'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'
import About from './pages/About'
import Home from './common/Home'
import Offerings from './pages/Offerings'
import IdeaValidatorTool from './pages/IdeaValidatorTool'
import BusinessModelGenerator from './pages/BusinessModelGenerator'
import FDIInstitute from './pages/FDIInstitute'
import FDICRM from './pages/FDICRM'
import TradeIntelligencePlateform from './pages/TradeIntelligencePlateform'
import FDIIntelligencePlateform from './pages/FDIIntelligencePlateform'
import Insights from './pages/Insights'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Career from './pages/Career'
export default function App() {
  return (
    <BrowserRouter>
   
      <Header />     
   
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/our-offerings" element={<Offerings />} />
            <Route path="/startup-idea-validator-tools" element={<IdeaValidatorTool />} />
            <Route path="/business-model-generator" element={<BusinessModelGenerator />} />
            <Route path="/fdi-institute" element={<FDIInstitute />} />
            <Route path="/fdi-crm" element={<FDICRM />} />
            <Route path="/trade-intelligence-plateform" element={<TradeIntelligencePlateform />} />
            <Route path="/fdi-intelligence-plateform" element={<FDIIntelligencePlateform />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact-us" element={<Contact />} />
         
        </Routes>     

      <Footer />
    
  </BrowserRouter>
  )
}
