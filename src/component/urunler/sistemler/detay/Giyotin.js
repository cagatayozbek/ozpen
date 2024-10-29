import React from "react";
import TeknikCamBalkonComponent from "./components/TeknikCamBalkonComponent";
import background from "./assets/giyotin-bg.jpg";

import { Container } from "@mui/material";
import { kartela3 } from "../colorArrays";
export default function Giyotin() {
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
        title="Giyotin Cam Balkon"
        technicalData={technicalData}
        background={background}
        kartela={kartela3}
        video="cQkxMahIiaw"
      />
    </Container>
  );
}

const technicalData = [
  { label: "Genişlik", value: "13*13 cm" },
  { label: "Conta", value: "Fırça Conta" },
  { label: "Conta Sayısı", value: "Çift Sıra" },
  { label: "Kanat Araları", value: "Alüminyum Kapak Profili" },
  {
    label: "Cam Uygulamaları",
    value: "8 mm temperli tek cam ve 21 mm (5+11+5) temperli çift cam",
  },
  { label: "Mekanizma", value: "Motorlu Uygulama" },
  {
    label: "Uygulama Tipleri",
    value:
      "Tek cam: 1 sabit + 1 hareketli, 1 sabit + 2 hareketli, 1 sabit + 3 hareketli; Çift cam: 1 sabit + 1 hareketli, 1 sabit + 2 hareketli",
  },
];
