import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button><Link to="https://www.google.com/">Resume</Link></button>
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#experience")}>Experience</button>
            <button onClick={() => scrollTo("#skills")}>Skills</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
