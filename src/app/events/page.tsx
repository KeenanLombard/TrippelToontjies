import React from "react";

function page() {
  const events = [
    {
      name: "React Workshop",
      date: "2024-11-20",
      description: "Learn React fundamentals in this hands-on workshop.",
    },
    {
      name: "Team Building Event",
      date: "2024-11-25",
      description: "A day to bond and build stronger team connections.",
    },
    {
      name: "Holiday Party",
      date: "2024-12-15",
      description: "Celebrate the holiday season with friends and colleagues.",
    },
  ];

  return (
    <div className='w-full'>
      <h2 className='text-3xl font-extrabold text-center text-blue-700 mb-8'>
        Save The Date
      </h2>
      <div className='lg:w-2/3 md:w-3/4 sm:w-full mx-auto '>
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li
                key={index}
                className='bg-blue-50 cursor-pointer hover:bg-blue-100 my-10 shadow-lg rounded-lg p-6 text-center hover:-translate-y-2 duration-300 relative'>
                <p className='font-semibold text-neutral-500'>
                  {" "}
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <h2 className='text-lg font-semibold text-blue-800'>
                  {event.name}
                </h2>
                <p className='text-sm text-gray-700'>{event.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-700'>No events for this month.</p>
        )}
      </div>
    </div>
  );
}

export default page;
