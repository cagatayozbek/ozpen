import React from "react";
import Paralax from "../../../home/Paralax";
import logo from "../assets/yeni-dorado-76png-29-01-2021-18-33-55png_12-03-2024_14-39-02.png";
import background from "./assets/dorado-bg.jpg";
import background2 from "./assets/dorado-bg2.jpg";
import reddot from "./assets/reddot.png";
import teknik from "./assets/dorado-teknik.png";
import TanıtımComponent from "./components/TanıtımComponent";
import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { colors, colors1, description } from "../colorArrays";
import Form from "../Form";
export default function Dorado76() {
  return (
    <div>
      <Paralax logo={logo} background={background} title={title} />
      <TanıtımComponent background={background2} description={aciklama} />
      <TeknikComponent
        technicalData={technicalData}
        reddot={reddot}
        teknik={teknik}
        logo={logo}
      />
      <ColorPickerPage colors={colors1} />
      <ColorPickerPage colors={colors} description={description} />
      <Form />
    </div>
  );
}

const title = ["Yalıtımın", "En estetik hali"];
const aciklama = [
  {
    title: "Yalıtım",
    desc: "76 mm genişliğinde üretilen Yeni Dorado 76, PVC sektöründe ilk kez 9 mm’lik iç-dış estetik görünümü,5 odacıklı profil yapısı, 52 mm ye kadar üçlü cam kullanımı ve düşük ısı geçirgenlik değeri ile (*Uw=0,98 W/m²K) yüksek bir ısı yalıtımı sağlamaktadır.",
  },
  {
    title: "Tasarım",
    desc: "Yeni Dorado76 Pencere ve Kapı Sistemleri estetik ve yalıtımlı yapısının yanı sıra fütürist bir tasarım çizgisine sahiptir. Birbirini takip eden ve keskin hatlara sahip kasa-kanat yapısıyla modern cephelere de tam uyum sağlar. Çok katlı binalarda rüzgar yüküne karşı yüksek mukavemet sağlayan özel tasarım profillere sahiptir.",
  },
  {
    title: "Donanım",
    desc: "Winsa Pvc Sistemlerine özel tek açılım, çift açılım, paralel sürme, katlanır, pivot ve güvenlikli donanım seçenekleri tüm mimari yapılara uygulanabilme özelliğine sahiptir. Winsa donanımları, Winsa Pvc Pencere, Kapı ve Sürme Sistemleri renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.",
  },
];
const technicalData = [
  { label: "Profil Genişliği", value: "76 mm" },
  { label: "Odacık Sayısı", value: "5" },
  { label: "Sınıf", value: "A Class -  TS EN 12608-1 + A1" },
  { label: "Conta", value: "TPE Gri / Siyah" },
  { label: "Conta Sayısı", value: "3" },
  { label: "Çıta", value: "Tek tırnaklı - PCE contalı" },
  { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
];
