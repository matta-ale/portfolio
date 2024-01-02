import React from 'react';
import HomeAbout from '../../components/HomeAbout/HomeAbout';
import { Projects } from '../../components/Projects/Projects';

export const Home = () => {
  return (
    <div className='w-full h-full bg-gray-100'>
      <div className='full-height  flex justify-center no-scrollbar'>
        <HomeAbout />
      </div>
      <br />
      <div className='full-height -mt-20 flex justify-center no-scrollbar'>
        <div className='w-[100%] max-w-[1200px] px-20 bg-white'>
          <h1 className='font-roboto text-4xl font-semibold'>Projects</h1>
          <br />
          <br />
        </div>
      </div>
      <div className='full-height  flex justify-center no-scrollbar bg-gray-100 w-full'>
        <Projects  />
      </div>
    </div>
  );
};
