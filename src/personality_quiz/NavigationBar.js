import React from "react";
import "./ContentContainer.css";

export default function NavigationBar(props) {
  return (
    <div className="navigation-bar">
      <nav className={props.activePage === Page.WELCOME ? "active" : ""}>Welcome</nav>
      <nav className={props.activePage === Page.QUIZ ? "active" : ""}>Quiz</nav>
      <nav className={props.activePage === Page.RESULTS ? "active" : ""}>Results</nav>
    </div>
  )
}

export const Page = { WELCOME: 0, QUIZ: 1, RESULTS: 2 };
