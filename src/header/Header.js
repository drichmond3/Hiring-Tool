import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-banner">
        <div>
          <span className="title title-left">Richmond</span>
          <span className="title title-right">Technologies</span>
          <figure>
            <img alt="logo" src="../Logo.svg" />
          </figure>
        </div>
        {/* <p>Project Richmond</p> */}
      </div>
    </div>
  )
}