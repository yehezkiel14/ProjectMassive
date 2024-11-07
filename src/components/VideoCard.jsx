import React from 'react';

const VideoCard = ({ title, description, image, url }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;
