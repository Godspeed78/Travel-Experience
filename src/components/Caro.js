import React, { Component } from "react";
import useState from "react";
import slide1 from "./images/slider/slider2.jpg";
import fli1 from "./images/serb.jpg"

import Carousel from "react-bootstrap/Carousel";
import mySlide1 from "./images/travel/slide1.jpg"
import mySlide2 from "./images/travel/slide2.png"
import mySlide3 from "./images/travel/slide3.jpg"


class ControlledCarousel extends Component {
  state = {};

  render() {
    return (
      <>
        <section class="swiper-banner">
          <Carousel interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100 land-slide"
                src={mySlide1}
                alt="First slide"
                
              />

              <Carousel.Caption className="caro-caption">
                <div
                  class="swiper-content"
                  data-animation="animated fadeInDown"
                >
                  <h2 style={{ color: "skyblue" }}>
                    Book a ticket & Just Leave
                  </h2>
                  <h1 style={{ color: "white"}}>
                    <b>SEARCH YOUR NEXT DESTINATION</b>
                  </h1>
                  <a href="tour-detail.html" class="btn-blue btn-red">
                    View Our Tour
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 land-slide2"
                src={mySlide2}
                alt="Third slide"
                height="600px"
              />

              {/* <Carousel.Caption className="caro-caption">
                <div
                  class="swiper-content"
                  data-animation="animated fadeInDown"
                >
                  <h2 style={{ color: "skyblue" }}>
                    Book a ticket & Just Leave
                  </h2>
                  <h1 style={{ color: "white" }}>
                    <b>SEARCH YOUR NEXT DESTINATION</b>
                  </h1>
                  <a href="tour-detail.html" class="btn-blue btn-red">
                    View Our Tour
                  </a>
                </div>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 land-slide2"
                src={mySlide3}
                alt="Third slide"
                height="600px"
              />

              {/* <Carousel.Caption className="caro-caption">
                <div
                  class="swiper-content"
                  data-animation="animated fadeInDown"
                >
                  <h2 style={{ color: "skyblue" }}>
                    Book a ticket & Just Leave
                  </h2>
                  <h1 style={{ color: "white" }}>
                    <b>SEARCH YOUR NEXT DESTINATION</b>
                  </h1>
                  <a href="tour-detail.html" class="btn-blue btn-red">
                    View Our Tour
                  </a>
                </div>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </section>
      </>
    );
  }
}

export default ControlledCarousel;
