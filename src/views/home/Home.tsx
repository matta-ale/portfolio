import { useEffect } from 'react';
import HomeAbout from '../../components/HomeAbout/HomeAbout';
import { Projects } from '../../components/Projects/Projects';
import axios from 'axios';

export const Home = () => {
  useEffect(() => {
    const healthCheck = async () => {
      for (let i = 0; i < 20; i++) {
        try {
          const response = await axios.get(
            'https://rodarrent-main-server.onrender.com/hc'
          );
          console.log(response.data);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            console.error('Axios error in health check:', error.message);
          } else {
            console.error('Non-Axios error in health check:', error);
          }
        } finally {
          // Always wait for 3 seconds before the next iteration
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
      console.log('Health check completed');
    };
  
    healthCheck();
  }, []);

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
        <Projects />
      </div>
    </div>
  );
};
