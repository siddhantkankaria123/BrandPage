import React from "react";
import "./hero.css";
import shoeImage from "../assets/shoe_image.png";
import flipkart from "../assets/flipkart.png";
import amazon from "../assets/amazon.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button className="shop-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={flipkart} />
            <img src={amazon} />
          </div>
        </div>
      </div>
      <div className="shoe-container">
        <img className="shoe-image" src={shoeImage} />
      </div>
    </div>
  );
};

export default Hero;
