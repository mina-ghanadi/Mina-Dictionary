import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TodayWord() {
  return (
    <div className="today-word">
      <div className="today-word-heading">
        <div>Today's word</div>
        <div>Nov 19th 2023</div>
      </div>
      <div className="today-word-body">
        <div>Fantastic</div>
        <div>
          <a href="#">
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </a>
        </div>
      </div>
    </div>
  );
}
