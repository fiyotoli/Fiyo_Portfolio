import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/contact";
import Home from "./components/Home";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import { IoIosArrowUp } from "react-icons/io";

import Skill from "./components/Skill";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <button className="btn btn-success" type="button" disabled>
          <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span className="ms-2">Loading...</span>
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skill/>
      <Portfolio />
      <Blog />
      <Testimony />
      <Contact />
      <Faq />
      <Footer />

      {/* Scroll-Up Button */}
      <ScrollUpButton />
    </>
  );
};

// Scroll-Up Button Component
const ScrollUpButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showScroll && (
      <button
        className="btn btn-success position-fixed bottom-0 end-0 m-4"
        onClick={scrollToTop}
        style={{ zIndex: 1000 }}
      >
         <IoIosArrowUp size={24}/>
      </button>
    )
  );
};

export default App;
