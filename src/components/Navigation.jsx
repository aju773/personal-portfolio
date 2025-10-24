import React from 'react';
import { Moon, Sun } from 'lucide-react';

function Navigation({ isDark, setIsDark }) {
  return (
    <nav className={`fixed top-0 w-full z-10 backdrop-blur-sm ${
      isDark ? 'bg-gray-900/80' : 'bg-white/80'
    } border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Ajith</h1>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-lg transition-colors ${
            isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
