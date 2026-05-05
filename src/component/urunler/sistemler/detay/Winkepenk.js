import React from "react";
import SEO from "../../../SEO";
import logo from "../assets/panjur/winkepenk1.png";
import background from "./assets/winkepenk-bg.jpg";
import teknik from "./assets/winkepenk-teknik.png";

import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { Container } from "@mui/material";
export default function Winkepenk() {
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
        title="Winkepenk | Winsa Ankara" 
        description="Winsa Winkepenk kepenk sistemleri ile güvenliğinizi ve estetiği artırın. Ankara Özpen PVC." 
      />
      <TeknikComponent
        title="Winkepenk"
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
