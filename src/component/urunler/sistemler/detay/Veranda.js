import React from "react";
import SEO from "../../../SEO";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/veranda-bg.jpg";
import teknik from "./assets/veranda-teknik.png";
import { Container } from "@mui/material";
import { kartela } from "../colorArrays";
export default function Verenda() {
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
        title="Veranda Cam Balkon | Winsa Ankara" 
        description="Winsa Veranda cam balkon sistemleri ile bahçe keyfini her mevsim yaşayın. Ankara Özpen PVC." 
      />
      <TeknikCamBalkonComponent
        title="Veranda"
        technicalData={technicalData}
        background={background}
        teknik={teknik}
        kartela={kartela}
      />
    </Container>
  );
}

const technicalData = [
  { label: "Genişlik", value: "47 mm" },
  { label: "Conta", value: "Fırça Conta / TPV Conta" },
  { label: "Conta Sayısı", value: "İç-Dış /4 sıra-5 sıra" },
  { label: "Kanat Araları", value: "Alüminyum Kapak Profili" },
  {
    label: "Cam Uygulamaları",
    value:
      "8 mm temperli tek cam, 10 mm temperli tek cam, 24 mm temperli çift cam, 30 mm temperli çift cam",
  },
  {
    label: "Opsiyon",
    value: "İspanyolet kullanımı, jaluzi kullanımı, enjeksiyon kapak kullanımı",
  },
];
