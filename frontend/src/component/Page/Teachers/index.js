import React from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../../library/teachers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import Main from "../../Main";
import Typography from "../../Typography";
import Skew from "../../Skew";

export default props => {
  const classes = {
    root: [classNames("teachers")]
  };

  return (
    <Main className={classes.root}>
      <Carousel
        className={"teachers-carousel"}
        centerMode={true}
        centerSlidePercentage={50}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
      >
        {data.br.map((data, i) => {
          return (
            <div key={i} className={"teachers-carousel-item"}>
              <img
                src={data.url}
                alt={data.name}
                className={"teachers-carousel-item-image"}
              />
              <div className={"teachers-carousel-item-info"}>
                {data.name && (
                  <Typography
                    title
                    className={"teachers-carousel-item-info-title"}
                  >
                    {data.name}
                    <Skew outline={"bottom"} />
                  </Typography>
                )}
                {data.title && (
                  <Typography
                    subject
                    className={"teachers-carousel-item-info-subject"}
                  >
                    {data.title}
                  </Typography>
                )}
                {data.description && (
                  <Typography
                    paragraph
                    className={"teachers-carousel-item-info-paragraph"}
                  >
                    {data.description}
                  </Typography>
                )}
              </div>
            </div>
          );
        })}
      </Carousel>
    </Main>
  );
};
