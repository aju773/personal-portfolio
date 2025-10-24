import React from 'react';

function Footer({ isDark }) {
  return (
    <footer className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} mt-12 sm:mt-20`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
        <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 Ajith. Open to junior developer opportunities.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
