import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../helpers/pathRouters';

const Footer = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] max-w-[1200px] h-24 bg-white z-49 border-t-2 flex justify-center items-center grid grid-cols-1 md:grid-cols-2 '>
        <div className='w-3/5 ml-12'>
          <ul className='flex justify-around font-sans text-xs text-gray-500 font-semibold'>
            <li className='footer-nav-link-item'>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link to={ROUTES.PROJECTS}>Projects</Link>
            </li>
            <li className='footer-nav-link-item'>
              <Link to={ROUTES.CONTACT}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className='font-sans text-sm text-gray-400 flex justify-center'>
          <div className='footer-credits-text'>
            Alexis Mattaruco - Fullstack Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
