import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8 text-center">
      <div className="container mx-auto">

      <blockquote className="mt-4 italic text-gray-400 max-w-xl mx-auto">
          "If at first you don't succeed; call it version 1.0." - Anonymous
        </blockquote>
        <p className="text-lg mb-2">
          Built with <FontAwesomeIcon icon={faHeart} className="text-white" /> by Tanweer | {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
