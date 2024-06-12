import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-start md:space-x-8">
        <h2 className="text-4xl font-bold underline mb-6 md:mb-0">CONNECT WITH ME</h2>
        <div className="flex space-x-6">
          <a href="https://github.com/shahsarefin" target="_blank" rel="noopener noreferrer" className="text-4xl">
            <FontAwesomeIcon icon={faGithub} className="text-teal-400 hover:text-teal-600" />
          </a>
          <a href="https://www.linkedin.com/in/shahsarefin/" target="_blank" rel="noopener noreferrer" className="text-4xl">
            <FontAwesomeIcon icon={faLinkedin} className="text-teal-400 hover:text-teal-600" />
          </a>
          <a href="mailto:shahsarefin@gmail.com" target="_blank" rel="noopener noreferrer" className="text-4xl">
            <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 hover:text-teal-600" />
          </a>
          <a href="https://twitter.com/shahsarefin" target="_blank" rel="noopener noreferrer" className="text-4xl">
            <FontAwesomeIcon icon={faXTwitter} className="text-teal-400 hover:text-teal-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
