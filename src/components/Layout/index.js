import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "./Layout.scss";

export default class Layout extends Component {
  render() {
    const params = {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };

    return (
      <div className="Layout">
        <header className="app-title">
          <div className="app-logo">Aladdin Magdy</div>
        </header>
        <main className="Layout__preview">
          <h1 className="preview__title">Experimentation</h1>
          <Swiper {...params}>
            <img src="https://i.imgur.com/ijqQiKs.jpg" alt="" />
            <img src="https://i.imgur.com/d6p8iYv.jpg" alt="" />
          </Swiper>
        </main>
      </div>
    );
  }
}
