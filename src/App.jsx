import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
