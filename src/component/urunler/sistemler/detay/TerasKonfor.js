import React from "react";
import SEO from "../../../SEO";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/teras-konfor-bg.jpg";
import teknik from "./assets/teraskonfor-teknik.png";
import { Container } from "@mui/material";
import { kartela } from "../colorArrays";
export default function TerasKonfor() {
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
        title="Teras Konfor | Winsa Ankara" 
        description="Winsa Teras Konfor ısıcamlı cam balkon sistemleri ile kış bahçesi keyfi. Ankara Özpen PVC." 
      />
      <TeknikCamBalkonComponent
        title="Teras Konfor"
        technicalData={technicalData}
        background={background}
        teknik={teknik}
        kartela={kartela}
      />
    </Container>
  );
}

const technicalData = [
  { label: "Genişlik", value: "146,2 mm" },
  { label: "Conta", value: "Fırça Conta" },
  { label: "Conta Sayısı", value: "İç-Dış / Çift Sıra" },
  { label: "Kanat Araları", value: "Alüminyum Kapak Profili" },
  { label: "Cam Uygulamaları", value: "30 mm temperli çift cam" },
  { label: "Mekanizma", value: "45.2 çapında tekerlek tasarımı, 8 adet" },
  { label: "Opsiyon", value: "Jaluzi uygulama imkanı" },
];
