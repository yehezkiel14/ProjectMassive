import React from 'react';
import Edukasi from "../assets/br1.png";
import SearchBar from './elements/button/SearchBar';
import FormCard from './FormCard';
import VideoGrid from './VideoGrid';
import Footer from './Footer';

const EdukasiSatu = () => {
  return (
    <div>
      <div className='w-[85rem] h-[28rem] mx-auto shrink-0 flex flex-col items-center justify-center rounded-lg' style={{
        backgroundImage: `url(${Edukasi})`, 
        backgroundColor: 'rgba(211, 211, 211, 0.5)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center' 
      }}>
        <h1 className='w-1/2 text-5xl text-center text-white font-sans font-bold'>Mulai Explorasi Sekarang</h1>
        <p className='text-white text-lg font-normal w-[40rem] h-14 text-center mt-2'>Temukan berbagai sumber daya edukasi untuk memperdalam pemahaman anda tentang pertanian modern secara gratis!</p>
        <div className='flex mt-4 px-4'>
          <SearchBar />
        </div>
      </div>
      <section className='w-[85rem] height-[28rem] mx-auto flex flex-col items-center justify-center mt-10 p-5'>
        <div className='flex flex-col items-center w-1/2'>
          <h2 className='font-bold text-5xl font-sans'>Artikel & Blog</h2>
          <p className='text-lg mt-3'>Jelajahi topik menarik seputar pertanian</p>
        </div>
        <div className='mt-10 inline-flex justify-center items-start gap-4'>
          <FormCard />
        </div>
        <div className='mt-10'>
          <button className='w-80 h-10 p-4 rounded-full bg-yellow-500 text-white font-bold py-2 transition ease-in-out delay-150 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Selengkapnya</button>
        </div>
      </section>
      <section className='bg-gradient-to-b from-green-100 via-green-500 to-green-600 min-h-screen'>
        <div className='w-[85rem] height-[28rem] mx-auto flex flex-col items-center justify-center mt-10 p-5'>
          <div className='flex flex-col items-center w-1/2'>
            <h2 className='font-bold text-5xl font-sans'>Video</h2>
            <p className='text-lg mt-3'>Pelajari langsuung melalui video edukatif</p>
          </div>
          <VideoGrid />
        </div>
      </section>
      <section className='bg-gradient-to-b  min-h-screen'>
        <div className='w-[85rem] height-[28rem] mx-auto flex flex-col items-center justify-center mt-10 p-5'>
          <div className='items-center '>
            <h2 className='font-bold text-5xl font-sans flex justify-center'>E-Book</h2>
            <p className='text-lg text-justify mt-3'>
              Selamat datang di koleksi e-book pertanian kami! Dapatkan pengetahuan mendalam dan keterampilan praktis di bidang pertanian dari e-book pilihan yang mencakup berbagai topik. Pilih e-book terbaru kami atau telusuri seluruh koleksi untuk menemukan panduan yang sesuai dengan kebutuhan Anda. Mari bersama-sama memperkuat masa depan pertanian!
            </p>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EdukasiSatu;
