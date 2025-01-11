import AboutSection from './Components/AboutSection';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import SkillSection from './Components/SkillSection';
import Contact from './Components/Contact';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <SkillSection />
      <Contact />
    </div>
  );
}

export default App;