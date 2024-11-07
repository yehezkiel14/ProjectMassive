import React from 'react';
import { useParams } from 'react-router-dom';

const ebooks = [
  {
    title: 'Bertanam Hidroponik untuk Pemula',
    description: 'Pelajari cara menanam hidroponik di rumah secara sederhana namun efektif.',
    link: 'path/to/pdf1.pdf',
  },
  {
    title: 'Teknologi Pertanian Masa Kini',
    description: 'Membahas inovasi terbaru dalam pertanian modern.',
    link: 'path/to/pdf2.pdf',
  },
];

const EbookDetail = () => {
  const { id } = useParams();
  const ebook = ebooks[id];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{ebook.title}</h1>
      <p className="mb-4">{ebook.description}</p>
      <a href={ebook.link} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" download>
        Download PDF
      </a>
    </div>
  );
};

export default EbookDetail;
