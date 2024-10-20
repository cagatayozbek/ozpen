import React from "react";
import { Box } from "@mui/material";

export default function PhotoList() {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto", // Enable horizontal scrolling
        padding: "10px",
        scrollbarWidth: "none", // Hide scrollbar on Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar on Chrome, Safari, and Edge
        },
      }}
    >
      {itemData.map((item) => (
        <Box
          key={item.img}
          sx={{
            flex: "0 0 auto", // Prevent images from shrinking
            marginRight: "10px",
            minWidth: 320, // Set a minimum width for each image item
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%", // Make the image fill the container
              height: "auto",
              borderRadius: "8px", // Optional: Add rounded corners
            }}
            loading="lazy"
          />
        </Box>
      ))}
    </Box>
  );
}

const itemData = [
  {
    img: require("../../assets/ozpen/ozpenpvc1-320x320.jpg"),
    title: "Bed",
  },
  {
    img: require("../../assets/ozpen/ozpenpvc2-320x320.jpg"),
    title: "Books",
  },
  {
    img: require("../../assets/ozpen/ozpenpvc5-320x320.jpg"),
    title: "Sink",
  },
  {
    img: require("../../assets/ozpen/ozpenpvc4-320x320.jpg"),
    title: "Kitchen",
  },
  {
    img: require("../../assets/ozpen/ozpenpvc6-320x320.jpg"),
    title: "Blinds",
  },
  {
    img: require("../../assets/ozpen/ozpenpvc7-320x320.jpg"),
    title: "Chairs",
  },
  {
    img: require("../../assets/ozpen/ozpenpvc8-320x320.jpg"),
    title: "Laptop",
  },
  {
    img: require("../../assets/ozpen/ozpenpvc9-320x320.jpg"),
    title: "Doors",
  },
];
