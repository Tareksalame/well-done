import React from "react";
import "./Header.css";
import { FaHamburger } from "react-icons/fa";
import Logo from "../../images/Logo3raysna.PNG";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="مطعمنا" className="logo" />
    </header>
  );
}
