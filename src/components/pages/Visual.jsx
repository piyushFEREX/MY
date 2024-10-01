import React from 'react';

const Visual = () => {
  return (
    <div className="h-full w-full bg-lime-50 relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://videos.pexels.com/video-files/5538137/5538137-hd_1920_1080_25fps.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Add content over the video here, if needed */}
    </div>
  );
};

export default Visual;
