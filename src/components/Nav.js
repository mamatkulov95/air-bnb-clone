import React from "react";
import Logo from "../images/airbnb-logo.svg"

export default function Nav() {
  return (
          <nav className = "navbar">
          <img className="airbnb-logo" src =  {Logo} />
          </nav>
  )
}
