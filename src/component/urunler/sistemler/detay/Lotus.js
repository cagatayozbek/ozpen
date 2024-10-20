import React from "react";
import Paralax from "../../../home/Paralax";
import logo from "../assets/surme/lotus1.png";
import background from "./assets/lotus-bg.jpg";
import background2 from "./assets/lotus-bg2.jpg";
import teknik from "./assets/lotus-teknik.png";
import TanıtımComponent from "./components/TanıtımComponent";
import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { colors, colors1, description } from "../colorArrays";
import Form from "../Form";
export default function Lotus() {
  return (
    <div>
      <Paralax logo={logo} background={background} title={title} />
      <TanıtımComponent background={background2} description={aciklama} />
      <TeknikComponent
        technicalData={technicalData}
        logo={logo}
        teknik={teknik}
      />
      <ColorPickerPage colors={colors1} />
      <ColorPickerPage colors={colors} description={description} />
      <Form />
    </div>
  );
}

const title = ["Minimal Tasarım Hatları İle", "Winsa Özel Eksenel Sistemi"];
const aciklama = [
  {
    title: "Yalıtım",
    desc: "Türkiye’ye tek ve Winsa’ya özel olarak tasarlanan Lotus Eksenel Sürme Sistemi 122 mm genişliğinde iki eksenli, 113 mm genişliğinde tek eksenli ve kendinden pervazlı kasa seçeneklerine sahiptir. Sürme sistemleri içerisinde optimum yalıtım değeri sağlar. 28 mm ye kadar çift cam kullanımı ile ısı ve ses yalıtımı sağlamaktadır.",
  },
  {
    title: "Tasarım",
    desc: "LOTUS Sürme Sistemi, Winsa’nın uzman kadrosunun uluslararası deneyimleriyle, bilinen sürme sistemlerden farklı bir bakış açısı ile tasarlanmıştır. Kanatlar kasa içine gömülü olduğu için kanatların dışarıya çıkıntısı görülmez. Estetik hatlara sahip şık tasarımı olan LOTUS Sürme Sistemi, düşük kasa ve kanat profil yüksekliğiyle daha fazla cam alanına sahiptir. Bu özelliği sayesinde tüm mekânlara daha geniş manzara, daha aydınlık ve ferah iç ortam sağlamaktadır.",
  },
  {
    title: "Donanım",
    desc: "Lotus Eksenel Sürme Sistemine uyumlu tasarlanan kullanım kolaylığı sağlayan donanımlar kullanılmaktadır. Winsa donanımları, Lotus Sisteminin renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.",
  },
];
const technicalData = [
  { label: "Kasa Profil Genişliği", value: "122 mm" },
  { label: "Kanat Profil Genişliği", value: "45 mm" },
  { label: "Kasa Odacık Sayısı", value: "4" },
  { label: "Sınıf", value: "B Class - TS 5358 - EN 12608" },
  { label: "Conta", value: "TPE Gri / Siyah" },
  { label: "Çıta", value: "Tek tırnaklı - PCE contalı" },
  { label: "Cam Kalınlıkları", value: "4, 5, 20, 24, 28 mm" },
];
