import React from 'react';
import aboutImage from '../../assets/img/aboutImage2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomeAbout = () => {
  return (
    <div className='w-4/5 h-screen bg-white z-49 '>
      <div className='w-full h-screen'>
        <div className=' bg-white flex justify-center  mt-48 space-x-20 mx-20'>
          <div className='w-2/5 bg-white font-roboto'>
            <h1 className='text-5xl font-semibold'>Fullstack web developer</h1>
            <h2 className="text-2xl font-semibold">Alexis Mattaruco</h2>
            <br />
            <br />
            <div className='font-sans text-base text-gray-400'>
              <h2>
                With over 15 years of experience in Supply Chain as an
                industrial engineer, I am determined to make a career shift and
                immerse myself in the world of Full Stack web development.
              </h2>
              <h2>
                I have finished a specialized bootcamp in Full Stack Development
                and I am working on projects to expand my portfolio. I have
                strong skills in Javascript, React, Redux, Node.js, Express,
                Sequelize, and PostgreSQL
              </h2>
              <br />
              <div className='text-3xl text-gray-500 space-x-5'>
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faFile} />
              </div>
            </div>
          </div>
          <div
            className='relative overflow-hidden transform rotate-3'
            style={{ width: '400px', height: '400px' }}
          >
            <img
              src={aboutImage}
              alt='About image'
              className='object-cover w-full h-full absolute inset-0 rounded-3xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
