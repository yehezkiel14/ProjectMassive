import React from "react";
import Artikel from "../assets/a1.png";

const Card = ({ title, description, image, link }) => {
    return (
      <div className="card inline-flex flex-col items-start gap-4 rounded-lg border border-gray-200 hover:shadow-lg dark:border-gray-700 p-4">
        <img 
          src={image} 
          alt={title} 
          className="card-image w-full h-48 object-cover rounded-lg" 
          style={{ 
              width: '100%', 
              height: '200px', // Anda dapat mengatur tinggi sesuai kebutuhan
              borderRadius: '0.5rem' // Menyesuaikan dengan rounded-lg
          }} 
        />
        <div className="card-content text-center mt-3">
          <h2 className="card-title font-bold text-lg">{title}</h2>
          <p className="card-description text-gray-600">{description}</p>
          {/* <a href={link} className="py-2 px-4 bg-blue-500 text-white rounded mt-2 hover:bg-blue-600">
            Learn More
          </a> */}
        </div>
      </div>
    );
};

export default Card;