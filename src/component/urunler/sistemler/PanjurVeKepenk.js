import React from "react";
import SistemComponent from "./SistemComponent";
import SEO from "../../SEO";

export default function PanjurVeKepenk() {
  return (
    <>
      <SEO 
        title="Panjur ve Kepenk Sistemleri | Winsa"
        description="Winsa panjur ve kepenk sistemleri. Winstor ve Winkepenk ile üstün yalıtım ve güvenlik. Motorlu ve manuel seçenekler."
        keywords="pvc panjur, pvc kepenk, winstor, winkepenk, motorlu panjur, güvenlik kepenk"
      />
      <SistemComponent title={title} menuItem={menuItem} />
    </>
  );
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
