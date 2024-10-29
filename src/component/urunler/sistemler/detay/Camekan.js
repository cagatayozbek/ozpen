import React from "react";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/camekan-bg.jpg";
import teknik from "./assets/camekan-teknik.png";
import { Container } from "@mui/material";
import { kartela } from "../colorArrays";
export default function Camekan() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "100px",
      }}
    >
      <TeknikCamBalkonComponent
        title="Camekan"
        technicalData={technicalData}
        background={background}
        teknik={teknik}
        kartela={kartela}
      />
    </Container>
  );
}

const technicalData = [
  { label: "Genişlik", value: "39 mm" },
  { label: "Conta", value: "TPV / Fırça Conta" },
  { label: "Conta Sayısı", value: "İç-Dış / Çift Sıra" },
  { label: "Kanat Araları", value: "Alüminyum Kapak Profili" },
  { label: "Cam Uygulamaları", value: "8 mm temperli tek cam" },
  { label: "Mekanizma", value: "8 tekerlekli taşıyıcı tasarım" },
  { label: "Opsiyon", value: "Stor perde profili" },
];
