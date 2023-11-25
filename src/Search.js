import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
import Conclusion from "./Conclusion.js";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState("");
  let [images, setImages] = useState("");
  let d = new Date();
  let date = d.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let theDate = `${day} ${date} ${month}`;
  console.log(month);

  function getPicture(response) {
    setImages(response.data);
  }
  function result(response) {
    setResults(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let hi = document.querySelector("#hi");
    hi.classList.remove("hi");
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=7513b452c09o45a7101tdb174f808e29`;
    axios.get(url).then(result);
    let urls = `https://api.shecodes.io/images/v1/search?query=${word}&key=7513b452c09o45a7101tdb174f808e29`;
    axios.get(urls).then(getPicture);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  function todayWordSubmit(event) {
    event.preventDefault();
    let hi = document.querySelector("#hi");
    hi.classList.remove("hi");
    setWord(" ");
    let url = `https://api.shecodes.io/dictionary/v1/define?word=fantastic&key=7513b452c09o45a7101tdb174f808e29`;
    axios.get(url).then(result);
    let urls = `https://api.shecodes.io/images/v1/search?query=fantastic&key=7513b452c09o45a7101tdb174f808e29`;
    axios.get(urls).then(getPicture);
  }

  return (
    <div>
      <div className="today-word">
        <div className="today-word-heading">
          <div>Today's word</div>
          <div>{theDate}</div>
        </div>
        <div className="today-word-body">
          <div>Fantastic</div>
          <div>
            <a href="#" onClick={todayWordSubmit}>
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="Search-box">
        <span className="input-all">
          <form onSubmit={handleSubmit} id="form">
            <span className="material-symbols-outlined">search</span>
            <input
              className="Search-input"
              type="search"
              placeholder="Type an English word"
              size="50"
              onChange={updateWord}
            />
            <span className="material-symbols-outlined extra-icon">
              keyboard
            </span>
            <span className="material-symbols-outlined extra-icon">mic</span>
          </form>
        </span>
      </div>
      <Conclusion value={results} images={images} />
    </div>
  );
}
