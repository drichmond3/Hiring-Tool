import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer">

      <span>Created By: Darrien Richmond</span>
      {props.publishDate &&
        (<div>
          <time date={props.publishDate.toISOString()}>Published {props.publishDate.toLocaleDateString()}</time>
        </div>)}
    </div>
  )
}