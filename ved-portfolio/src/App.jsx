// React is not used directly in this file, modern JSX transform removes the need for the default React import
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';         // your existing components
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contacts';
import Timeline from './components/Timeline';
import Hyperspeed from './components/Hyperspeed';
import LetterGlitch from './components/LetterGlitch';
import './styles/global.css';
import './styles/App.css';
import profileImg from './assets/profile.png'; // <- adjust path/filename
import Loader from './pages/Loader.jsx';

function App() {
  //loading function --start
  const [loading, setLoading] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    // simulate load delay — replace with real load event if needed
    const t = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(t);
  }, []);

  // Remove overlay after a short fade-out when loading completes
  useEffect(() => {
    if (!loading) {
      const t2 = setTimeout(() => setOverlayVisible(false), 320); // match CSS fade duration
      return () => clearTimeout(t2);
    }
  }, [loading]);

  return (
    <>
      {overlayVisible && (
        <div className={`loader-overlay ${loading ? 'entering' : 'exiting'}`} aria-hidden={!loading}>
          <Loader />
        </div>
      )}

      <div className="bgg">
        <div className="photo">
          <img src={profileImg} alt="profile" />
        </div>

        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>
      {/* Loader inside overlay/time-based: removed duplicated inline Loader */}

    </>
  );
}

export default App;
