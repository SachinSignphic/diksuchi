import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);

  const navLinks = [
    { name: "ABOUT US", path: "/about" },
    { name: "OUR WORKS", path: "/works" },
    { name: "PUBLICATIONS", path: "/publications" },
  ];

  const handleClick = (path) => {
    setActive(path);
  };

  const handleTalkToUs = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "our-studio" } });
    } else {
      const section = document.getElementById("our-studio");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img className="nav-left" src="/nav-logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="nav-middle">
        {navLinks.map((link, index) => (
          <React.Fragment key={link.path}>
            <p
              className={`nav-item ${active === link.path ? "active" : ""}`}
              onClick={() => handleClick(link.path)}
            >
              <Link
                to={link.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {link.name}
              </Link>
            </p>
            {index !== navLinks.length - 1 && <p>/</p>}
          </React.Fragment>
        ))}
      </div>

      <div
        className="nav-right"
        onClick={handleTalkToUs}
        style={{ cursor: "pointer" }}
      >
        <p>TALK TO US</p>
        <div className="diag-arrow">
          <img src="/diag-arrow.png" alt="Arrow" />
        </div>
        <div className="underline"></div>
      </div>
    </div>
  );
}
