import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Synonyms(props) {
  if (props.meaning.synonyms) {
    return (
      <span>
        {" "}
        ^-^
        {props.meaning.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <span className="synonyme"> {synonym} ,</span>
            </span>
          );
        })}
      </span>
    );
  } else return null;
}
