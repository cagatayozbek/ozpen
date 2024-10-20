import React from "react";
import Paralax from "../../../home/Paralax";
import logo from "../assets/revotechgoldpng_27-10-2020_11-26-33.png";
import background from "../../../../assets/1logo.png";
import background2 from "./assets/revotechgold-bg.jpg";
import TeknikComponent from "./components/TeknikComponent";
import TanıtımComponent from "./components/TanıtımComponent";
import teknik from "./assets/revotech-gold-teknik.png";
import ColorPickerPage from "../ColorPickerComponent";
import { colors, colors1, description } from "../colorArrays";
import Form from "../Form";

export default function RevotechGold() {
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

const title = ["Devrimsel Bir", "Isı Yalıtımı"];
const aciklama = [
  {
    title: "Yalıtım",
    desc: "Türkiye’de 90 mm genişliğinde üretilen ilk PVC profil olan Revotech Gold, PVC sektöründe 7 odacıklı profil yapısı, 52 mm ye kadar çift yada üçlü cam kullanımı ve düşük ısı geçirgenlik değeri (*Uf=0,90 W/m²K) ile devrimsel bir ısı yalıtımı sağlamaktadır.",
  },
  {
    title: "Tasarım",
    desc: "Revotech Gold serisi çok katlı binalarda rüzgar yüküne karşı yüksek mukavemet sağlayan özel tasarım profillere sahiptir. Sisteme özel tasarlanan damlalıklı kanat ve kendinden pervazlı kasa profili seçeneği ile iç yüzeylerde görsel bütünlük sağlarken, içe-dışa açılan eşikli-eşiksiz kapı seçenekleriyle de farklı mimari talepleri karşılar.",
  },
  {
    title: "Donanım",
    desc: "Winsa Pvc Sistemlerine özel tek açılım, çift açılım, sürme, katlanır, pivot ve güvenlikli donanım seçenekleri tüm mimari yapılara uygulanabilme özelliğine sahiptir. Winsa donanımları, Winsa Pvc Pencere, Kapı ve Sürme Sistemleri renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.",
  },
];
const technicalData = [
  { label: "Profil Genişliği", value: "90 mm" },
  { label: "Odacık Sayısı", value: "7" },
  { label: "Sınıf", value: "B Class - TS EN 12608-1 + A1" },
  { label: "Conta", value: "TPE Gri / Siyah" },
  { label: "Conta Sayısı", value: "3" },
  { label: "Çıta", value: "Tek tırnaklı - PCE contalı" },
  { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
];
