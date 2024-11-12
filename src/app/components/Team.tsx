import React from "react";

const teamMembers = [
  {
    name: "Jane Doe",
    position: "Head Teacher",
    description:
      "With over 10 years of experience in early childhood education, Jane brings warmth and expertise to our creche.",
    imageUrl: "/images/jane.jpg", // Replace with actual image paths
  },
  {
    name: "John Smith",
    position: "Assistant Teacher",
    description:
      "John is passionate about helping young children grow and learn through play and creative activities.",
    imageUrl: "/images/john.jpg",
  },
  {
    name: "Mary Johnson",
    position: "Caregiver",
    description:
      "Mary provides nurturing care and ensures that each child feels at home.",
    imageUrl: "/images/mary.jpg",
  },
  // Add more team members as needed
];

function Team() {
  return (
    <div>
      <section className='bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-extrabold text-center text-blue-700 mb-8'>
            Meet Our Team
          </h2>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-blue-50 shadow-lg rounded-lg p-6 text-center'>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className='w-24 h-24 rounded-full mx-auto mb-4'
                />
                <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                  {member.name}
                </h3>
                <p className='text-sm text-blue-800 font-medium mb-2'>
                  {member.position}
                </p>
                <p className='text-gray-700 text-sm'>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
