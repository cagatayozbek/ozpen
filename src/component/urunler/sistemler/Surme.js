import React from "react";
import SistemComponent from "./SistemComponent";
import SEO from "../../SEO";

export default function Surme() {
  return (
    <>
      <SEO
        title="Sürme Sistemleri | Winsa"
        description="Winsa sürme sistemleri. Comfort Slide Plus, Comfort Slide, Panorama HS-76, Lotus. Kolay kullanım ve mükemmel sızdırmazlık."
        keywords="sürme pencere, sürme kapı, comfort slide, panorama, lotus, winsa sürme, sürme sistem"
      />
      <SistemComponent title={title} menuItem={menuItem} />
    </>
  );
}

const title = ["Sürme", "Sistemleri"];

const menuItem = [
  {
    imgSource: require("./assets/surme/plus.png"),
    imgDesSource: require("./assets/surme/plus1.png"),
    imgDesc: "Kolay Kullanım Ve Sızdırmazlık",
    title: "plus",
    path: "/urunler/surme-sistemleri/comfort-slide-plus",
  },
  {
    imgSource: require("./assets/surme/plus.png"),
    imgDesSource: require("./assets/surme/slide1.png"),
    imgDesc: "Kolay Kullanım Ve Sızdırmazlık",
    title: "slide",
    path: "/urunler/surme-sistemleri/comfort-slide",
  },
  {
    imgSource: require("./assets/surme/panorama.png"),
    imgDesSource: require("./assets/surme/panorama1.png"),
    imgDesc: "Sınırsız Perspektif",
    title: "panorama",
    path: "/urunler/surme-sistemleri/panorama-hs-76",
  },
  {
    imgSource: require("./assets/surme/lotus.png"),
    imgDesSource: require("./assets/surme/lotus1.png"),
    imgDesc: "Modern, Estetik ve Sade",
    title: "panorama",
    path: "/urunler/surme-sistemleri/lotus",
  },
];
