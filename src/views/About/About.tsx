import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import aboutImage from '../../assets/img/aboutImage1.jpg';

const About = () => {
  return (
    <div className='full-height  flex justify-center no-scrollbar'>
      <div className='w-[100%] max-w-[1200px] h-auto bg-white z-49 pb-40'>
        <div className='w-full min-h-min'>
          <div className=' bg-white mt-48 space-x-20 mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='bg-white font-roboto'>
              <h1 className='text-5xl font-semibold'>Alexis Mattaruco</h1>
              <br />
              <h2 className='text-2xl font-semibold'>Fullstack developer</h2>
              <br />
              <div className='font-sans text-base text-gray-400'>
                <h2>
                  With over 15 years of experience in Supply Chain as an
                  industrial engineer, I am determined to make a career shift
                  and immerse myself in the world of Full Stack web development.
                </h2>
                <br />
                <h2>
                  My interest in finance, which led me to pursue a master's
                  degree in the field, has given me a profound understanding of
                  the financial aspects that can be valuable in the development
                  of Fintech applications. Furthermore, my experience in Supply
                  Chain allows me to comprehend the needs of clients in this
                  sector and contribute to technological solutions that enhance
                  their efficiency and management.
                </h2>
                <br />
                <h2>
                  I have finished a specialized bootcamp in Full Stack
                  Development and I am working on projects to expand my
                  portfolio. I have strong skills in Javascript, React, Redux,
                  Node.js, Express, Sequelize, and PostgreSQL.
                </h2>
                <br />
                <h2>
                  I'm based in Rosario, Argentina, and I'm looking for an
                  opportunity to join this exciting industry and help
                  organizations achieve their goals.
                </h2>
                <br />
                <div className='text-3xl text-gray-500 space-x-6'>
                  <FontAwesomeIcon icon={faGithub} />
                  <FontAwesomeIcon icon={faLinkedin} />
                  <FontAwesomeIcon icon={faFile} />
                  <FontAwesomeIcon icon={faEnvelope} />
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
              </div>
              <br />
              <br />
            </div>
            <div
              className='relative overflow-hidden transform rotate-3'
              style={{
                maxWidth: '420px',
                maxHeight: '420px',
                width: '100%',
                height: 'auto',
                minWidth: '380px',
              }}
            >
              <img
                src={aboutImage}
                alt='About image'
                className='object-cover w-full h-full absolute inset-0 rounded-3xl'
              />
            </div>
          </div>
        </div>
        <div className='font-roboto w-full'>
          <div>  
          <h2 className='text-2xl font-semibold text-black'>My skills</h2>
          <br />
          <div className='flex justify-between w-full'>
            <div>
              <h2 className='text-black font-semibold text-lg'> Tech skills</h2>
              <div className='flex justify-between'>
                <ul className='list-disc text-black ml-6'>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Tailwind</li>
                </ul>
                <ul className='list-disc text-black ml-6'>
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Python</li>
                  <li>Github Flow</li>
                </ul>
              </div>
            </div>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-black font-semibold text-lg'>
                  Soft skills
                </h2>
                <ul className='list-disc text-black ml-6'>
                  <li>Agile methodology - SCRUM</li>
                  <li>Team work</li>
                  <li>Team leadership</li>
                  <li>Capital markets and cryptocurrencies</li>
                  <li>Supply Chain and production processes</li>
                </ul>
              </div>
              <br />
              <div>
                <h2 className='text-black font-semibold text-lg'>Languages:</h2>
                <br />
                <ul className='list-disc text-black ml-6'>
                  <li>English: C1</li>
                  <li>Spannish: native</li>
                </ul>
              </div>
            </div>
            <div className='text-3xl text-gray-500 space-x-6 flex flex-col justify-between h-56 items-center'></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
