import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Antonyms(props) {
  if (props.meaning.antonyms) {
    return (
      <span>
        {" "}
        ^-^
        {props.meaning.antonyms.map(function (synonym, index) {
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
