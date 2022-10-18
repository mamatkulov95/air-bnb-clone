import React from "react";
import Logo from "../../images/airbnb.svg";

import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <img className="airbnb-logo" src={Logo} />
    </nav>
  );
}
