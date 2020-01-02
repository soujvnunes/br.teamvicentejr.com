import React from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../../library/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import Main from "../../Main";
import Button from "../../Button";

export default props => {
  const classes = {
    root: [classNames("teachers")]
  };

  let { root } = classes;

  return (
    <Main className={root}>
      <Carousel
        className={"teachers-carousel"}
        centerMode={true}
        centerSlidePercentage={50}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
      >
        {data.teachers.map((data, i) => {
          return (
            <div key={i} className={"teachers-carousel-item"}>
              <img
                src={data.url}
                alt={data.name}
                className={"teachers-carousel-item-image"}
              />
              <Button
                label={data.name}
                icon={"view"}
                type={"normal"}
                /*url={data.url}*/
                className={"teachers-carousel-item-button"}
              />
            </div>
          );
        })}
      </Carousel>
    </Main>
  );
};
