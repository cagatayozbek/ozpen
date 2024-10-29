import React from "react";
import SistemComponent from "./SistemComponent";

export default function PanjurVeKepenk() {
  return <SistemComponent title={title} menuItem={menuItem} />;
}
const title = ["Panjur ve Kepenk", "Sistemleri"];
const menuItem = [
  {
    imgSource: require("./assets/panjur/winstor.png"),
    imgDesSource: require("./assets/panjur/winstor1.png"),
    imgDesc: "Üstün Yalıtım Kalitesi",
    title: "winstor",
    path: "/urunler/panjur-ve-kepenk-sistemleri/winstor",
  },
  {
    imgSource: require("./assets/panjur/winkepenk.png"),
    imgDesSource: require("./assets/panjur/winkepenk1.png"),
    imgDesc: "Görsel Zenginlik",
    title: "winstor",
    path: "/urunler/panjur-ve-kepenk-sistemleri/winkepenk",
  },
];
