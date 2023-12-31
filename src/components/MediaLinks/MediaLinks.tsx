import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MediaLinks = () => {
  return (
    <div className='text-3xl text-gray-500 space-x-6'>
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faFile} />
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
};

export default MediaLinks;
