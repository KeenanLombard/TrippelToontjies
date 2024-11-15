import React from "react";

function About() {
  return (
    <section className=' py-12 px-6 md:px-12 lg:px-24 text-gray-800'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-extrabold text-center text-blue-700 mb-8'>
          About Us
        </h2>

        <p className='text-lg text-center mb-10'>
          At [Creche Name], we are dedicated to creating a nurturing and
          inspiring environment where children can explore, learn, and grow. We
          believe that every child deserves a space where they feel loved, safe,
          and encouraged to express themselves.
        </p>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-blue-50 cursor-pointer hover:bg-blue-100 mt-10 shadow-lg rounded-lg p-6 text-center hover:-translate-y-2 duration-300 relative'>
            <h3 className='text-2xl font-semibold text-blue-600 mb-4'>
              Our Curriculum
            </h3>
            <p>
              Our curriculum is designed to engage young minds with fun,
              hands-on activities. From sensory play and arts to early reading
              and numbers, we focus on holistic learning that builds curiosity
              and confidence.
            </p>
          </div>

          <div className='bg-blue-50 cursor-pointer hover:bg-blue-100 mt-10 shadow-lg rounded-lg p-6 text-center hover:-translate-y-2 duration-300 relative'>
            <h3 className='text-2xl font-semibold text-blue-600 mb-4'>
              What We Do
            </h3>
            <p>
              We create a daily schedule full of joyful moments and learning
              adventures. Through guided activities and free play, we encourage
              creativity, teamwork, and independence in each child.
            </p>
          </div>

          <div className='bg-blue-50 cursor-pointer hover:bg-blue-100 mt-10 shadow-lg rounded-lg p-6 text-center hover:-translate-y-2 duration-300 relative'>
            <h3 className='text-2xl font-semibold text-blue-600 mb-4'>
              Our Values
            </h3>
            <p>
              Kindness, respect, and growth are at the heart of everything we
              do. We foster an environment where children learn empathy, respect
              for diversity, and a love for learning that will stay with them
              for life.
            </p>
          </div>
        </div>

        <p className='text-lg text-center mt-10'>
          Our creche is a home away from home, where each child’s unique
          personality is celebrated and nurtured. Join us to create a joyful
          journey for your child.
        </p>
      </div>
    </section>
  );
}

export default About;
