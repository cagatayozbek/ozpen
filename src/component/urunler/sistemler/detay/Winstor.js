import React from "react";
import Paralax from "../../../home/Paralax";
import logo from "../assets/panjur/winstor1.png";
import background from "./assets/winstor-bg.jpg";
import background2 from "./assets/winstor-bg2.jpg";
import teknik from "./assets/winstor-teknik.png";
import TanıtımComponent from "./components/TanıtımComponent";
import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { colors, colors1, description } from "../colorArrays";
import Form from "../Form";
export default function Winstor() {
  return (
    <div>
      <Paralax logo={logo} background={background} title={title} />
      <TanıtımComponent background={background2} description={aciklama} />
      <TeknikComponent
        technicalData={technicalData}
        logo={logo}
        teknik={teknik}
        desc={desc}
      />
      <ColorPickerPage colors={colors1} />
      <ColorPickerPage colors={colors} description={description} />
      <Form />
    </div>
  );
}

const title = ["Mevsim Kontrolü Sağlayan", "Şık Tasarım"];
const aciklama = [
  {
    title: "Yalıtım",
    desc: "Winsa Pvc Pencere Kapı ve Panjur Sistemleri; her türlü yapının kapı ve pencerelerine kolayca uygulanır. Dısarıda hava kosulları ne olursa olsun mevsimlerin kontrolünü sağlayan tüm PVC pencere ve kapı sistemleri ile uyumlu, sık tasarımı ve üstün yalıtım kalitesi ile benzersizdir.",
  },
  {
    title: "Tasarım",
    desc: "Winstor Pvc Panjur Sistemleri farklı uygulama ve renk seçenekler ile evinize muhtesem bir görsel zenginlik katan monoblok panjur sistemidir. Winsa Pvc Pencere Kapı ve Panjur Sistemlerinde, 37 mm lamel (mini panjur) ve 55 mm lamel kullanımına imkan veren PVC yan ve orta dikmeler mevcuttur.",
  },
  {
    title: "Donanım",
    desc: "Winstor Pvc Panjur sistemi serilerimiz ile uygulanabilen manuel ve motorlu kullanım seçenekleri sunmaktadır. Winsa Pvc Pencere Kapı ve Panjur Sistemleri sürme ve stor sineklik uygulamalarına olanak sağlayan yardımcı profiller sunmaktadır.",
  },
];
const technicalData = [
  { label: "185*185 Kutu", value: null },
  { label: "220*220 Kutu", value: null },
  { label: "185*220 Yalıtımlı Kutu", value: null },
  { label: "220*225 Yalıtımlı Kutu", value: null },
  { label: "Stor Sineklik Uygulanabilmektedir", value: null },
];
const desc =
  "Dışarıda hava koşulları ne olursa olsun mevsimlerin kontrolünü sağlayan tüm PVC pencere ve kapı sistemleri ile uyumlu, şık tasarımı ve üstün yalıtım kalitesi ile benzersizdir.";
