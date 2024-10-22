import React, { useState } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import "./sistemComponent.css";

export default function ColorPickerPage({ colors, description }) {
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
              <span style={{ position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "30%",
                    backgroundColor: "#FE5001",
                    zIndex: -1,
                  }}
                ></span>
                Donanım
              </span>
            </Typography>

            {description && (
              <Typography sx={{ marginTop: "10px" }}>{description}</Typography>
            )}
          </Box>
        </Grid2>

        {/* Color Options */}
        <Grid2 container item xs={12} spacing={2}>
          {colors.map((color, index) => (
            <Grid2
              key={index}
              item
              size={{ xs: 6, sm: 6, md: 4 }}
              xs={6}
              sm={6}
              md={4}
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
}
