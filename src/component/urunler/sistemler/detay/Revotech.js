import React from "react";
import SEO from "../../../SEO";
import logo from "../assets/revotechpng_27-10-2020_11-25-29.png";
import background from "./assets/revotech-bg.jpg";
import background2 from "./assets/revotech-bg2.jpg";
import teknik from "./assets/revotech-teknik.png";

import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { Container } from "@mui/material";
import Form from "../Form";
export default function Revotech() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "100px",
      }}
    >
      <SEO 
        title="Revotech | Winsa Ankara" 
        description="Winsa Revotech serisi, 84mm genişliği ve 7 odacıklı yapısıyla üstün yalıtım sağlar. Ankara Özpen PVC." 
      />
      <TeknikComponent
        title="Revotech"
        logo={logo}
        technicalData={technicalData}
        description={aciklama}
        background={background}
        teknik={teknik}
      />
      <ColorPickerPage />
    </Container>
  );
}

const title = ["Yalıtımın", "En estetik hali"];
const aciklama = [
  {
    title: "Yalıtım",
    desc: "Türkiye’de 84 mm genişliğinde üretilen Revotech, 7 odacıklı profil yapısı, 52 mm ye kadar çift yada üçlü cam kullanımı ve düşük ısı geçirgenlik değeri (*Uf=0,90 W/m²K) ile yüksek bir ısı yalıtımı sağlamaktadır.",
  },
  {
    title: "Tasarım",
    desc: "Revotech serisi çok katlı binalarda rüzgar yüküne karşı yüksek mukavemet sağlayan özel tasarım profillere sahiptir. Sisteme özel tasarlanan damlalıklı kanat ve kendinden pervazlı kasa profili seçeneği ile iç yüzeylerde görsel bütünlük sağlarken, içe-dışa açılan eşikli-eşiksiz kapı seçenekleriyle de farklı mimari talepleri karşılar.",
  },
  {
    title: "Donanım",
    desc: "Winsa Pvc Sistemlerine özel tek açılım, çift açılım, sürme, katlanır, pivot ve güvenlikli donanım seçenekleri tüm mimari yapılara uygulanabilme özelliğine sahiptir. Winsa donanımları, Winsa Pvc Pencere, Kapı ve Sürme Sistemleri renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.",
  },
];
const technicalData = [
  { label: "Profil Genişliği", value: "84 mm" },
  { label: "Odacık Sayısı", value: "7" },
  { label: "Sınıf", value: "A Class -  TS EN 12608-1 + A1" },
  { label: "Conta", value: "TPE Gri / Siyah" },
  { label: "Conta Sayısı", value: "3" },
  { label: "Çıta", value: "Tek tırnaklı - PCE contalı" },
  { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
];
