import "./App.css";
import NavBar from './components/navbar.jsx';
import HeroSection from './components/Pages/HeroSection.jsx'
import AboutSection from './components/Pages/AboutSection.jsx';
import MouseTracker from './components/mousecourser.jsx'
import Services from './components/Pages/ServicesSection.jsx'
import SkillsSection from './components/Pages/SkillSection.jsx'
import ProjectSection from './components/Pages/ProjectSection.jsx';
import ContactSection from './components/Pages/ContactSection.jsx'
import ClientProject from './components/Pages/CleintProjectSection.jsx';
import FooterSection from './components/Pages/FooterSection.jsx';


function App() {
  return (
    <>
    <MouseTracker/>
    <NavBar/>
    <HeroSection /> 
    <AboutSection/>
    <Services/>
    <SkillsSection/>
    <ProjectSection/>
    <ContactSection/>
    <ClientProject />
    <FooterSection />

  </>

  );
}

export default App;
