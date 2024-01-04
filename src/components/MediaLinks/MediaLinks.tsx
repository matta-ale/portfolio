import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MediaLinks = () => {
  return (
    <div className='text-3xl text-gray-500 space-x-6'>
      <a href='https://github.com/matta-ale' target='_blank'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href='https://www.linkedin.com/in/alexis-mattaruco-64037b231/' target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://drive.google.com/file/d/102nJZ7oA9CYleIePFA8Df_sYETKMEcdm/view' target='_blank'>
        <FontAwesomeIcon icon={faFile} />
      </a>
      <a href='mailto:matta.ale@gmail.com?subject=Contact&body=Hello,%20i%27m%20interested%20in%20getting%20in%20touch%20with%20you.' target='_blank'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href='https://wa.me/543416246433' target='_blank'>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default MediaLinks;
