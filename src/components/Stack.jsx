import React from 'react';

const Stack = ({heading, tech}) => {

  return (
    <div className='h-full w-full p-2 flex flex-col'>
      <h1 className='text-3xl text-center mb-2 pt-2 pb-2 border-b'>{heading}</h1>
      <div className='flex-1 flex-wrap flex'>
        {tech.map((x) => (
          <div key={x} className=' h-14 w-auto flex gap-2 items-center bg-white text-black py-1 px-3 rounded-lg m-1'>
          <img 
            src={`Logos/${x}.png`} 
            alt={x} 
            className="h-full"
            onError={(e) => { e.target.src = 'Logos/default.png'; }} // Fallback to default image if logo is missing
          />

            <h1 className='text-xl'>{x}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
