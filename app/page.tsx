import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Desktop from "./sections/Navbar/Desktop";
import Mobile from "./sections/Navbar/Mobile";
import Experience from "./sections/Experience";
import Articles from "./sections/Articles";

const Home = () => {
  return (
    <div>
      <Desktop />
      <Mobile />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
