import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    <div className='full-height  flex justify-center no-scrollbar'>
      <div className='w-[100%] max-w-[1200px] h-auto bg-white z-49'>
        <div className='w-full min-h-min'>
          <div className='bg-white font-roboto px-20 mt-40 mb-20'>
            <h1 className='text-5xl font-semibold w-1/2'>
              Let's Get in Touch: Ways to Connect with Me
            </h1>
            <br />
            <br />
            <div className='font-sans text-base text-gray-400 text-justify'>
              <h2>
                Thank you for exploring my portfolio! If you have any inquiries,
                collaboration opportunities, or just want to say hello, feel
                free to get in touch. I'm passionate about creating innovative
                web solutions and would love to discuss how I can contribute to
                your project.
              </h2>
              <br />
              <br />
              <div className='text-3xl text-gray-500 space-x-6 space-y-2 flex flex-col items-start w-full'>
                <div className='flex items-center space-x-3'>
                  <a href='https://github.com/matta-ale'>
                    <FontAwesomeIcon icon={faGithub} className='ml-6 w-5' />
                  </a>
                  <h2 className='text-base font-semibold'>Follow on Github</h2>
                </div>
                <div className='flex items-center space-x-3'>
                  <a href='https://www.linkedin.com/in/alexis-mattaruco-64037b231/'>
                    <FontAwesomeIcon icon={faLinkedin} className='w-5' />
                  </a>
                  <h2 className='text-base font-semibold'>
                    Follow on Linkedin
                  </h2>
                </div>
                <div className='flex items-center space-x-3'>
                  <a href='mailto:matta.ale@gmail.com?subject=Contact&body=Hello,%20i%27m%20interested%20in%20getting%20in%20touch%20with%20you.'>
                    <FontAwesomeIcon icon={faEnvelope} className='w-5' />
                  </a>
                  <h2 className='text-base font-semibold'>Send me an e-mail</h2>
                </div>
                <div className='flex items-center space-x-3'>
                  <a href='https://wa.me/543416246433'>
                    <FontAwesomeIcon icon={faWhatsapp} className='w-5' />
                  </a>
                  <h2 className='text-base font-semibold'>
                    Text me through Whatsapp
                  </h2>
                </div>
              </div>
              <br />
              <br />
              <h2>
                I'm always open to new challenges and exciting projects. Don't
                hesitate to reach out—I look forward to connecting with you!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
