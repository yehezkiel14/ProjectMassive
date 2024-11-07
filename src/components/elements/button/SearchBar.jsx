import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implementasikan fungsi pencarian di sini
    console.log('Mencari:', query);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full py-2 pl-4 pr-20 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ketik pencarian..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="absolute right-0 px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
