import React, { useContext} from 'react';
import MyContext from '../../context/MyContext';

const Visual = ({height,order}) => {
  const {VideoPageContent}= useContext(MyContext)

  return (
    <div className="h-full w-full relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        src= {VideoPageContent[order].VidSrc}
        className=" w-full h-full object-cover"
      />

      <div className='bg-black bg-opacity-10 absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
       <div>
       <h1 className='text-[3em] font-bold mt-2'>{VideoPageContent[order].Heading}</h1>
       {/* this is the heading for indicating if the project is live ot not */}
       {VideoPageContent[order].live ? (<p className={`text-[15px] `}><span className="opacity-80 mr-2">This is Live & Running</span>😍</p>) : (<p className={`text-xs mt-2 `}><span className="opacity-80 mr-2">Demo Video Available ※ Not Live </span>😎</p>)}</div>
        {/* this is the heading for indicating if the project is live ot not */}

        <div
          style={{
            height:`${height * .30}px`,
          }}
          className={`flex w-full bg--600 items-end justify-between`}>
          
        <p className={`text-xs w-[70%] flex `}>
          {VideoPageContent[order].description}
        </p>

          <div className={`w-1/3 h-full  flex justify-center items-end`}>
           <Button link={VideoPageContent[order].link}/>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Visual;



const Button = ({ link }) => {
  return (
    <button
      onClick={() => {
        window.open(link, "_blank");
      }}
      type="submit"
      className="
        flex justify-center gap-2 items-center mx-auto
        shadow-xl text-base sm:text-lg lg:text-xl  /* Font size adjusts on mobile, small screens, and larger screens */
        bg-red-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
        before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square 
        before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 sm:px-4 py-1.5 sm:py-2 
        overflow-hidden border-2 rounded-full group
        sm:max-w-xs  /* Limits max width on small screens */
      "
    >
      Explore
      <svg
        className="
          w-6 h-6 sm:w-8 sm:h-8 justify-end group-hover:rotate-90 
          group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full 
          border border-white group-hover:border-none p-1.5 sm:p-2 rotate-45
        "
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-white group-hover:fill-gray-800"
        />
      </svg>
    </button>
  );
};

