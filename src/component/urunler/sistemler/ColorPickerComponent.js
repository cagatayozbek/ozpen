import React, { useState } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import "./sistemComponent.css";
import { colors, colors1 } from "./colorArrays";

const ColorPicker = ({ colors, title }) => {
  const [selectedProduct, setSelectedProduct] = useState(
    colors[0].productImage
  );

  const handleColorSelect = (productImage) => {
    setSelectedProduct(productImage);
  };
  return (
    <Box sx={{ height: "100%" }}>
      <Grid2 container spacing={2} sx={{ flexDirection: "column" }}>
        {/* Color Picker Section */}
        <Grid2 item size={{ xs: 12 }}>
          <Box sx={{ padding: "0 20px" }}>
            <Typography variant="h4" className="header-text">
              {title}
            </Typography>
          </Box>
        </Grid2>

        {/* Color Options */}
        <Grid2 container item xs={12}>
          {colors.map((color, index) => (
            <Grid2
              key={index}
              item
              size={{ xs: 6, sm: 6, md: 4 }}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                margin: "10px 0",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#e0e0e0" },
              }}
              onClick={() => handleColorSelect(color.productImage)}
            >
              <Box
                component="img"
                src={color.colorImage}
                alt={`${color.name} Color`}
                sx={{
                  width: { xs: "40px", sm: "45px", md: "50px" },
                  height: { xs: "40px", sm: "45px", md: "50px" },
                  marginRight: "10px",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  color: "#333",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {color.name}
              </Typography>
            </Grid2>
          ))}
        </Grid2>

        {/* Selected Product Image Section */}
        <Grid2 item size={{ xs: 12 }}>
          <Box
            component="img"
            src={selectedProduct}
            alt="Selected Product"
            sx={{
              display: "block",
              width: { xs: "80%", sm: "70%", md: "60%" },
              maxWidth: "600px",
              margin: "20px auto 0",
              height: "auto",
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default function ColorPickerPage() {
  // Büyük harfle başlamalı, böylece JSX'de bileşen olarak tanınır.

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Grid2 container spacing={15}>
        {/* First Color Picker Page */}
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <ColorPicker colors={colors} title="Donanım" />
        </Grid2>

        {/* Second Color Picker Page */}
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <ColorPicker colors={colors1} title="Renkler" />
        </Grid2>
      </Grid2>
    </Box>
  );
}
