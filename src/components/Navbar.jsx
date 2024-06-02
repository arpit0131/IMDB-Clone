import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex space-x-8 items-center pl-3 py-3'>
      <Link to='/'>
        <img className='w-[50px]' src={Logo} alt='logo' />
      </Link>
      <Link className='text-blue-500 text-3xl font-bold' to='/'>
        Movies
      </Link>
      <Link className='text-blue-500 text-3xl font-bold' to='/watch-list'>
        Watch List
      </Link>
    </div>
  );
};
export default NavBar;
