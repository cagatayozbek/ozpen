import React from "react";
import Hero from "../hero/Hero";
import hero from "../../assets/ozpen-on.jpeg";
import Container from "@mui/material/Container";
import logo from "../../assets/ozpen/ozpen-logo.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SEO from "../SEO";

export default function Kurumsal() {
  return (
    <>
      <SEO
        title="Kurumsal | Hakkımızda"
        description="2000 yılından beri Ankara'da PVC pencere, kapı ve cam balkon sistemlerinde güvenilir hizmet. Türkiye'nin en büyük Winsa bayisi olarak sektörde öncü firmayız."
      />
      <Hero hero={hero} title="Kurumsal" isBright={true} />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <img
            src={logo}
            alt="Özpen PVC Logo - Ankara Winsa Bayisi"
            style={{ height: "auto", width: "250px", marginBottom: "30px" }}
          />

          <Typography
            sx={{
              marginTop: "40px",
              wordSpacing: "2px",
              marginBottom: "40px",
              textIndent: "50px",
            }}
          >
            Başkent Özpen Pvc ve Isıcam Sanayi Ltd. Şti., 2000 yılında Ankara’da
            kurulmuş olup, PVC kapı ve pencere sektöründe güvenilirliği, müşteri
            memnuniyetini ve kaliteli hizmeti ilke edinmiştir. Kuruluşumuz,
            profesyonel ekibi ve her geçen gün genişleyen bayi ağıyla sektörde
            güçlü bir yer edinmiştir.
          </Typography>
          <Typography
            sx={{
              wordSpacing: "2px",
              marginBottom: "40px",
              textIndent: "50px",
            }}
          >
            2003 yılında düz cam, ısıcam ve dekoratif cam üretim tesislerini
            devreye alarak sektördeki talebe cevap veren geniş bir ürün
            yelpazesi sunmaya başlamış bulunmaktayız. Pencere sistemlerinin yanı
            sıra uzaktan kumandalı, manuel ve motorlu panjur sistemleri,
            sineklik, güneşlik ve balkon camlama gibi yenilikçi çözümleri de
            müşterilerimize sunuyoruz.
          </Typography>
          <Typography
            sx={{
              wordSpacing: "2px",
              marginBottom: "40px",
              textIndent: "50px",
            }}
          >
            2007 yılında, inşaat sektörüne yatırım yapma hedefiyle konut ve
            fabrika projelerine imza attık. Sektörümüzü daha da ileriye taşıma
            misyonumuzun bir parçası olarak, 2023 yılında Türkiye’nin önde gelen
            PVC üreticilerinden Winsay ile ortaklık kurarak, firmanın en büyük
            bayisi olarak faaliyetlerimize devam ediyoruz.
          </Typography>
          <Typography
            sx={{
              wordSpacing: "2px",
              marginBottom: "40px",
              textIndent: "50px",
            }}
          >
            Başkent Özpen Pvc ve Isıcam Sanayi Ltd. Şti., müşteri odaklı çalışma
            anlayışı, yenilikçi ürünler ve kaliteli hizmet anlayışı ile sektörde
            güvenin ve kalitenin adresi olmayı sürdürmektedir.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
