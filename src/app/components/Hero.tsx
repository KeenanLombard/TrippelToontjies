import React from "react";

function Hero() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 flex items-center justify-center'>
      {/* Animated Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradient-flow'></div>

      {/* Pulsating Circles */}
      <div className='absolute w-64 h-64 bg-white opacity-20 rounded-full animate-pulse-slow top-1/4 left-1/3'></div>
      <div className='absolute w-96 h-96 bg-purple-300 opacity-10 rounded-full animate-pulse-slow top-1/3 right-1/4'></div>
      <div className='absolute w-80 h-80 bg-pink-400 opacity-10 rounded-full animate-pulse-slow bottom-1/4 left-1/4'></div>

      {/* Hero Content */}
      <div className='relative z-10 text-center px-6'>
        <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>
          Welcome to the Future
        </h1>
        <p className='text-lg md:text-xl text-white opacity-90 mb-8'>
          Experience the elegance of motion and design. Start your journey now!
        </p>
        <div className='flex justify-center space-x-4'>
          <button className='px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-100'>
            Get Started
          </button>
          <button className='px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

{
  /* <svg
        id='wave'
        className='transform transition-transform duration-300'
        viewBox='0 0 1440 380'
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
            <stop stopColor='rgba(157, 4, 255, 1)' offset='0%' />
            <stop stopColor='rgba(15.926, 137.572, 255, 1)' offset='100%' />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill='url(#sw-gradient-0)'
          d='M0,76L48,107.7C96,139,192,203,288,202.7C384,203,480,139,576,101.3C672,63,768,51,864,57C960,63,1056,89,1152,82.3C1248,76,1344,38,1440,50.7C1536,63,1632,127,1728,145.7C1824,165,1920,139,2016,145.7C2112,152,2208,190,2304,177.3C2400,165,2496,101,2592,76C2688,51,2784,63,2880,63.3C2976,63,3072,51,3168,38C3264,25,3360,13,3456,19C3552,25,3648,51,3744,82.3C3840,114,3936,152,4032,196.3C4128,241,4224,291,4320,285C4416,279,4512,215,4608,158.3C4704,101,4800,51,4896,57C4992,63,5088,127,5184,145.7C5280,165,5376,139,5472,145.7C5568,152,5664,190,5760,202.7C5856,215,5952,203,6048,215.3C6144,228,6240,266,6336,266C6432,266,6528,228,6624,234.3C6720,241,6816,291,6864,316.7L6912,342L6912,380L6864,380C6816,380,6720,380,6624,380C6528,380,6432,380,6336,380C6240,380,6144,380,6048,380C5952,380,5856,380,5760,380C5664,380,5568,380,5472,380C5376,380,5280,380,5184,380C5088,380,4992,380,4896,380C4800,380,4704,380,4608,380C4512,380,4416,380,4320,380C4224,380,4128,380,4032,380C3936,380,3840,380,3744,380C3648,380,3552,380,3456,380C3360,380,3264,380,3168,380C3072,380,2976,380,2880,380C2784,380,2688,380,2592,380C2496,380,2400,380,2304,380C2208,380,2112,380,2016,380C1920,380,1824,380,1728,380C1632,380,1536,380,1440,380C1344,380,1248,380,1152,380C1056,380,960,380,864,380C768,380,672,380,576,380C480,380,384,380,288,380C192,380,96,380,48,380L0,380Z'></path>
      </svg> */
}
