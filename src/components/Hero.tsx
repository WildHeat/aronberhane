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
      <div className="numbers-container">
        <div className="number">
          <h1>4+</h1>
          <p>Projects</p>
        </div>
        <div className="number">
          <h1>25+</h1>
          <p>Years</p>
        </div>
        <div className="number">
          <h1>45+</h1>
          <p>Gains</p>
        </div>
      </div>

      <div className="addtional-boxes">
        <div className="box box1">
          <h4>React Super Star</h4>
        </div>
        <div className="box box2">
          <h4>Python dev</h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
