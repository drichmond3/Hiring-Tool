import React from "react";
import "./ContentContainer.css";

export default function NavigationBar(props) {
  return (
    <div className="navigation-bar">
      <nav className="active">Welcome</nav>
      <nav>Quiz</nav>
      <nav>Results</nav>
    </div>
  )
}

export const Page = { WELCOME: 0, QUIZ: 1, RESULTS: 2 };
