import React from 'react';
import { Link } from 'react-router-dom';

function EbookCard({ ebook, index }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={ebook.image} alt={ebook.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold mb-2">{ebook.title}</h2>
      <p className="mb-4">{ebook.description}</p>
      <Link to={`/ebook/${index}`} className="text-blue-500 hover:underline">
        Baca
      </Link>
    </div>
  );
}

export default EbookCard;
