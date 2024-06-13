import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold underline mb-6">CONNECT WITH ME</h2>
        <div className="flex flex-wrap justify-center space-x-6 text-2xl md:text-3xl">
          <a href="https://github.com/shahsarefin" target="_blank" rel="noopener noreferrer" className="m-2">
            <FontAwesomeIcon icon={faGithub} className="text-teal-400 hover:text-teal-600" />
          </a>
          <a href="https://www.linkedin.com/in/shaharefin/" target="_blank" rel="noopener noreferrer" className="m-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-teal-400 hover:text-teal-600" />
          </a>
          <a href="mailto:shah.arefin.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="m-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 hover:text-teal-600" />
          </a>
          <a href="https://twitter.com/shahsarefin" target="_blank" rel="noopener noreferrer" className="m-2">
            <FontAwesomeIcon icon={faTwitter} className="text-teal-400 hover:text-teal-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
