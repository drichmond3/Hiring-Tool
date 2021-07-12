import React from "react";
import "./ResultsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Resume from "../../images/Resume.mp4";

export default function ResultsPage(props) {
  return (
    <div className="result-page">
      <video width="100%" autoPlay height="100%">
        <source src={Resume}></source>
      </video>
    </div>
  );
}
