"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative px-4 py-4 flex justify-between items-center bg-white'>
      <Link href='/' className='text-3xl font-bold leading-none'>
        <img
          className='w-16 ml-2'
          src='https://static.vecteezy.com/system/resources/previews/014/606/034/original/footprint-icon-smelly-feet-the-concept-of-keeping-your-feet-healthy-by-washing-your-feet-png.png'
          alt=''
        />
      </Link>

      {/* Mobile menu button */}
      <div className='lg:hidden'>
        <button
          onClick={toggleMenu}
          className='navbar-burger flex items-center text-blue-600 p-3'>
          <svg className='block h-4 w-4 fill-current' viewBox='0 0 20 20'>
            <title>Mobile menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <ul className='hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6'>
        <li>
          <Link href='/' className='text-sm text-gray-400 hover:text-gray-500'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' className='text-sm text-blue-600 font-bold'>
            About Us
          </Link>
        </li>
        <li>
          <Link
            href='/team'
            className='text-sm text-gray-400 hover:text-gray-500'>
            Team
          </Link>
        </li>
        <li>
          <Link
            href='/media'
            className='text-sm text-gray-400 hover:text-gray-500'>
            Media
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className='text-sm text-gray-400 hover:text-gray-500'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile menu overlay */}
      <div
        className={`navbar-menu relative z-50 ${isOpen ? "block" : "hidden"}`}>
        <div
          className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'
          onClick={toggleMenu}></div>
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto'>
          <div className='flex items-center mb-8'>
            <Link href='/' className='mr-auto text-3xl font-bold leading-none'>
              <img
                className='w-16'
                src='https://static.vecteezy.com/system/resources/previews/014/606/034/original/footprint-icon-smelly-feet-the-concept-of-keeping-your-feet-healthy-by-washing-your-feet-png.png'
                alt=''
              />
            </Link>
            <button onClick={toggleMenu} className='navbar-close'>
              <svg
                className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path d='M10 8.586L15.293 3.293a1 1 0 011.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 011.414-1.414L10 8.586z' />
              </svg>
            </button>
          </div>

          <ul className='space-y-4'>
            <li>
              <Link
                href='/'
                onClick={toggleMenu}
                className='text-sm text-gray-700 hover:text-blue-600'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                onClick={toggleMenu}
                className='text-sm text-gray-700 hover:text-blue-600'>
                About Us
              </Link>
            </li>
            <li>
              <Link
                href='/team'
                onClick={toggleMenu}
                className='text-sm text-gray-700 hover:text-blue-600'>
                Team
              </Link>
            </li>
            <li>
              <Link
                href='/media'
                onClick={toggleMenu}
                className='text-sm text-gray-700 hover:text-blue-600'>
                Media
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                onClick={toggleMenu}
                className='text-sm text-gray-700 hover:text-blue-600'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
