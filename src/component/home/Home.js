import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bg from "../../assets/ozpen-on.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel-item-custom">
        <img className="d-block w-100 hero-image" src={bg} alt="Image One" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item-custom">
        <img
          className="d-block w-100 hero-image"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item-custom">
        <img
          className="d-block w-100 hero-image"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image Three"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
