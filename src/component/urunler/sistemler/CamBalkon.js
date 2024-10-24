import React from "react";
import { Parallax, Background } from "react-parallax";
import logo1 from "./assets/camoda-bg.jpg"; // İlk arka plan resmi
import wImage from "../../../assets/w.png"; // Add the wImage
import { Container, Typography, Box } from "@mui/material";
import "./CamBalkon.css";
import Form from "./Form";
import SistemComponent from "./SistemComponent";

const CamBalkon = () => {
  return (
    <div>
      <SistemComponent menuItem={menuItem} title={title} />;
      <SistemComponent menuItem={menuItem2} title={title2} />;
      <SistemComponent menuItem={menuItem3} title={title3} />;
    </div>
  );
};

export default CamBalkon;
const title = ["Katlanır", "Cam Balkon Sistemleri"];
const title2 = ["Sürme", "Cam Balkon Sistemleri"];
const title3 = ["Küpeşte ve Perde", "Sistemleri"];
const menuItem = [
  {
    name: "Veranda",
    imgDesc:
      "Yoğun Ar-Ge çalışmaları sonucunda son teknoloji ile üretilmiştir.",
  },
  {
    name: "Vela Gold",
    imgDesc:
      "Manzaradan ödün vermeyen özelliğiyle tüm balkonlara uygulanabilir.",
  },
  {
    name: "Camekan",
    imgDesc:
      "Evin salon ve odaları dışında bir oda oluşturarak kullanıcısına yepyeni bir yaşam alanı sunuyor.",
  },
  {
    name: "Camekan Konfor",
    imgDesc:
      "Camekan Konfor katlanır cam balkon sistemi, 5 özel renk seçeneğiyle farklı beğenilere ve dekorasyon tercihlerine uygundur.",
  },
  {
    name: "Vela ",
    imgDesc:
      "Vela Cam Balkon Sistemleri, evin salon odaları dışında yepyeni bir yaşam alanı sunuyor.",
  },
];
const menuItem2 = [
  {
    name: "Teras",
    imgDesc:
      "Kolay kullanımı, güvenliği ve estetiği bir arada sunan bir sistem tasarımıdır.",
  },
  {
    name: "Teras Konfor",
    imgDesc:
      "Sahip olduğu tutamak tasarımı ile maksimum kullanım konforu sağlar.",
  },
  {
    name: "Teras Kuartet",
    imgDesc:
      "Temperli çift cam uygulaması ile  hava, su ve rüzgar yalıtımı sağlayarak balkonlarınızı yaşam alanına dönüştürür",
  },
];

const menuItem3 = [
  {
    name: "Hareketli Küpeşte Sistemleri",
    imgDesc: "Daha canlı, daha geniş, daha aydınlık…",
  },
  {
    name: "Dış Mekan Perde Sistemleri",
    imgDesc: "Estetik ve tasarruf bir arada.",
  },
];
