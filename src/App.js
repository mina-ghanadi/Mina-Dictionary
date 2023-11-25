import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search.js";

export default function App() {
  const refresh = () => window.location.reload(true);
  return (
    <div className="App">
      <div className="header">
        <img
          className="icon"
          src="https://s31.picofile.com/file/8469722726/icon.png"
          width="45px"
          alt="icon"
        />
        <span className="title">
          <strong>
            <a href="./" onClick={refresh}>
              Mina Dictionary
            </a>
          </strong>
        </span>
      </div>
      <main id="hi" className="hi">
        <Search />
      </main>

      <footer>
        This project is coded by 💓
        <a
          href="https://fi.linkedin.com/in/mina-ghanadi"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Mina Ghanadi </strong>
        </a>
        and it is{" "}
        <a
          href="https://github.com/mina-ghanadi/Mina-Dictionary"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced <i className="fa-brands fa-github fa-lg "></i>
        </a>
      </footer>
    </div>
  );
}
