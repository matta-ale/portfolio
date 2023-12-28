import React from 'react';
import HomeAbout from '../../components/HomeAbout/HomeAbout';
import { Projects } from '../../components/Projects/Projects';

export const Home = () => {
  return (
    <div className='w-full h-full bg-gray-100'>
      <div className='full-height -mt-20 flex justify-center no-scrollbar'>
        <HomeAbout />
      </div>
      <br />
      <div className='full-height -mt-20 flex justify-center no-scrollbar'>
        <h1>My projects</h1>
      </div>
      <br />
      <div className='full-height  flex justify-center no-scrollbar bg-gray-100 w-full'>
        <Projects />
      </div>
    </div>
  );
};
