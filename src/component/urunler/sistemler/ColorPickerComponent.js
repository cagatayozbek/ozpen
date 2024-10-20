import React, { useState } from "react";
import { Box, Grid2, Typography } from "@mui/material";
import wImage from "../../../assets/w.png";
import "./sistemComponent.css";

// Sample data with color and product images

export default function ColorPickerPage({ colors, description }) {
  const [selectedProduct, setSelectedProduct] = useState(
    colors[0].productImage
  );

  const handleColorSelect = (productImage) => {
    setSelectedProduct(productImage);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",

        background: "linear-gradient(90deg, #B4B4B4 10%, #E5E5E5 80%)",
        zIndex: 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${wImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: -1,
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* First Grid: Color Picker */}
        <Grid2
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            height: { xs: "100%", md: "50%", sm: "45%" },
            display: "flex",
            paddingLeft: { xs: "0px", sm: "30px", md: "80px", lg: "130px" }, // Responsive paddingLeft
            flexFlow: "row wrap",
            alignContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box>
              <h1 className="header-text">
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
              </h1>
            </Box>
            {description ? (
              <Typography>{description}</Typography>
            ) : (
              <div>
                <br />
                <br />
                <br />
              </div>
            )}
          </Box>

          {colors.map((color, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                margin: "10px",
                width: { xs: "100%", sm: "45%", md: "45%" }, // Change md to 45% to make it 2 columns
                cursor: "pointer",
                "&:hover": { backgroundColor: "#e0e0e0" },
              }}
              onClick={() => handleColorSelect(color.productImage)}
            >
              {/* Color Image */}
              <Box
                component="img"
                src={color.colorImage}
                alt={`${color.name} Color`}
                sx={{
                  width: { xs: "40px", sm: "45px", md: "50px" }, // Responsive image size
                  height: { xs: "40px", sm: "45px", md: "50px" }, // Responsive image size
                  marginRight: "10px",
                }}
              />
              {/* Color Name */}
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font size
                  color: "#333",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {color.name}
              </Typography>
            </Box>
          ))}
        </Grid2>

        {/* Second Grid: Display Selected Product */}
        <Grid2
          item
          size={{ xs: 12, md: 6 }} // Full width on small screens, half width on larger screens
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh", // Ensure a minimum height for the grid, can adjust based on design
          }}
        >
          <Box
            component="img"
            src={selectedProduct}
            alt="Selected Product"
            sx={{
              width: { xs: "80%", sm: "70%", md: "90%" }, // Make the image responsive to screen size
              maxWidth: "600px", // Limit the image width on larger screens
              height: "auto", // Maintain aspect ratio
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
