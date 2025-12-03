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
