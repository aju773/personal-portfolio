import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
