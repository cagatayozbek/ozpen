import React from "react";
import Paralax from "../../../home/Paralax";
import logo from "../assets/yenisafir-76png-01-06-2022-11-52-13png_12-03-2024_14-38-38.png";
import background from "./assets/safir76-bg.jpg";
import background2 from "./assets/safir76-bg2.jpg";
import teknik from "./assets/safir76-teknik.png";
import TanıtımComponent from "./components/TanıtımComponent";
import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { colors, colors1, description } from "../colorArrays";
import Form from "../Form";
export default function Safir76() {
  return (
    <div>
      <Paralax logo={logo} background={background} title={title} />
      <TanıtımComponent background={background2} description={aciklama} />
      <TeknikComponent
        technicalData={technicalData}
        teknik={teknik}
        logo={logo}
      />
      <ColorPickerPage colors={colors1} />
      <ColorPickerPage colors={colors} description={description} />
      <Form />
    </div>
  );
}
const title = ["Sürdürülebilir Bir Gelecek"];
const aciklama = [
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
const technicalData = [
  { label: "Profil Genişliği", value: "76 mm" },
  { label: "Odacık Sayısı", value: "5" },
  { label: "Sınıf", value: "B Class -  TS EN 12608-1 + A1" },
  { label: "Conta", value: "TPE Gri / Siyah" },
  { label: "Conta Sayısı", value: "3" },
  { label: "Çıta", value: "Tek tırnaklı - PCE contalı" },
  { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
];
