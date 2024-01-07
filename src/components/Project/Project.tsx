import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { propsInterface } from '../../helpers/projects';

const Project = (props: propsInterface) => {
  const { icons, name, description, projectLink, githubLink, demoData } = props;

  return (
    <>
      <a href={projectLink} className='flex flex-col justify-between' target='_blank'>
        <div>
          <div className='font-roboto hover:rounded-2xl hover:bg-gray-100 p-4'>
            <div className=' h-[300px]'>
              <div className='flex space-x-4'>
                {icons.map((icon, index) => {
                  return (
                    <img src={icon} alt='logo' key={index} className='h-8' />
                  );
                })}
              </div>
              <br />
              <h2 className='text-base font-bold text-gray-600'>{name}</h2>

              <br />
              <p className='text-gray-400 font-sans text-justify'>
                {description}
              </p>
              <p className='text-gray-400 font-sans text-justify whitespace-pre text-sm'>
                {demoData}
              </p>
            </div>
            <br />
            <div className='flex flex-row w-full justify-between text-gray-600 text-xs'>
              
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
        </div>
      </a>
    </>
  );
};

export default Project;
