import React from "react";

function Footer() {
  return (
    <div>
      <footer className='relative bg-gray-800 bg-opacity-80 text-white py-10 px-4 md:px-8'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Contact Information */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
            <p>123 School Street</p>
            <p>Your City, State, ZIP</p>
            <p>Email: contact@schoolname.edu</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>
            <ul>
              <li className='mb-2'>
                <a href='#about' className='hover:text-blue-400'>
                  About Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='#programs' className='hover:text-blue-400'>
                  Programs
                </a>
              </li>
              <li className='mb-2'>
                <a href='#admissions' className='hover:text-blue-400'>
                  Admissions
                </a>
              </li>
              <li className='mb-2'>
                <a href='#contact' className='hover:text-blue-400'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400'>
                <svg
                  width='24'
                  height='24'
                  fill='currentColor'
                  className='text-white'>
                  <path d='M22 12a10 10 0 1 0-11 9.9V14.7h-2v-2.7h2v-1.8a3 3 0 0 1 3-3.2 17.6 17.6 0 0 1 2 .1v2.3h-1.3a1.1 1.1 0 0 0-1.2 1.3v1.3h2.5l-.4 2.7h-2.1v7.1a10 10 0 0 0 8-9.9Z' />
                </svg>
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400'>
                <svg
                  width='24'
                  height='24'
                  fill='currentColor'
                  className='text-white'>
                  <path d='M23 5a10 10 0 0 1-2.8.8 5 5 0 0 0 2.2-2.8 10 10 0 0 1-3.1 1.2A5 5 0 0 0 11.9 7a4.9 4.9 0 0 0 .1 1.2A14 14 0 0 1 3 4.2a5 5 0 0 0 .7 6.7A5 5 0 0 1 2.2 10v.1a5 5 0 0 0 4 4.9 5 5 0 0 1-2.3.1 5 5 0 0 0 4.6 3.4 10 10 0 0 1-6.3 2.2 14 14 0 0 0 7.5 2.2c9 0 14-7.5 14-14v-.6a10 10 0 0 0 2.5-2.6Z' />
                </svg>
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400'>
                <svg
                  width='24'
                  height='24'
                  fill='currentColor'
                  className='text-white'>
                  <path d='M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm4.8-7.4a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM22 12a10 10 0 0 0-.8-4.2 5.6 5.6 0 0 0-3.2-3.2 10 10 0 0 0-7.8 0 5.6 5.6 0 0 0-3.2 3.2A10 10 0 0 0 2 12a10 10 0 0 0 .8 4.2 5.6 5.6 0 0 0 3.2 3.2 10 10 0 0 0 7.8 0 5.6 5.6 0 0 0 3.2-3.2A10 10 0 0 0 22 12Zm-2 4.5a3.6 3.6 0 0 1-2.1 2.1 8 8 0 0 1-6.4 0 3.6 3.6 0 0 1-2.1-2.1 8 8 0 0 1 0-6.4 3.6 3.6 0 0 1 2.1-2.1 8 8 0 0 1 6.4 0 3.6 3.6 0 0 1 2.1 2.1 8 8 0 0 1 0 6.4Z' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-8 text-center text-sm text-gray-400'>
          © {new Date().getFullYear()} School Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
