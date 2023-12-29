import React from 'react';
import { Projects } from '../../components/Projects/Projects';

const ProjectPage = () => {
  return (
    <div className='full-height  flex justify-center no-scrollbar'>
      <div className='w-[100%] max-w-[1200px] h-auto bg-white z-49 pb-40'>
        <div className='w-full min-h-min'>
          <div className='bg-white font-roboto px-20 mt-40 mb-20'>
            <h1 className='text-5xl font-semibold'>My projects</h1>
            <br />
            <br />
            <div className='font-sans text-base text-gray-400 text-justify'>
              <h2>
                Thank you for your interest in my project portfolio. From coding
                trading bots in Python to self-taught and Bootcamp web
                development, these projects mark my evolving journey.
              </h2>
              <h2>
                Eager for new challenges, I'm actively seeking intricate
                projects to elevate my knowledge and enhance the quality of my
                portfolio. Explore my dynamic projects that reflect my passion
                for coding and pursuit of excellence.
              </h2>
              <h2>
                The technologies employed across all projects span React.js,
                Redux, pure CSS, Tailwind, Node.js, Express, PostgreSQL, Google
                OAuth2, and more. For upcoming projects, my aim is to
                continually integrate new frameworks and tools, expanding my
                knowledge while maintaining a focus on web development with
                React/Node. and adding a Python backend framework.
              </h2>
            </div>
          </div>
          <div className='full-height  flex justify-center no-scrollbar bg-gray-100 w-full'>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
