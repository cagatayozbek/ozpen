import React from "react";
import SEO from "../../../SEO";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/vela-bg.jpg";
import teknik from "./assets/vela-teknik.png";
import { Container } from "@mui/material";
import { kartela2 } from "../colorArrays";
export default function Vela() {
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
        title="Vela Cam Balkon | Winsa Ankara" 
        description="Winsa Vela cam balkon sistemleri ile balkonunuzu dört mevsim kullanın. Ankara Özpen PVC." 
      />
      <TeknikCamBalkonComponent
        title="Vela"
        technicalData={technicalData}
        background={background}
        teknik={teknik}
        kartela={kartela2}
      />
    </Container>
  );
}

const technicalData = [
  { label: "Genişlik", value: "40 mm" },
  { label: "Conta", value: "Fırça Conta" },
  { label: "Conta Sayısı", value: "İç - Dış / Çift sıra" },
  { label: "Kanat Araları", value: "Alüminyum Fitil Profili" },
  {
    label: "Cam Uygulamaları",
    value: "8 mm temperli tek cam, 24 mm temperli çift cam",
  },
  { label: "Opsiyon", value: "Stor perde profili" },
];
