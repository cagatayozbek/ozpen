import React from "react";
import Paralax from "../../../home/Paralax";
import logo from "../assets/panjur/winkepenk1.png";
import background from "./assets/winkepenk-bg.jpg";
import background2 from "./assets/winkepenk-bg2.jpg";
import teknik from "./assets/winkepenk-teknik.png";
import TanıtımComponent from "./components/TanıtımComponent";
import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { colors, colors1, description } from "../colorArrays";
import Form from "../Form";
export default function Winkepenk() {
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

const title = ["Her Coğrafyada", "Akdeniz Havası"];
const aciklama = [
  {
    title: "Yalıtım",
    desc: "Winkepenk pvc kepenk sistemleri uygulandığı alanlarda maksimum güneş kontrolü sağlar. Olumsuz hava şartları ve dış etkenlere karşı koruma da sağlayan kepenk sistemleri güvenli bir ortam yaratırken ısı tasarrufu için de alternatif bir çözüm yaratır.",
  },
  {
    title: "Tasarım",
    desc: "Winkepenk Sistemleri farklı uygulama ve renk seçenekler ile evinize muhtesem bir görsel zenginlik katan PVC kepenk sistemidir. Sistem doğramadan bağımsız olarak kasa profili ile yada direkt olarak duvar yüzeyine uygulanmaktadır. Winkepenk Sistem, uygulama yapılacak yerin özelliklerine göre kemerli kepenk yapmak mümkündür. Winkepenk Sistemde kanat içlerine lamel yada sisteme özel panel profili uygulanabilmektedir.",
  },
  {
    title: "Donanım",
    desc: "Winkepenk Sistemleri farklı uygulama ve renk seçenekler ile evinize muhtesem bir görsel zenginlik katan PVC kepenk sistemidir. Sistem doğramadan bağımsız olarak kasa profili ile yada direkt olarak duvar yüzeyine uygulanmaktadır. Winkepenk Sistem, uygulama yapılacak yerin özelliklerine göre kemerli kepenk yapmak mümkündür. Winkepenk Sistemde kanat içlerine lamel yada sisteme özel panel profili uygulanabilmektedir.",
  },
];
const technicalData = [];
const desc =
  "Cepheye açılan kanatları tek kanat veya sağa ve sola katlanır tipte çift ya da dört kanat uygulanabilmektedir. İsteğe bağlı kanat içi kanat uygulaması da bulunmaktadır.";
