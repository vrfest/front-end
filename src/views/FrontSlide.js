import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
  Container
} from "mdbreact";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class FrontSlide extends Component {
  render() {
    return (
      <div className="front-slide">
      <Container className="container-fosc">
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <CarouselInner className="inner-fosc">
            <CarouselItem itemId="1" className="inner-fosc">
              <View className="big-card">
                <img
                  className="d-block w-100"
                  src="https://www.cabinplant.com/media/1238/danube-frigorifer.png"
                  alt="First slide"
                />
                <Mask overlay="black-light" />
              </View>
              {/* <CarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </CarouselCaption> */}
            </CarouselItem>
            <CarouselItem itemId="2" className="inner-fosc">
              <View className="big-card">
                <img
                  className="d-block w-100"
                  src="http://www.atyourservice-dmv.com/image/119389824.jpg"
                  alt="Second slide"
                />
                <Mask overlay="black-strong" />
              </View>
              {/* <CarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </CarouselCaption> */}
            </CarouselItem>
            <CarouselItem itemId="3" className="inner-fosc">
              <View className="big-card">
                <img
                  className="d-block w-100"
                  src="http://www.symarom.com.sg/wp-content/uploads/2016/06/SymaromDairy-Products-banner.jpg"
                  alt="Third slide"
                />
                <Mask overlay="black-slight" />
              </View>
              {/* <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption> */}
            </CarouselItem>
            <CarouselItem itemId="4" className="inner-fosc">
              <View className="big-card">
                <img
                  className="d-block w-100"
                  src="http://www.freshpoint.com/wp-content/uploads/banner-see-what-we-can-do1.jpg"
                  alt="Mattonit's item"
                />
                <Mask overlay="black-light" />
              </View>
              {/* <CarouselCaption>
                <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </CarouselCaption> */}
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
      </div>
    );
  }
}
