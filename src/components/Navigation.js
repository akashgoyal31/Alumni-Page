import React from "react";
import './Navigation.css';

const img = "https://www.quizzersclubmanit.in/Assets/logo.png";

export default function Navigation() {
  return (
    <>
      <div>
        <header>

          <section>
            <img src={img} alt="#" id="logo" />
            <a href="#" id="club-name" target="_blank">
              Quizzers' <br /> <h6 >Club Manit</h6>
            </a>

            <label htmlFor="toggle-1" className="toggle-menu">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </label>
            <input type="checkbox" id="toggle-1" />

            <nav id="navigation">
              <ul>
                <li>
                  <a href="/logo">
                    <i className="icon-home"></i>Home
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <i className="icon-user"></i>About
                  </a>
                </li>
                <li>
                  <a href="/out team">
                    <i className="icon-thumbs-up-alt"></i>Our Team
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <i className="icon-phone"></i>Contact
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </header>

      </div>

      <div className="page">
        <div class="bg"></div>

        <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
        </div>
        <h2>
          <span>A</span>
          <span>L</span>
          <span>U</span>
          <span>M</span>
          <span>N</span>
          <span>I</span>

        </h2>
        {/* <div className="context">
          <h2>Alumni</h2>
        </div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>*/}

      </div>

    </>
  );
}