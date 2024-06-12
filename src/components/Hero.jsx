import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import

import profileImage from '../assets/images/LinkedIn-BW.jpeg';

const Hero = () => {
  return (
    <section id="home" className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div id="home__container" className="container mx-auto grid lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <div className="bg-gray-800 p-2 rounded-full shadow-lg">
            <img src={profileImage} alt="Profile" className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-full" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">SHAH SULTANUL AREFIN</h1>
          <h2 className="text-lg md:text-2xl mb-6">Web Developer</h2>
          <p className="mb-8 max-w-md text-sm md:text-base mx-auto lg:mx-0">Passionate about developing web applications. Thrives in dynamic environments and adapts to new challenges with a can-do attitude.</p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            <a href="https://github.com/shahsarefin" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FontAwesomeIcon icon={faGithub} className="text-teal-400 hover:text-teal-600" />
            </a>
            <a href="https://www.linkedin.com/in/shahsarefin/" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FontAwesomeIcon icon={faLinkedin} className="text-teal-400 hover:text-teal-600" />
            </a>
            <a href="mailto:shahsarefin@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 hover:text-teal-600" />
            </a>
            <a href="https://twitter.com/shahsarefin" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FontAwesomeIcon icon={faTwitter} className="text-teal-400 hover:text-teal-600" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start space-x-2 md:space-x-4">
            <a href="#projects" className="inline-block py-2 px-3 md:px-4 bg-teal-400 text-gray-800 font-semibold rounded-lg hover:bg-teal-600 text-sm md:text-base">
              See Projects
            </a>
            <a href="https://github.com/shahsarefin" target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-3 md:px-4 bg-teal-400 text-gray-800 font-semibold rounded-lg hover:bg-teal-600 text-sm md:text-base">
              See GitHub
            </a>
            <a href="https://drive.google.com/your_drive_link_here" target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-3 md:px-4 bg-teal-400 text-gray-800 font-semibold rounded-lg hover:bg-teal-600 text-sm md:text-base">
              See Resume
            </a>
            <a href="mailto:shahsarefin@gmail.com" className="inline-block py-2 px-3 md:px-4 bg-teal-400 text-gray-800 font-semibold rounded-lg hover:bg-teal-600 text-sm md:text-base">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
