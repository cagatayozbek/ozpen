import React from "react";
import Paralax from "../../../home/Paralax";
import logo from "../assets/surme/panorama1.png";
import background from "./assets/panorama-bg.jpg";
import background2 from "./assets/panorama-bg2.jpg";
import teknik from "./assets/panorama-teknik.png";
import TanıtımComponent from "./components/TanıtımComponent";
import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { colors, colors1, description } from "../colorArrays";
import Form from "../Form";
export default function Panorama() {
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

const title = ["Minimum Eşik, Maksimum Genişlik", "Kontrol Sizin Elinizde"];
const aciklama = [
  {
    title: "Yalıtım",
    desc: "Panorama HS 76 sistemi; 175 mm kasa genişliği, 8 odacık, 39 mm’ye kadar çift cam, üçlü cam üniteleri ve panel kullanımı sağlayan çıta profilleri bulunmaktadır. Özel tasarlanan epdm contaları, kanat yapısı ve sızdırmazlık parçaları ile benzerlerine göre üst düzeyde ısı, hava, su ve toz yalıtımı sağlar. Kanat profilinde sahip olduğu büyük destek sacı odacığı sayesinde de rüzgar yüklerine karşı maksimum dayanım konforu sunar.",
  },
  {
    title: "Tasarım",
    desc: "Panorama HS 76 sistemi düşük eşik taleplerini 20 mm yüksekliğindeki alüminyum eşik profili ile sorunsuz karşılanmaktadır. Sağladığı geniş cam açıklıkları ile uygulandığı alanlarda panoramik görsellik oluşturulmasına olanak verir. Panorama HS 76 sisteminde 2’li, 3’lü ve 4’lü kanat uygulamaları yapılabilir.",
  },
  {
    title: "Donanım",
    desc: "Panorama HS 76 sistem 3 metre genişliğinde, 300 kg ağırlığında kanat yapımına olanak sağlamaktadır. İlave arabalar ile 400 kg a çıkartılabilir. Winsa donanımları, Panorama HS 76 Sisteminin renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.",
  },
];
const technicalData = [
  { label: "Profil Genişliği", value: "Kasa 175mm / Kanat 76mm" },
  { label: "Odacık Sayısı", value: "Kasa 8 / Kanat 4" },
  { label: "Sınıf", value: "A Sınıfı (TS EN 12608-1 + A1)" },
  { label: "Conta", value: "TPE Gri / Siyah" },
  { label: "Conta Sayısı", value: "2 (iç-dış)" },
  { label: "Çıta", value: "Tek tırnaklı - PCE contalı" },
  { label: "Cam Kalınlıkları", value: "4, 10, 20, 24, 26, 30, 36, 39 mm" },
];
