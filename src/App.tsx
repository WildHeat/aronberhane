import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import "./styles/App.css";
import Profile from "./components/Profile";
import Page from "./components/Page";

const App: React.FC = () => {
  return (
    <div className="app">
      <Profile />
      <Page />
    </div>
  );
};

export default App;
