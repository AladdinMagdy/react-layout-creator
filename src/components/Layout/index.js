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
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    };

    return (
      <div className="Layout" id="Layout">
        <main className="Layout__preview">
          <h1 className="preview__title">Experimentation</h1>
          <Swiper {...params}>
            <img src="https://i.imgur.com/ijqQiKs.jpg" alt="" />
            <img src="https://i.imgur.com/d6p8iYv.jpg" alt="" />
            <img src="https://i.imgur.com/d6p8iYv.jpg" alt="" />
            <img src="https://i.imgur.com/d6p8iYv.jpg" alt="" />
            <img src="https://i.imgur.com/d6p8iYv.jpg" alt="" />
          </Swiper>
        </main>
      </div>
    );
  }
}
