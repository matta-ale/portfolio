import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../helpers/pathRouters';

const Navbar = () => {
  const location = useLocation().pathname;
  return (
    <>
        
        <div className='flex justify-center'>
        {/* <img
            src={image}
            alt='face image'
            className='w-14 h-14 overflow-hidden object-cover rounded-full my-5'
          /> */}
          <div className='bg-white fixed mt-24 text-sm font-semibold text-gray-600 h-10 w-96 rounded-3xl flex justify-around items-center self-center my-5 shadow-xl border-black z-50'>
            <Link
              to={ROUTES.HOME}
              className={
                location === ROUTES.HOME ? ' text-teal-500' : 'text-black'
              }
            >
              Home
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className={
                location === ROUTES.ABOUT ? 'text-teal-500' : 'text-black'
              }
            >
              About
            </Link>
            <Link
              to={ROUTES.PROJECTS}
              className={
                location === ROUTES.PROJECTS ? 'text-teal-500' : 'text-black'
              }
            >
              Projects
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className={
                location === ROUTES.CONTACT ? 'text-teal-500' : 'text-black'
              }
            >
              Contact
            </Link>
          </div>
        </div>
    </>
  );
};

export default Navbar;
