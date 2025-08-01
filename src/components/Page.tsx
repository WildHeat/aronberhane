import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

const Page = () => {
  return (
    <div className="app-container">
      <Hero />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Page;
