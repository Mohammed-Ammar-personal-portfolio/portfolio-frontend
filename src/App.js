import AboutSection from './Components/AboutSection';
import HeroSection from './Components/HeroSection';
import SkillSection from './Components/SkillSection';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-gray-900 text-white">
      <HeroSection/>
      <AboutSection/>
      <SkillSection />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;