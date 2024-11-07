import React from "react";
import Card from "./Card";
import GambarSatu from "../assets/a1.png";
import GambarDua from "../assets/iot-dalam-pertanian.png";
import GambarTiga from "../assets/pexels.png";
import GambarEmpat from "../assets/tabulampot.png";

const FormCard = () => {
    const cards = [
        {
          title: 'Budidaya Padi Organik',
          description: '7 Tahap Sukses Membudidayakan Padi Organik',
          image: GambarSatu,
          link: 'https://paktanidigital.com/artikel/tahap-membudidayakan-padi-lahan-rawa/',
        },
        {
          title: 'Teknologi IoT di Pertanian',
          description: 'Manfaat dan aplikasi IoT untuk memantau dan meningkatkan produktivitas lahan.',
          image: GambarDua,
          link: 'https://paktanidigital.com/artikel/tahap-membudidayakan-padi-lahan-rawa/',
        },
        {
          title: 'Hidroponik di rumah',
          description: 'Teknik hidroponik sederhana yang cocok untuk lahan terbatas di perkotaan.',
          image: GambarTiga,
          link: 'https://paktanidigital.com/artikel/tahap-membudidayakan-padi-lahan-rawa/',
        },
        {
          title: 'Tabulampot buah tropis',
          description: 'Cara menanam buah dalam pot untuk kebun minimalis Anda.',
          image: GambarEmpat,
          link: 'https://paktanidigital.com/artikel/tahap-membudidayakan-padi-lahan-rawa/',
        },
        // Add more cards here...
      ];
    return (
        <div className="card-container inline-flex justify-center items-start gap-4">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    );
};

export default FormCard;
