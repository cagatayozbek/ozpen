import React from "react";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/vela-gold-bg.jpg";
import teknik from "./assets/velagold-teknik.png";
import { Container } from "@mui/material";
import { kartela2 } from "../colorArrays";
export default function VelaGold() {
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
        title="Vela Gold"
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
  { label: "Conta Sayısı", value: "İç-Dış / Tek-Çift" },
  { label: "Kanat Araları", value: "Alüminyum Fitil Profili" },
  { label: "Cam Uygulamaları", value: "8 mm temperli tek cam" },
];
