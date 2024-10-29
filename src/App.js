import "./App.css";
import Header from "./component/header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/home/Home";
import Kurumsal from "./component/kurumsal/Kurumsal";
import Contact from "./component/contact/Contact";

import PencereVeKapı from "./component/urunler/sistemler/PencereVeKapı";
import Surme from "./component/urunler/sistemler/Surme";
import PanjurVeKepenk from "./component/urunler/sistemler/PanjurVeKepenk";

import CamBalkon from "./component/urunler/sistemler/CamBalkon";
import Dorado76 from "./component/urunler/sistemler/detay/Dorado76";
import RevotechGold from "./component/urunler/sistemler/detay/RevotechGold";
import Revotech from "./component/urunler/sistemler/detay/Revotech";
import Safir76 from "./component/urunler/sistemler/detay/Safir76";
import ComfortSlidePlus from "./component/urunler/sistemler/detay/ComfortSlidePlus";
import ComfortSlide from "./component/urunler/sistemler/detay/ComfortSlide";
import Panorama from "./component/urunler/sistemler/detay/Panorama";
import Lotus from "./component/urunler/sistemler/detay/Lotus";
import Winstor from "./component/urunler/sistemler/detay/Winstor";
import Winkepenk from "./component/urunler/sistemler/detay/Winkepenk";
import Urunler from "./component/urunler/Urunler";
import Vela from "./component/urunler/sistemler/detay/Vela";
import VelaGold from "./component/urunler/sistemler/detay/VelaGold";

import CamekanKonfor from "./component/urunler/sistemler/detay/CamekanKonfor";
import Verenda from "./component/urunler/sistemler/detay/Veranda";
import Camekan from "./component/urunler/sistemler/detay/Camekan";
import Teras from "./component/urunler/sistemler/detay/Teras";
import TerasKonfor from "./component/urunler/sistemler/detay/TerasKonfor";
import TerasKuartet from "./component/urunler/sistemler/detay/TerasKuartet";
import Giyotin from "./component/urunler/sistemler/detay/Giyotin";
import Perde from "./component/urunler/sistemler/detay/Perde";
import Donanım from "./component/urunler/sistemler/detay/Donanım";
import Referanslar from "./component/referanslar/Referanslar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="kurumsal" element={<Kurumsal />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="referanslar" element={<Referanslar />} />
          {/* Redirecting from /urunler to /home */}
          <Route path="urunler" element={<Urunler />} />
          {/* //////////////////////pencere///////////////////////*/}
          <Route
            path="urunler/pencere-ve-kapi-sistemleri"
            element={<PencereVeKapı />}
          />
          <Route
            path="urunler/pencere-ve-kapı-sistemleri/dorado-76"
            element={<Dorado76 />}
          />
          <Route
            path="urunler/pencere-ve-kapı-sistemleri/revotech-gold"
            element={<RevotechGold />}
          />
          <Route
            path="urunler/pencere-ve-kapı-sistemleri/revotech"
            element={<Revotech />}
          />
          <Route
            path="urunler/pencere-ve-kapı-sistemleri/safir-76"
            element={<Safir76 />}
          />
          {/* //////////////////////pencere///////////////////////*/}

          {/* //////////////////////sürme///////////////////////*/}
          <Route path="urunler/surme-sistemleri" element={<Surme />} />
          <Route
            path="urunler/surme-sistemleri/comfort-slide-plus"
            element={<ComfortSlidePlus />}
          />
          <Route
            path="urunler/surme-sistemleri/comfort-slide"
            element={<ComfortSlide />}
          />
          <Route
            path="urunler/surme-sistemleri/panorama-hs-76"
            element={<Panorama />}
          />
          <Route path="urunler/surme-sistemleri/lotus" element={<Lotus />} />

          {/* //////////////////////sürme///////////////////////*/}

          {/* //////////////////////kepenk///////////////////////*/}
          <Route
            path="urunler/panjur-ve-kepenk-sistemleri"
            element={<PanjurVeKepenk />}
          />
          <Route
            path="urunler/panjur-ve-kepenk-sistemleri/winstor"
            element={<Winstor />}
          />
          <Route
            path="urunler/panjur-ve-kepenk-sistemleri/winkepenk"
            element={<Winkepenk />}
          />
          {/* //////////////////////kepenk///////////////////////*/}
          <Route path="urunler/donanım-sistemleri" element={<Donanım />} />

          {/* //////////////////////cambalkon///////////////////////*/}
          <Route path="urunler/cam-balkon-sistemleri" element={<CamBalkon />} />
          <Route path="urunler/cam-balkon-sistemleri/vela" element={<Vela />} />
          <Route
            path="urunler/cam-balkon-sistemleri/vela-gold"
            element={<VelaGold />}
          />
          <Route
            path="urunler/cam-balkon-sistemleri/veranda"
            element={<Verenda />}
          />
          <Route
            path="urunler/cam-balkon-sistemleri/camekan"
            element={<Camekan />}
          />
          <Route
            path="urunler/cam-balkon-sistemleri/camekan-konfor"
            element={<CamekanKonfor />}
          />
          <Route
            path="urunler/cam-balkon-sistemleri/teras"
            element={<Teras />}
          />
          <Route
            path="urunler/cam-balkon-sistemleri/teras-konfor"
            element={<TerasKonfor />}
          />
          <Route
            path="urunler/cam-balkon-sistemleri/teras-kuartet"
            element={<TerasKuartet />}
          />

          <Route
            path="urunler/cam-balkon-sistemleri/hareketli-kupeste-sistemleri"
            element={<Giyotin />}
          />
          <Route
            path="urunler/cam-balkon-sistemleri/dis-mekan-perde-sistemleri"
            element={<Perde />}
          />

          {/* //////////////////////cambalkon///////////////////////*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
