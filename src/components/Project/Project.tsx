import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { propsInterface } from '../../helpers/projects';

const Project = (props: propsInterface) => {
  const { icons, name, description, projectLink, githubLink } = props;

  return (
    <div className='font-roboto flex flex-col justify-between'>
      <div>
        <div className='flex space-x-4'>
          {icons.map((icon, index) => {
            return <img src={icon} alt='logo' key={index} className='h-8' />;
          })}
        </div>
        <br />
        <h2 className='text-base font-bold text-gray-600'>{name}</h2>

        <br />
        <p className='text-gray-400 font-sans text-justify'>{description}</p>
      </div>
      <br />
      <div className='flex flex-row w-full justify-between text-gray-600 text-xs'>
        <a href={projectLink}>
          <div className='flex flex-row space-x-4'>
            <div className=''>
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className=''>View project</div>
          </div>
        </a>
        <a href={githubLink}>
          <div className='flex flex-row space-x-4'>
            <div className=''>
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className=''>View code</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
