import React from "react";
import WaitingList from "../components/WaitingList";

function page() {
  return (
    <section className='bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800'>
      <WaitingList />
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-extrabold text-center text-blue-700 mb-8'>
          Contact Us
        </h2>

        <form className='space-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
          </div>

          <div>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-gray-700'>
              Subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              required
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              required
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'></textarea>
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default page;
