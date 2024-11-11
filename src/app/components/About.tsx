import React from "react";

function About() {
  return (
    <section className='py-20 px-6 md:px-12 lg:px-24 bg-[#9d04ff] text-white text-center'>
      <div className='max-w-4xl mx-auto'>
        {/* Heading */}
        <h2 className='text-4xl font-extrabold mb-4 text-[#ffdc60]'>
          About Me
        </h2>

        {/* Subtitle */}
        <p className='text-lg font-medium mb-8 text-[#ffb3ec]'>
          Passionate developer, creative problem solver, and avid learner.
        </p>

        {/* Content */}
        <p className='text-base mb-6 leading-relaxed text-[#ffebf4]'>
          Hi! I'm a developer with a background in Software Engineering, fueled
          by curiosity and a love for technology. I have experience working with
          various web development tools, frameworks, and languages. My goal is
          to create meaningful, user-centric applications that enhance user
          experience and solve real-world problems.
        </p>

        {/* Fun Fact Section */}
        <div className='mt-8 p-6 bg-white/20 rounded-lg text-white shadow-lg'>
          <h3 className='text-2xl font-semibold text-[#ffb3ec] mb-2'>
            Fun Facts
          </h3>
          <ul className='space-y-2 text-sm leading-relaxed text-[#ffe6ff]'>
            <li>🚗 I’m passionate about cars and bikes.</li>
            <li>💪 Fitness is a big part of my life.</li>
            <li>🎮 Gaming is my go-to hobby for relaxation.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className='mt-10'>
          <a
            href='#contact'
            className='inline-block px-8 py-3 rounded-full text-lg font-semibold bg-[#ffdc60] text-[#9d04ff] hover:bg-[#ffeb99] transition duration-300'>
            Let's Connect!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
