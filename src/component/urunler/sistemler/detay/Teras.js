import React from "react";
import SEO from "../../../SEO";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/teras-bg.jpg";
import teknik from "./assets/teras-teknik.png";
import { Container } from "@mui/material";
import { kartela } from "../colorArrays";
export default function Teras() {
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
        title="Teras Cam Balkon | Winsa Ankara" 
        description="Winsa Teras cam balkon sistemleri ile açık alanlarınızı değerlendirin. Ankara Özpen PVC." 
      />
      <TeknikCamBalkonComponent
        title="Teras"
        technicalData={technicalData}
        background={background}
        teknik={teknik}
        kartela={kartela}
      />
    </Container>
  );
}

const technicalData = [
  { label: "Genişlik", value: "131,2 mm" },
  { label: "Conta", value: "Fırça Conta" },
  { label: "Conta Sayısı", value: "İç-Dış / Çift Sıra" },
  { label: "Kanat Araları", value: "Alüminyum Kapak Profili" },
  { label: "Cam Uygulamaları", value: "8 mm temperli tek cam" },
  { label: "Mekanizma", value: "45.2 mm tekerlekli tasarım (özel çap)" },
];
