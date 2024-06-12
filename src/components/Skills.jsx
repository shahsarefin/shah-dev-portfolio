import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const skills = [
  { id: 1, name: 'HTML', icon: 'fab fa-html5' },
  { id: 2, name: 'CSS', icon: 'fab fa-css3-alt' },
  { id: 3, name: 'JavaScript', icon: 'fab fa-js' },
  { id: 4, name: 'React', icon: 'fab fa-react' },
  { id: 5, name: 'Node.js', icon: 'fab fa-node' },
  { id: 6, name: 'Angular', icon: 'fab fa-angular' },
  { id: 7, name: 'Git & GitHub', icon: 'fab fa-git-alt' },
  { id: 8, name: 'MongoDB', icon: 'fas fa-database' },
  { id: 9, name: 'PHP & MySQL', icon: 'fab fa-php' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10 underline">SKILLS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {skills.map(skill => (
          <div key={skill.id} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
            <i className={`${skill.icon} text-4xl text-teal-400 mb-2`}></i>
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
