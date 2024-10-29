import React from "react";
import SistemComponent from "./SistemComponent";

export default function DonanımSistemleri() {
  return <SistemComponent title={title} menuItem={menuItem} />;
}

const title = ["Winsa", "Açılım Seçenekleri"];
const menuItem = [
  {
    imgSource: require("./assets/acilim.jpg"),
    imgDesSource: null,
    imgDesc: "Açılım Seçenekleri",
    title: "gold",
    path: "/urunler/donanım-sistemleri",
  },
];
