import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Image(props) {
  console.log(props.image);
  return (
    <div className="row">
      <div className="col-4">
        <a href={props.image.src.original} target="_blank" rel="noreferrer">
          <img
            src={props.image.src.original}
            className="imgs"
            alt={props.image.photographer}
          />
        </a>
      </div>
    </div>
  );
}
