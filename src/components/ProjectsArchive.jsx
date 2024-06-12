import React from 'react';
import ProjectCard from './ProjectCard';

const allProjects = [
  { id: 1, title: 'Viberr', description: 'Streaming App', image: '/src/assets/project1.jpg', liveLink: '#', repoLink: '#', technologies: ['React', 'Node.js', 'Express'] },
  { id: 2, title: 'Fresh Burger', description: 'Restaurant Shop', image: '/src/assets/project2.jpg', liveLink: '#', repoLink: '#', technologies: ['React', 'Node.js', 'MongoDB'] },
  { id: 3, title: 'Hipstster', description: 'Glasses Shop', image: '/src/assets/project3.jpg', liveLink: '#', repoLink: '#', technologies: ['React', 'Firebase', 'Tailwind CSS'] },
  { id: 4, title: 'FitLift', description: 'Fitness App', image: '/src/assets/project4.jpg', liveLink: '#', repoLink: '#', technologies: ['React Native', 'Redux', 'Firebase'] },
  { id: 5, title: 'New Project', description: 'Description of new project', image: '/src/assets/project5.jpg', liveLink: '#', repoLink: '#', technologies: ['Next.js', 'Strapi'] },
  { id: 6, title: 'Another Project', description: 'Another description', image: '/src/assets/project6.jpg', liveLink: '#', repoLink: '#', technologies: ['Vue.js', 'Django'] },
  { id: 7, title: 'Extra Project', description: 'Extra description', image: '/src/assets/project7.jpg', liveLink: '#', repoLink: '#', technologies: ['Angular', 'Firebase'] },
  // ... Add all other projects here
];

const ProjectsArchive = () => {
  return (
    <section id="projects-archive" className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10 underline">Full Project Archive</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsArchive;
