// React is not used directly in this file, modern JSX transform removes the need for the default React import
import Navbar from './components/Navbar';         // your existing components
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contacts';
import Timeline from './components/Timeline';
import Hyperspeed from './components/Hyperspeed';
import LetterGlitch from './components/LetterGlitch';
import './styles/App.css';
import './styles/global.css';

function App() {
  return (
    <>
<div className="bgg">
    <LetterGlitch

  glitchSpeed={50}
  centerVignette={false}
  outerVignette={true}
  smooth={true}
  
/>
</div>


    
    </>
  );
}

export default App;
