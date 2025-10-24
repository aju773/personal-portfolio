import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';

function SkillCard({ icon, title, items, isDark }) {
  return (
    <div className={`rounded-xl p-4 sm:p-6 border ${
      isDark 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={isDark ? 'text-blue-400' : 'text-blue-600'}>
          {icon}
        </div>
        <h4 className="text-base sm:text-lg font-semibold">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 rounded-lg text-xs sm:text-sm ${
              isDark 
                ? 'bg-gray-700 text-gray-200' 
                : 'bg-gray-50 text-gray-700'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills({ isDark }) {
  const skills = {
    backend: ['Django', 'Django Rest Framework'],
    frontend: ['React'],
    tools: ['Git & GitHub', 'Linux', 'VSCode', 'NeoVim'],
    languages: ['Python', 'JavaScript', 'HTML', 'CSS'],
    database: ['MySQL']
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">Skills</h3>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <SkillCard
          icon={<Code size={24} />}
          title="Backend Development"
          items={skills.backend}
          isDark={isDark}
        />
        <SkillCard
          icon={<Code size={24} />}
          title="Frontend Development"
          items={skills.frontend}
          isDark={isDark}
        />
        <SkillCard
          icon={<Wrench size={24} />}
          title="Tools"
          items={skills.tools}
          isDark={isDark}
        />
        <SkillCard
          icon={<Code size={24} />}
          title="Languages"
          items={skills.languages}
          isDark={isDark}
        />
        <SkillCard
          icon={<Database size={24} />}
          title="Database"
          items={skills.database}
          isDark={isDark}
        />
      </div>
    </section>
  );
}

export default Skills;
