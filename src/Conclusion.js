import "./styles.css";
import React from "react";
import Meaning from "./Meaning.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Synonyms from "./Synonyms.js";
import Antonyms from "./Antonyms.js";
import Image from "./Image.js";

export default function Conclusion(props) {
  if (props.value) {
    return (
      <div className="result-surronding">
        <div className="result-left">
          <ul className="list-all">
            <li className="list">
              <a href="#meaning">
                <span className="material-symbols-outlined">description</span>
                Meanings & Examples{" "}
              </a>{" "}
            </li>
            <li className="list">
              <a href="#synAnt">
                <span className="material-symbols-outlined">
                  compare_arrows
                </span>
                Synonyms & antonyms
              </a>
            </li>
            <li className="list">
              <a href="#picture">
                {" "}
                <span className="material-symbols-outlined">imagesmode</span>
                Pictures
              </a>
            </li>
          </ul>
        </div>

        <div className="result-right">
          <div className="result-heading">
            <div className="word">
              <strong>{props.value.word}</strong>
            </div>
            <div>
              <span className="fonetic">/ {props.value.phonetic} /</span>
              <img
                src="https://s30.picofile.com/file/8469725742/flag.png"
                className="america-flag"
                width="30px"
                alt="U.S.A flag"
              />
            </div>
          </div>
          <div className="headers" id="meaning">
            Meanings & Examples{" "}
          </div>
          {props.value.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
          <div className="headers" id="synAnt">
            Synonyms & antonyms:
          </div>
          <div className="result-body syn-ant">
            <div className="syn-icon">Synonyms:</div>
            {props.value.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Synonyms meaning={meaning} />
                </div>
              );
            })}
            <div className="ant-icon">Antonyms:</div>
            {props.value.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Antonyms meaning={meaning} />
                </div>
              );
            })}
          </div>
          <div className="headers" id="picture">
            Pictures
          </div>
          <div className="result-body picture">
            <div className="row">
              {props.images.photos.map(function (image, index) {
                return (
                  <div className="col-4">
                    <div key={index}>
                      <Image image={image} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
