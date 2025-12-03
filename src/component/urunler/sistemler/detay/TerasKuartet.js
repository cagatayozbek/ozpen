import React from "react";
import SEO from "../../../SEO";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/teras-quartet-bg.jpg";
import teknik from "./assets/teraskuartet-teknik.png";
import { Container } from "@mui/material";
import { kartela } from "../colorArrays";
export default function TerasKuartet() {
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
        title="Teras Kuartet | Winsa Ankara" 
        description="Winsa Teras Kuartet cam balkon sistemleri ile modern ve estetik çözümler. Ankara Özpen PVC." 
      />
      <TeknikCamBalkonComponent
        title="Teras Kuartet"
        technicalData={technicalData}
        background={background}
        teknik={teknik}
        kartela={kartela}
      />
    </Container>
  );
}

const technicalData = [
  { label: "Genişlik", value: "138,5 mm" },
  { label: "Conta", value: "Fırça Conta" },
  { label: "Conta Sayısı", value: "İç-Dış / Çift Sıra" },
  { label: "Kanat Araları", value: "Alüminyum Kapak Profili" },
  { label: "Cam Uygulamaları", value: "20 mm temperli çift cam" },
  { label: "Mekanizma", value: "45.2 çapında tekerlek tasarımı" },
  { label: "Opsiyon", value: "Çerçeveli Kanat" },
];
