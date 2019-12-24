import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../utility/data";

export default props => {
  let { className, activeCarousel } = props;

  return (
    <Carousel
      infiniteLoop
      showStatus={!!activeCarousel}
      showIndicators={!!activeCarousel}
      className={`Highlight ${className ? className : null}`}
      autoPlay={activeCarousel}
    >
      {data.teachers.map((data, i) => {
        return (
          <div key={i}>
            <img
              src={data.url}
              alt={data.name}
              className={"Highlight-carousel-image"}
            />
            <p className="legend">
              {data.name}
              {data.title}
            </p>
          </div>
        );
      })}
    </Carousel>
  );
};
