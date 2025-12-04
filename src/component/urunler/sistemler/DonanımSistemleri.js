import React from "react";
import SistemComponent from "./SistemComponent";
import SEO from "../../SEO";

export default function DonanımSistemleri() {
  return (
    <>
      <SEO
        title="Donanım Sistemleri | Açılım Seçenekleri"
        description="Winsa pencere ve kapı açılım seçenekleri. Çeşitli donanım sistemleri ile ihtiyacınıza uygun çözümler."
        keywords="pencere donanım, kapı donanım, açılım seçenekleri, winsa donanım, pvc aksesuar"
      />
      <SistemComponent title={title} menuItem={menuItem} />
    </>
  );
}

const title = ["Donanım", "Sistemleri"];
const menuItem = [
  {
    imgSource: require("./assets/acilim.jpg"),
    imgDesSource: null,
    imgDesc: "Pencere ve Kapı Açılım Seçenekleri",
    title: "acilim",
    path: "/urunler/donanım-sistemleri/donanım",
  },
  {
    imgSource: require("./assets/kol/beyaz-kol.png"),
    imgDesSource: null,
    imgDesc: "Beyaz Kol Sistemi",
    title: "beyaz-kol",
    path: "/urunler/donanım-sistemleri/donanım",
  },
  {
    imgSource: require("./assets/kol/gumus-kol.png"),
    imgDesSource: null,
    imgDesc: "Gümüş Kol Sistemi",
    title: "gumus-kol",
    path: "/urunler/donanım-sistemleri/donanım",
  },
  {
    imgSource: require("./assets/kol/metalikantrasit-kol.png"),
    imgDesSource: null,
    imgDesc: "Metalik Antrasit Kol Sistemi",
    title: "metalik-antrasit",
    path: "/urunler/donanım-sistemleri/donanım",
  },
];
