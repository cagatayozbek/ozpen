import React from "react";
import SistemComponent from "./SistemComponent";
import SEO from "../../SEO";

export default function PencereVeKapı() {
  return (
    <>
      <SEO
        title="Pencere ve Kapı Sistemleri | Winsa"
        description="Winsa pencere ve kapı sistemleri. Dorado 76, Revotech Gold, Revotech, Safir 76. Yüksek yalıtım ve estetik tasarım."
        keywords="pvc pencere, pvc kapı, dorado 76, revotech, safir 76, winsa pencere, ankara pencere"
      />
      <SistemComponent title={title} menuItem={menuItem} />
    </>
  );
}
const title = ["Pencere Ve Kapı", "Sistemleri"];

const menuItem = [
  {
    imgSource: require("./assets/yenidorado76jpg_29-01-2021_18-31-47.jpg"),
    imgDesSource: require("./assets/yeni-dorado-76png-29-01-2021-18-33-55png_12-03-2024_14-39-02.png"),
    imgDesc: "Yalıtımın En Estetik Hali",
    title: "gold",
    path: "/urunler/pencere-ve-kapi-sistemleri/dorado-76",
  },
  {
    imgSource: require("./assets/revotech-goldjpg_14-10-2020_14-21-59.jpg"),
    imgDesSource: require("./assets/revotechgoldpng_27-10-2020_11-26-33.png"),
    imgDesc: "Daha Fazla Yalıtım",
    title: "gold",
    path: "/urunler/pencere-ve-kapi-sistemleri/revotech-gold",
  },
  {
    imgSource: require("./assets/revotechjpg_29-01-2021_18-11-45.jpg"),
    imgDesSource: require("./assets/revotechpng_27-10-2020_11-25-29.png"),
    imgDesc: "Daha Fazla Rüzgar Dayanımı",
    title: "gold",
    path: "/urunler/pencere-ve-kapi-sistemleri/revotech",
  },
  {
    imgSource: require("./assets/yenisafir76png_01-06-2022_11-49-10.png"),
    imgDesSource: require("./assets/yenisafir-76png-01-06-2022-11-52-13png_12-03-2024_14-38-38.png"),
    imgDesc: "Sürdürülebilir bir gelecek",
    title: "gold",
    path: "/urunler/pencere-ve-kapi-sistemleri/safir-76",
  },
];
