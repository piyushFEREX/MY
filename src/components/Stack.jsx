import React from 'react';

const Stack = ({heading, tech}) => {
  const logo = {
    react: '/Logos/react.png', // No need to prefix with 'public'
    javascript: '/Logos/javascript.png', // Add other logos as needed
    // Add more entries for other technologies if needed
  };

  return (
    <div className='h-full w-full p-2 flex flex-col'>
      <h1 className='text-3xl text-center mb-2 pt-2 pb-2 border-b'>{heading}</h1>
      <div className='flex-1 flex-wrap flex'>
        {tech.map((x) => (
          console.log(x)
          // <div key={x} className='h-[14%] w-auto flex gap-2 items-center bg-white text-black py-1 px-3 rounded-lg m-1'>
          //   <img 
          //     src={logo[x] || '/Logos/default.png'} // Fallback to default if logo is missing
          //     alt={x} 
          //     className="h-full"
          //   />
          //   <h1 className='text-xl'>{x}</h1>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
