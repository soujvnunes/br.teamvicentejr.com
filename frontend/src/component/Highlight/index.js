import React from "react";
import classNames from "classnames";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../utility/data";

export default props => {
  let { className, activeCarousel } = props;

  const classes = { root: [classNames("Highlight", className)] };

  let { root } = classes;

  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      className={root}
      autoPlay={activeCarousel}
    >
      {data.teachers.map((data, i) => {
        return (
          <div key={i}>
            <img src={data.url} alt={data.name} />
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
