import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className='text-sm font-semibold text-gray-600 h-10 w-96 rounded-3xl flex justify-around items-center self-center my-5 shadow-xl border-black z-50'>
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
