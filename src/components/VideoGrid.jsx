import React from 'react';
import VideoCard from './VideoCard';
import VideoSatu from '../assets/v1.png';

const VideoGrid = () => {
    const videos = [
        {
          title: "Kunci Sukses Jadi Petani Jaman Now",
          description: "Rahasia Sukses Menjadi Petani Jaman Now",
          image: VideoSatu,
        },
        {
          title: "TINGGALKAN KARIR KANTORAN TERJUN KE PERTANIAN",
          description: "Inspirasi Menjadi Sukses Bertani Melon Secara Modern",
          image: "path/to/image2.jpg",
        },
        {
          title: "GAK PAKE CANGKUL LAGI TAPI PAKE TEKNOLOGI",
          description: "PERTANIAN MODERN: Budidaya Melon Hidroponik Dengan Teknologi Ala Petani Milenial | Eps 113",
          image: "path/to/image3.jpg",
        },
        {
          title: "MEMBUAT HIDROPONIK PIPAPARALON MODAL IRIT",
          description: "Cara Membuat Tempat Menanam Hidroponik Dari Pipa Paralon PVC",
          image: "path/to/image4.jpg",
        },
        {
          title: "Smart Irrigation Farming Murah & Hemat Biaya Produksi",
          description: "Tekno Tani: Smart Irrigation Farming Murah & Hemat Biaya Produksi",
          image: "path/to/image5.jpg",
        },
        {
          title: "SPRAYER ELEKTRIK DENGAN JERIGEN BISA DIBUAT SENDIRI",
          description: "Cara Membuat Sprayer/Semprotan Elektrik Sendiri",
          image: "path/to/image6.jpg",
        },
    ];
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <VideoCard key={index} title={video.title} description={video.description} image={video.image} />
        ))}
      </div>
      <div className="text-center my-8">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default VideoGrid;
