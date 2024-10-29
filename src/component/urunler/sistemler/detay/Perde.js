import React from "react";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/perde-bg.jpg";
import { Container } from "@mui/material";
import { kartela3 } from "../colorArrays";
export default function Perde() {
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
        title="Dış Mekan Perde Sistemleri"
        technicalData={technicalData}
        background={background}
        kartela={kartela3}
        video="DfyU-suZxpI"
      />
    </Container>
  );
}

const technicalData = [
  { label: "Genişlik", value: "10*11 cm" },
  { label: "Conta", value: "Fırça Conta" },
  { label: "Perde Uygulaması", value: "3 Tip Perde" },
  { label: "Mekanizma", value: "Motorlu Uygulama" },
];
