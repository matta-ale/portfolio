import React from 'react';
import aboutImage from '../../assets/img/aboutImage2.jpg';
import MediaLinks from '../MediaLinks/MediaLinks';

const HomeAbout = () => {
  return (
    <div className='w-[100%] max-w-[1200px] h-auto bg-white z-49 pb-40'>
      <div className='w-full min-h-min'>
        <div className=' bg-white mt-48 space-x-20 mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <div className='bg-white font-roboto'>
            <h1 className='text-5xl font-semibold'>Fullstack web developer</h1>
            <br />
            <h2 className='text-2xl font-semibold'>Alexis Mattaruco</h2>
            <br />
            <div className='font-sans text-base text-gray-400'>
              <h2>
                With over 15 years of experience in Supply Chain as an
                industrial engineer, I am determined to make a career shift and
                immerse myself in the world of Full Stack web development.
              </h2>
                I discovered my passion for programming through learning by myself
                to code in Python aiming to build algorithmic trading bots (there is a
                couple of examples of this in the project section). This journey
                convinced me to start a career as a software developer.
              <h2>
                In order to achieve that, I have finished a specialized bootcamp
                in Full Stack Development and I am working on projects to expand
                my portfolio. I have strong skills in Javascript, React, Redux,
                Node.js, Express, Sequelize, and PostgreSQL
              </h2>
              <br />
              <MediaLinks/>
            </div>
          </div>
          <div
            className='relative overflow-hidden transform rotate-3'
            style={{ maxWidth: '420px', maxHeight: '420px', width: '100%', height: 'auto', minWidth: '380px' }}
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
