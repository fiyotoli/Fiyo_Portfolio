import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const [isCollapsed, setIsCollapsed] = useState(true); // Track navbar collapse state

  const navLinkStyle = {
    color: "#212529",
    fontWeight: "normal",
    cursor: "pointer",
    padding: "10px 15px",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
  };

  const activeNavLinkStyle = {
    fontWeight: "bold",
    color: "#28a745", // Success color for active link
    borderLeft: "3px solid #28a745", // Success color for the left border
    paddingLeft: "12px",
    borderRadius: "5px", // Rounded left border
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsCollapsed(true); // Collapse navbar on link click
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3">
      <div className="container">
        {/* Text Logo */}
        <a className="navbar-brand" href="#" onClick={() => setIsCollapsed(true)}>
          MyPortfolio
        </a>

        {/* Navbar Toggle for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)} // Toggle navbar collapse
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mb-2 mb-sm-0">
              <Link
                to="about"
                smooth={true}
                duration={500}
                style={activeLink === "about" ? activeNavLinkStyle : navLinkStyle} // Conditionally apply active style
                onClick={() => handleLinkClick("about")} // Set active link and collapse navbar
              >
                About
              </Link>
            </li>
            <li className="nav-item mb-2 mb-sm-0">
              <Link
                to="services"
                smooth={true}
                duration={500}
                style={activeLink === "services" ? activeNavLinkStyle : navLinkStyle} // Conditionally apply active style
                onClick={() => handleLinkClick("services")} // Set active link and collapse navbar
              >
                Services
              </Link>
            </li>
            <li className="nav-item mb-2 mb-sm-0">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                style={activeLink === "portfolio" ? activeNavLinkStyle : navLinkStyle} // Conditionally apply active style
                onClick={() => handleLinkClick("portfolio")} // Set active link and collapse navbar
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item mb-2 mb-sm-0">
              <Link
                to="blog"
                smooth={true}
                duration={500}
                style={activeLink === "blog" ? activeNavLinkStyle : navLinkStyle} // Conditionally apply active style
                onClick={() => handleLinkClick("blog")} // Set active link and collapse navbar
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="d-flex">
            <a href="#contact" className="btn btn-success rounded-pill">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
