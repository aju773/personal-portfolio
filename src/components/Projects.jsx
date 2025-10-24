import React from 'react';
import { Github } from 'lucide-react';

function Projects({ isDark }) {
  const project = {
    name: 'Movie Booking App',
    description: 'A full-stack movie booking application built with Django and React',
    github: 'https://github.com/aju773/movie-booking-app.git',
    tech: ['Django', 'React', 'MySQL']
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">Projects</h3>
      <div className={`rounded-xl p-6 sm:p-8 border ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <h4 className="text-xl sm:text-2xl font-semibold mb-3">{project.name}</h4>
        <p className={`mb-4 text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                isDark 
                  ? 'bg-gray-700 text-gray-200' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
            isDark 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <Github size={18} />
          View on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
