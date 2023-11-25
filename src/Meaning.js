import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Meaning(props) {
  if (props.meaning.partOfSpeech) {
    return (
      <div className="result-body meaning" id="meaning">
        <div className="part-of-speach">
          <em>{props.meaning.partOfSpeech}</em>
        </div>
        <div className="definition">
          <strong>{props.meaning.definition}</strong>
        </div>
        <div className="example">
          <em>{props.meaning.example}</em>
        </div>
      </div>
    );
  } else return null;
}
