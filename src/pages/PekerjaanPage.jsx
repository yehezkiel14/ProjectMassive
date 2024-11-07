import React from "react";
import JobList from "../components/JobList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PekerjaanPage = () => {
  return (
    <div>
      <div className="w-[85rem] mx-auto flex flex-col items-center justify-center rounded-lg mt-10">
        <div className="text-center">
          <h1 className="text-5xl font-sans font-bold">Mencari Pekerjaan Agraris?</h1>
          <p className="w-[40rem] mt-5">
            Temukan peluang karir yang sesuai dengan minat dan keterampilan Anda di sektor pertanian. Kami menghadirkan berbagai posisi dari perusahaan terkemuka yang membutuhkan talenta di bidang pertanian.
          </p>
        </div>
        <div className="mt-8">
          <JobList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PekerjaanPage;
