import React from 'react';
import { Github, Mail } from 'lucide-react';

function Hero({ isDark }) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Hi, I'm Ajith</h2>
        <p className={`text-lg sm:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Full-Stack Developer
        </p>
        <p className={`text-base sm:text-lg max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Specializing in Django and React. Building full-stack web applications 
          and seeking junior developer opportunities to contribute to innovative projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
          <a
            href="https://github.com/aju773"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="mailto:your.email@example.com"
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors border ${
              isDark 
                ? 'border-gray-700 hover:bg-gray-800' 
                : 'border-gray-300 hover:bg-gray-100'
            }`}
          >
            <Mail size={20} />
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
