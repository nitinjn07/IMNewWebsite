import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import About from "./pages/About";
import Home from "./common/Home";
import Offerings from "./pages/Offerings";
import IdeaValidatorTool from "./pages/IdeaValidatorTool";
import BusinessModelGenerator from "./pages/BusinessModelGenerator";
import FDIInstitute from "./pages/FDIInstitute";
import FDICRM from "./pages/FDICRM";
import TradeIntelligencePlateform from "./pages/TradeIntelligencePlateform";
import FDIIntelligencePlateform from "./pages/FDIIntelligencePlateform";
import Insights from "./pages/Insights";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Elevate from "./pages/Elevate";
import Alpha from "./pages/Alpha";
import Beta from "./pages/Beta";
import Gamma from "./pages/Gamma";
import Sigma from "./pages/Sigma";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ThankYou from "./pages/ThankYou";
import Termofuse from "./pages/Termofuse";
import { useTranslation } from "react-i18next";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/our-offerings" element={<Offerings />} />
        <Route
          path="/startup-idea-validator-tools"
          element={<IdeaValidatorTool />}
        />
        <Route
          path="/business-model-generator"
          element={<BusinessModelGenerator />}
        />
        <Route path="/fdi-institute" element={<FDIInstitute />} />
        <Route path="/fdi-crm" element={<FDICRM />} />
        <Route
          path="/trade-intelligence-plateform"
          element={<TradeIntelligencePlateform />}
        />
        <Route
          path="/fdi-intelligence-plateform"
          element={<FDIIntelligencePlateform />}
        />
        <Route path="/insights" element={<Insights />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/elevate-by-im" element={<Elevate />} />
        <Route path="/Alpha" element={<Alpha />} />
        <Route path="/Beta" element={<Beta />} />
        <Route path="/Gamma" element={<Gamma />} />
        <Route path="/Sigma" element={<Sigma />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="/term-of-use" element={<Termofuse />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
