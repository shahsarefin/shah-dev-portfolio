import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-bold text-teal-400 mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex space-x-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-600">
          <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
        </a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-600">
          <FontAwesomeIcon icon={faCode} /> Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
