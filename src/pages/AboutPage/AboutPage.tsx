import React, { useState } from "react";
import "./About.css";
import { useTheme } from "../../theme/useTheme";

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme}-mode`}>
      <div className="about-container">
        <h1>Welcome to Our Blossom Wonderland</h1>
        <p>
          At Blossom Delights, we believe that every petal holds a story, and
          each bloom carries emotions. Our journey began with a passion for
          nature's artistry and a love for bringing joy to your moments.
        </p>
        <p>
          Step into our enchanting world where vibrant colors and delicate
          fragrances blend to create mesmerizing floral arrangements. From
          elegant bouquets to charming centerpieces, our florists handcraft each
          creation with meticulous care, turning flowers into poetry that speaks
          to your heart.
        </p>
      </div>
    </div>
  );
};

export default About;
