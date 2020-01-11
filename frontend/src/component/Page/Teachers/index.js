import React from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../../lib/teachers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import Main from "../../Main";
import Typography from "../../Typography";
import Wrapper from "../../Wrapper";
import Chip from "../../Chip";

export default props => {
  const classes = {
    root: [classNames("teachers")]
  };

  return (
    <Main className={classes.root}>
      <Carousel
        className={"teachers-carousel"}
        showThumbs={false}
        showStatus={false}
      >
        {data.br.map((data, i) => {
          return (
            <div key={i} className={"teachers-carousel-item"}>
              <img
                src={data.url}
                alt={data.name}
                className={"teachers-carousel-item-image"}
              />
              <Wrapper className={"teachers-carousel-item-info"}>
                {data.name && (
                  <Typography
                    title
                    className={"teachers-carousel-item-info-title"}
                  >
                    {data.name}
                  </Typography>
                )}
                <div>
                  {data.titles.map((title, i) => (
                    <Chip key={i} primary={title} />
                  ))}
                </div>
                {data.description && (
                  <Typography
                    paragraph
                    className={"teachers-carousel-item-info-paragraph"}
                  >
                    {data.description}
                  </Typography>
                )}
              </Wrapper>
            </div>
          );
        })}
      </Carousel>
    </Main>
  );
};
