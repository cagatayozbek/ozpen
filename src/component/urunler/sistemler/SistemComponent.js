import React from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./sistemComponent.css";

export default function SistemComponent({ title, menuItem }) {
  const navigate = useNavigate();

  const handleBoxClick = (path) => {
    navigate(path);
  };

  return (
    <div className="sistem-component">
      <h2 className="sistem-title">
        {title[0]} <span className="highlight">{title[1]}</span>
      </h2>
      
      <Grid container spacing={3}>
        {menuItem.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              className="sistem-card"
              onClick={() => handleBoxClick(item.path)}
            >
              <div className="sistem-card-image">
                <img
                  src={item.imgSource}
                  alt={item.title}
                  className="product-image"
                />
              </div>
              <div className="sistem-card-content">
                {item.imgDesSource && (
                  <img
                    src={item.imgDesSource}
                    alt={item.title}
                    className="product-logo"
                  />
                )}
                {item.imgDesc && (
                  <p className="product-description">{item.imgDesc}</p>
                )}
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
