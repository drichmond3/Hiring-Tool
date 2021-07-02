import React from "react";
import "./WelcomePage.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

export default function WelcomePage(props) {
  return (
    <div className="page-welcome">
      <FontAwesomeIcon size="6x" icon={faLaptop} className="mb-3" />
      <h2>Dev Team Hiring Tool</h2>
      <p>Helping you find the best software engineer for the job</p>
      <Button variant="primary" onClick={props.nextPage}>Enter</Button>
    </div>
  );
}