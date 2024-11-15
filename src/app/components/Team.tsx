import React from "react";

const teamMembers = [
  {
    name: "Amelda Lombard",
    position:
      "Eienaar van Trippel Toontjies en onderwyseres van die 4 en 5 jariges",
    description:
      "Amelda hou baie van lees, diere , kuns en n lekker cappuccino. Sy is bang vir paddas en sprinkane. Sy wou nog altyd n juffrou wees en geniet veral die pittige sêgoed van die kinders",
    imageUrl: "/images/amelda.jpeg",
  },
  {
    name: "Jaimie-lee Jansen",
    position: "Jaimie is n juffrou by die 4 en 5 jariges",
    description:
      " Jaimie is baie energiek en sportief en hou glad nie van soetgoed nie.Die kinders is mal oor tannie Jaimie en sy hou veral daarvan om die dogtertjies se hare mooi te maak.",
    imageUrl: "/images/jamie.jpeg",
  },
  {
    name: "Delmarie Jackson",
    position: "Della is ook n juffrou by die 4 en 5 jariges",
    description:
      "Della hou van musiek, n koffietjie en uit haar maag uit lag. Sy hou niks van konflik en baklei nie.",
    imageUrl: "/images/delmarie.jpeg",
  },
  {
    name: "Deomè Barnard",
    position: "Deomè is die juffrou van die 3 jariges.",
    description:
      "Tannie Deomè is n energieke juffrou wat hou van musiek , dans en swem. Sy het n fobie oor skottelgoedwas.",
    imageUrl: "/images/deome.jpeg",
  },
  {
    name: "Sindi Hoté",
    position: "Sindi is die assistent in die 3 jarige klas",
    description:
      "Sindi hou van tyd op die strand spandeer. Sy hou nie van kosmaak nie en is bang vir goggas!",
    imageUrl: "/images/sindi.jpeg",
  },
  {
    name: "Natasha Edward",
    position: "Sy is n juffrou in die 2 jarige klas",
    description:
      "Natasha hou van  lekker sepies kyk op n naweek en is bang vir slange. Sy is baie sag en lief met ons 2 jariges.",
    imageUrl: "/images/natasha.jpeg",
  },
  {
    name: "Ashwill-line Levendal",
    position: "Ash is ook n juffrou in n 2 jarige klas",
    description:
      "Ash hou van mooi aantrek , sushi en sjokolade.Sy hou ook van sepies kyk. Sy hou net mooi niks van paddas en verkleurmannetjies nie.",
    imageUrl: "/images/ashwill.jpeg",
  },
  {
    name: "Chanlin Johnson",
    position: "Lynn is n assistent in die 2jarige klas",
    description:
      "Lynn is op haar gelukkigste met n varkchoppie in die hand. Sy eet glad nie groente nie. Sy hou van lees en sepies kyk. Sy hou niks van swem nie",
    imageUrl: "/images/chanlin.jpeg",
  },
  {
    name: "Floydene Bruinders ",
    position:
      "Floy is n tannie in een van die babaklassies en n nasorgtannie in die middae",
    description:
      "Floy is baie saggeaard en mal oor babas. Sy hou van tegnologie en moet ons ander gereeld help daarmee.Sy hou van vrede en is n reguit mens. Sy hou van soutgoed.",
    imageUrl: "/images/floydene.jpeg",
  },
  {
    name: "Monique Janse van Rensburg ",
    position: "Monique is n tannie in een van die babaklassies",
    description:
      " Monique hou van die buitelewe en katte. Sy is bang vir balonne en hou nie van seekos nie.",
    imageUrl: "/images/monique.jpeg",
  },
  {
    name: "Shandré Gawie",
    position: "Shandré is ook n tannie in n babaklassie.",
    description:
      "Shandré hou baie van musiek, babas en glo aan familietyd. Sy is nie mal oor winter nie en verkies die sonnige weer.",
    imageUrl: "/images/shandre.jpeg",
  },
  {
    name: "Unathi Joni ",
    position: "Natie is die kleuterskool se kok en skoonmaker.",
    description:
      "Natie hou baie van mooi klere en inkopies doen. Sy geniet kosmaak en hou niks van konflik nie.",
    imageUrl: "/images/unathi.jpeg",
  },
  {
    name: "Eugene Coetzer",
    position: "Genie is n nasorgtannie vir die Gr R en 1e",
    description:
      "Genie hou van die Bosveld en biltong. Sy geniet dit im kinders met hul huiswerk te help. Sy hou net mooi niks van die see en onregverdigheid nie.",
    imageUrl: "/images/eugene.jpeg",
  },
  {
    name: "Roumellia Matolla",
    position: "Nasorg",
    description:
      "Roumy hou van lag, diere, die natuur en koek. Sy hou niks van onregverdigheid en die seermaak van diere nie. Roumy is n Nasorgtannie vir die gr 1s tot 7s",
    imageUrl: "/images/roumelia.jpeg",
  },
  {
    name: "Rohena Erasmus",
    position: "Nasorg",
    description:
      "Rohena hou van soetgoed en diere. Sy hou niks van oneerlikheid nie. Sy is n nasorgtannie vir Gr 1 tot Gr 7 maats",
    imageUrl: "/images/rohena.jpeg",
  },
];

function Team() {
  return (
    <div>
      <section className='bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-extrabold text-center text-blue-700 mb-8'>
            Meet Our Team
          </h2>

          <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-blue-50 cursor-pointer hover:bg-blue-100 mt-10 shadow-lg rounded-lg p-6 text-center hover:-translate-y-2 duration-300 relative'>
                <div className='relative'>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className='w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white -mt-16'
                  />
                </div>
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
