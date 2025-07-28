import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="small-profile-container">
        <h1>
          Software <span>Developer</span>
        </h1>
        <div className="small-profile-text">
          <p className="">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
