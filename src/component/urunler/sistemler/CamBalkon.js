import React from "react";

import logo1 from "./assets/camoda-bg.jpg"; // İlk arka plan resmi

import "./CamBalkon.css";

import CamBalkonCardComponent from "./detay/components/CamBalkonCardComponent";

const CamBalkon = () => {
  return (
    <>
      <CamBalkonCardComponent menuItem={menuItem} title={title} />
      <CamBalkonCardComponent menuItem={menuItem2} title={title2} />
      <CamBalkonCardComponent menuItem={menuItem3} title={title3} />
    </>
  );
};

export default CamBalkon;
const title = "Katlanır Cam Balkon Sistemleri";
const title2 = "Sürme Cam Balkon Sistemleri";
const title3 = "Küpeşte ve Perde Sistemleri";
const menuItem = [
  {
    name: "Veranda",
    desc: "Yoğun Ar-Ge çalışmaları sonucunda son teknoloji ile üretilmiştir.",
    path: "/urunler/cam-balkon-sistemleri/veranda",
  },
  {
    name: "Vela Gold",
    desc: "Manzaradan ödün vermeyen özelliğiyle tüm balkonlara uygulanabilir.",
    path: "/urunler/cam-balkon-sistemleri/vela-gold",
  },
  {
    name: "Camekan",
    desc: "Evin salon ve odaları dışında bir oda oluşturarak kullanıcısına yepyeni bir yaşam alanı sunuyor.",
    path: "/urunler/cam-balkon-sistemleri/camekan",
  },
  {
    name: "Camekan Konfor",
    desc: "Camekan Konfor katlanır cam balkon sistemi, 5 özel renk seçeneğiyle farklı beğenilere ve dekorasyon tercihlerine uygundur.",
    path: "/urunler/cam-balkon-sistemleri/camekan-konfor",
  },
  {
    name: "Vela ",
    desc: "Vela Cam Balkon Sistemleri, evin salon odaları dışında yepyeni bir yaşam alanı sunuyor.",
    path: "/urunler/cam-balkon-sistemleri/vela",
  },
];
const menuItem2 = [
  {
    name: "Teras",
    desc: "Kolay kullanımı, güvenliği ve estetiği bir arada sunan bir sistem tasarımıdır.",
    path: "/urunler/cam-balkon-sistemleri/teras",
  },
  {
    name: "Teras Konfor",
    desc: "Sahip olduğu tutamak tasarımı ile maksimum kullanım konforu sağlar.",
    path: "/urunler/cam-balkon-sistemleri/teras-konfor",
  },
  {
    name: "Teras Kuartet",
    desc: "Temperli çift cam uygulaması ile  hava, su ve rüzgar yalıtımı sağlayarak balkonlarınızı yaşam alanına dönüştürür",
    path: "/urunler/cam-balkon-sistemleri/teras-kuartet",
  },
];

const menuItem3 = [
  {
    name: "Giyotin Cam Balkon",
    desc: "Daha canlı, daha geniş, daha aydınlık…",
    path: "/urunler/cam-balkon-sistemleri/hareketli-kupeste-sistemleri",
  },
  {
    name: "Dış Mekan Perde Sistemleri",
    desc: "Estetik ve tasarruf bir arada.",
    path: "/urunler/cam-balkon-sistemleri/dis-mekan-perde-sistemleri",
  },
];
