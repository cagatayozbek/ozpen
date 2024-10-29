import React from "react";
import SistemComponent from "./SistemComponent";

export default function PencereVeKapı() {
  return <SistemComponent title={title} menuItem={menuItem} />;
}
const title = ["Pencere Ve Kapı", "Sistemleri"];

const menuItem = [
  {
    imgSource: require("./assets/yenidorado76jpg_29-01-2021_18-31-47.jpg"),
    imgDesSource: require("./assets/yeni-dorado-76png-29-01-2021-18-33-55png_12-03-2024_14-39-02.png"),
    imgDesc: "Daha Fazla Rüzgar Dayanımı",
    title: "gold",
    path: "/urunler/pencere-ve-kapı-sistemleri/dorado-76",
  },
  {
    imgSource: require("./assets/revotech-goldjpg_14-10-2020_14-21-59.jpg"),
    imgDesSource: require("./assets/revotechgoldpng_27-10-2020_11-26-33.png"),
    imgDesc: "Daha Fazla Rüzgar Dayanımı",
    title: "gold",
    path: "/urunler/pencere-ve-kapı-sistemleri/revotech-gold",
  },
  {
    imgSource: require("./assets/revotechjpg_29-01-2021_18-11-45.jpg"),
    imgDesSource: require("./assets/revotechpng_27-10-2020_11-25-29.png"),
    imgDesc: "Daha Fazla Rüzgar Dayanımı",
    title: "gold",
    path: "/urunler/pencere-ve-kapı-sistemleri/revotech",
  },
  {
    imgSource: require("./assets/yenisafir76png_01-06-2022_11-49-10.png"),
    imgDesSource: require("./assets/yenisafir-76png-01-06-2022-11-52-13png_12-03-2024_14-38-38.png"),
    imgDesc: "Daha Fazla Rüzgar Dayanımı",
    title: "gold",
    path: "/urunler/pencere-ve-kapı-sistemleri/safir-76",
  },
];
