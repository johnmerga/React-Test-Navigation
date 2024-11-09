import React, { useState } from "react";
import "./index.css";

const tabsData = [
  { key: "home", page: "HOME PAGE" },
  { key: "news", page: "NEWS PAGE" },
  { key: "contact", page: "CONTACT PAGE" },
  { key: "about", page: "ABOUT PAGE" },
];

export default function NavBar() {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div
        className="layout-row justify-content-around align-items-center mt-20 links"
        data-testid="navigation-tabs"
      >
        <button className="button">Home</button>
        <button className="button">News</button>
        <button className="button">Contact</button>
        <button className="button">About</button>
      </div>

      <div className="card w-20 ma-0 mt-20">
        <section className="card-text" data-testid="tab-content">
          <span></span>
        </section>
      </div>
    </div>
  );
}
