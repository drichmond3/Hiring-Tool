import React from "react";
import "./ResultsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ResultsPage(props) {
  let variance = 5;
  let width = 100;
  let height = 500;

  return (
    <div className="result-page">{generateIcons()}</div>
  );
}

const generateIcons = () => {
  let response = [];
  let width = 800;
  let xVariance = 50;
  let yVariance = 100;
  let height = 1300.;
  let MAX_INDEX = 20.;
  for (let index = 0; index < MAX_INDEX; index++) {
    let percentageComplete = ((MAX_INDEX - index) / MAX_INDEX) / 2;
    let xPos = (Math.random() * xVariance) + (index % 5) / 5. * width;
    let yPos = percentageComplete * height + (Math.random() * yVariance);
    let rotation = ((Math.random() * -135) + 68 + 180) + "deg";
    response.push(<div className="result-icon-wrapper">
      <FontAwesomeIcon color="gray" className="result-icon" style={{ left: xPos, top: yPos, transform: `rotate(${rotation})` }} size="8x" icon={faCamera} />
    </div>)
  }
  return response;
}