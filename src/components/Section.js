import React from "react";
import "../Colors.css";
import "./Section.css";

function Section({ name, description, imgUrl, url }) {
  return (
    <a href={url} className="section-container">
      <div className="section-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <img src={imgUrl} alt="Not found."></img>
    </a>
  );
}

export default Section;
