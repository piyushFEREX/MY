import React from 'react';

const Visual = ({live=true,height}) => {
  return (
    <div className="h-full w-full relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://videos.pexels.com/video-files/5538137/5538137-hd_1920_1080_25fps.mp4"
        className=" w-full h-full object-cover"
      />

      <div className='bg-black bg-opacity-10 absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
       <div>
       <h1 className='text-4xl font-bold mt-2'>The Heading</h1>
       {/* this is the heading for indicating if the project is live ot not */}
       {live ? (<p className={`text-xs mt-2 `}><span className="opacity-80 mr-2">This is Live & Running</span>😍</p>) : (<p className={`text-xs mt-2 `}><span className="opacity-80 mr-2">Demo Video Available</span>😎</p>)}</div>
        {/* this is the heading for indicating if the project is live ot not */}

        <div
          style={{
            height:`${height * .30}px`,
          }}
          className={`flex w-full `}>
          
        <p className={`text-xs w-2/3 flex items-center`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet ornare gravida. Phasellus dolor quam, viverra eget urna et, luctus consequat justo. Mauris at felis a tortor faucibus maximus.
        </p>

          <div className={`w-1/3 h-full bg-red-600`}>
          
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Visual;
