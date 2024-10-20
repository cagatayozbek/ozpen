import React from "react";
import SistemComponent from "./SistemComponent";

export default function Surme() {
  return <SistemComponent title={title} menuItem={menuItem} />;
}

const title = ["Sürme", "Sistemleri"];

const menuItem = [
  {
    imgSource: require("./assets/surme/plus.png"),
    imgDesSource: require("./assets/surme/plus1.png"),
    imgDesc: "Kolay Kullanım Ve Sızdırmazlık",
    title: "plus",
  },
  {
    imgSource: require("./assets/surme/plus.png"),
    imgDesSource: require("./assets/surme/slide1.png"),
    imgDesc: "Kolay Kullanım Ve Sızdırmazlık",
    title: "slide",
  },
  {
    imgSource: require("./assets/surme/panorama.png"),
    imgDesSource: require("./assets/surme/panorama1.png"),
    imgDesc: "Sınırsız Perspektif",
    title: "panorama",
  },
  {
    imgSource: require("./assets/surme/lotus.png"),
    imgDesSource: require("./assets/surme/lotus1.png"),
    imgDesc: "Modern, Estetik ve Sade",
    title: "panorama",
  },
];
