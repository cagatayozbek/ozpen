import { Container, Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import background from "./assets/Sürdürülebilir_bir_gelecek.png"; // Boşlukları düzeltmek için dosya adındaki boşlukları alt tire ile değiştirdim.
import logo from "../assets/yenisafir-76png-01-06-2022-11-52-13png_12-03-2024_14-38-38.png";
import teknik from "./assets/safir76-teknik.png";
import ColorPickerPage from "../ColorPickerComponent";
import TeknikComponent from "./components/TeknikComponent";
export default function Safir76({}) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "100px",
      }}
    >
      <TeknikComponent
        logo={logo}
        technicalData={technicalData}
        teknik={teknik}
        description={description}
        background={background}
      />
      <ColorPickerPage />
    </Container>
  );
}

const technicalData = [
  { label: "Profil Genişliği", value: "76 mm" },
  { label: "Odacık Sayısı", value: "5" },
  { label: "Sınıf", value: "B Class -  TS EN 12608-1 + A1" },
  { label: "Conta", value: "TPE Gri / Siyah" },
  { label: "Conta Sayısı", value: "3" },
  { label: "Çıta", value: "Tek tırnaklı - PCE contalı" },
  { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
];
const description = [
  {
    title: "Yalıtım",
    desc: "76 mm genişliğinde üretilen  Yeni Safir 76, ,5 odacıklı profil yapısı, 52 mm ye kadar üçlü cam kullanımı ve yüksek bir ısı yalıtımı sağlamaktadır.",
  },
  {
    title: "Tasarım",
    desc: "Yeni Safir 76 Pencere ve Kapı Sistemleri estetik ve yalıtımlı yapısının yanı sıra minimal bir tasarım çizgisine sahiptir. Birbirini takip eden hatları ve ekolojiyi koruyan bir sorumluluk bilincine sahip üretimi ile pencerenizi yeşil odaklı bir geleceğe açmanızı hedefler.",
  },
  {
    title: "Donanım",
    desc: "Winsa Pvc Sistemlerine özel tek açılım, çift açılım, paralel sürme, katlanır, pivot ve güvenlikli donanım seçenekleri tüm mimari yapılara uygulanabilme özelliğine sahiptir. Winsa donanımları, Winsa Pvc Pencere, Kapı ve Sürme Sistemleri renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.",
  },
];
