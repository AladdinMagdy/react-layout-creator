import React, { Component } from "react";
import Swiper from "react-id-swiper";

import "./Layout.scss";

export default class Layout extends Component {
  render() {
    const { text, style } = this.props.pageTitle;
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
        1440: {
          slidesPerView: 5,
          spaceBetween: 50
        },
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
          <h1 className="preview__title" style={{ ...style }}>
            {text}
          </h1>
          <Swiper {...params} rebuildOnUpdate shouldSwiperUpdate>
            {this.props.carouselUrls.map(el => (
              <img key={el} src={el} alt="carousel slide" />
            ))}
          </Swiper>
          {this.props.ctaButtons.map((el, i) => {
            const { text: ctaText, ...ctaStyle } = el;
            return (
              <button
                key={i}
                className="preview__button"
                style={{ ...ctaStyle }}
              >
                {ctaText}
              </button>
            );
          })}
        </main>
      </div>
    );
  }
}
