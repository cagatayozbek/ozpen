import React from "react";
import PencereVeKapı from "./sistemler/PencereVeKapı";
import Surme from "./sistemler/Surme";
import PanjurVeKepenk from "./sistemler/PanjurVeKepenk";
import DonanımSistemleri from "./sistemler/DonanımSistemleri";
import { Container } from "@mui/material";
import CamBalkon from "./sistemler/CamBalkon";
import SEO from "../SEO";

export default function Urunler() {
  return (
    <>
      <SEO
        title="Ürünler | PVC Sistemleri"
        description="Özpen PVC ürün kataloğu. Pencere, kapı, sürme, cam balkon, panjur ve kepenk sistemleri. Winsa kalitesiyle Ankara'da."
        keywords="pvc pencere, pvc kapı, cam balkon, sürme sistem, panjur, kepenk, winsa ürünleri"
      />
      <Container>
        <PencereVeKapı />
        <Surme />
        <PanjurVeKepenk />
        <DonanımSistemleri />
        <CamBalkon />
      </Container>
    </>
  );
}
