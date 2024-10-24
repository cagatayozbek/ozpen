import React from "react";
import PencereVeKapı from "./sistemler/PencereVeKapı";
import Surme from "./sistemler/Surme";
import PanjurVeKepenk from "./sistemler/PanjurVeKepenk";
import DonanımSistemleri from "./sistemler/DonanımSistemleri";
import { Container } from "@mui/material";
import CamBalkon from "./sistemler/CamBalkon";

export default function Urunler() {
  return (
    <Container>
      <PencereVeKapı />
      <Surme />
      <PanjurVeKepenk />
      <DonanımSistemleri />
      <CamBalkon />
    </Container>
  );
}
