import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ScrollToTop from './animation/ScrollToTop'
import IndustriesOfExcellence from './components/IndustriesOfExcellence'
import CoreTechnologies from './components/CoreTechnologies'
import Footersection from './components/Footer'
import SolutionsSection from './components/SolutionsSection'
import CompanyPage from './pages/CompanyPage'
import WhyUsPage from './pages/WhyUsPage'
import VisionPage from './pages/VisionPage'
import MissionPage from './pages/MissionPage'
import ItConsultingPage from './pages/Solutions/ITConsultingPage'
import ItOutsourcingPage from './pages/Solutions/ITOutsourcingPage'
import TestingQAPage from './pages/Solutions/TestingQAPage'
import MortgageSolutionsPage from './pages/Solutions/MortgageSolutions'
import PowerAppsPage from './pages/Solutions/PowerAppsPage'
import CloudSolutionsPage from './pages/Solutions/CloudSolutionsPage'
import BiVisualizationPage from './pages/Solutions/BiVisualizationPage'
import TechnologyPage from './pages/Industries/TechnologyPage'
import FinancialServicesPage from './pages/Industries/FinancialServicePage'
import ConsumerGoodsPage from './pages/Industries/ConsumerGoodsPage'
import InsurancePage from './pages/Industries/InsurancePage'
import HealthcarePage from './pages/Industries/HealthCarePage'
import TelecommunicationPage from './pages/Industries/TelecommunicationPage'
import HospitalityPage from './pages/Industries/HospitalityPage'
import MicrosoftTechnologiesPage from './pages/Technologies/MicrosoftTechnologiesPage'
import OraclePage from './pages/Technologies/OraclePage'
import SapPage from './pages/Technologies/SapPage'
import BlockchainPage from './pages/Technologies/BlockchainPage'
import SalesforcePage from './pages/Technologies/SalesforcePage'
import MiddlewarePage from './pages/Technologies/MiddlewarePage'
import ApplicationDevelopmentPage from './pages/Technologies/ApplicationDevelopmentPage'
import EmbeddedSystemsPage from './pages/CoreTechnologies/EmbeddedSystemPage'
import NetworkingPage from './pages/CoreTechnologies/NetworkingPage'
import VLSIPage from './pages/CoreTechnologies/VLSIPage'
import DesignVerificationPage from './pages/CoreTechnologies/DesignVerificationPage'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <Router>
        {/* ✅ No horizontal scroll, normal vertical scroll */}
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-hidden relative">
          <ScrollToTop/>
          <Header/>
          <Routes>
            <Route path="/" element={
              <div>
                <HeroSection/>
                <AboutSection/>
                <SolutionsSection/>
                <IndustriesOfExcellence/>
                <CoreTechnologies/>
                {/* <NetworkProcessorsSection/> */}
              </div>
            }/>
            <Route path='/company' element={<CompanyPage/>}/>
            <Route path='/why-us' element={<WhyUsPage/>}/>
            <Route path='/vision' element={<VisionPage/>}/>
            <Route path='/mission' element={<MissionPage/>}/>
            <Route path='/it-consulting' element={<ItConsultingPage/>}/>
            <Route path='/it-outsourcing' element={<ItOutsourcingPage/>}/>
            <Route path='/testing-qa' element={<TestingQAPage/>}/>
            <Route path='/mortgage-solutions' element={<MortgageSolutionsPage/>}/>
            <Route path='/power-apps' element={<PowerAppsPage/>}/>
            <Route path='/cloud-solutions' element={<CloudSolutionsPage/>}/>
            <Route path='/bi-visualization' element={<BiVisualizationPage/>}/>
            <Route path='/technology' element={<TechnologyPage/>}/>
            <Route path='/financial-services' element={<FinancialServicesPage/>}/>
            <Route path='/consumer-goods' element={<ConsumerGoodsPage/>}/>
            <Route path='/insurance' element={<InsurancePage/>}/>
            <Route path='/health-care' element={<HealthcarePage/>}/>
            <Route path='/telecommunication' element={<TelecommunicationPage/>}/>
            <Route path='/hospitality' element={<HospitalityPage/>}/>
            <Route path='/microsoft-technologies' element={<MicrosoftTechnologiesPage/>}/>
            <Route path='/oracle' element={<OraclePage/>}/>
            <Route path='/sap' element={<SapPage/>}/>
            <Route path='/block-chain' element={<BlockchainPage/>}/>
            <Route path='/salesforce' element={<SalesforcePage/>}/>
            <Route path='/middleware' element={<MiddlewarePage/>}/>
            <Route path='/application-development' element={<ApplicationDevelopmentPage/>}/>
            <Route path='/embedded-systems' element={<EmbeddedSystemsPage/>}/>
            <Route path='/networking' element={<NetworkingPage/>}/>
            <Route path='/vlsi-design' element={<VLSIPage/>}/>
            <Route path='/design-verification' element={<DesignVerificationPage/>}/>
            <Route path='/contact-us' element={<ContactSection/>}/>
          </Routes>
          <Footersection/>
        </div>
      </Router>
    </> 
  )
}

export default App