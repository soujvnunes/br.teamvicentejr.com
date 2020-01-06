import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../../library/teachers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import Main from "../../Main";
import Typography from "../../Typography";
import Skew from "../../Skew";
import { useMediaQuery } from "react-responsive";
import Line from "../../Line";

export default props => {
  const [state, setState] = useState({
    open: false
  });

  let { open } = state;

  const classes = {
    root: [classNames("teachers")]
  };

  const isTablet = useMediaQuery({ maxDeviceWidth: 960 });

  function handleOpen() {
    if (open) setState({ ...state, open: false });
    else setState({ ...state, open: true });
  }

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
              {isTablet ? (
                <Line key={i} primary={data.name} icon={"view"}>
                  <Typography
                    subject
                    className={"teachers-carousel-item-info-subject"}
                  >
                    {data.title}
                  </Typography>
                  {data.description && (
                    <Typography paragraph>{data.description}</Typography>
                  )}
                </Line>
              ) : (
                <div className={"teachers-carousel-item-info"}>
                  <Typography
                    title
                    className={"teachers-carousel-item-info-title"}
                  >
                    {data.name}
                    <Skew
                      contained
                      className={"teachers-carousel-item-info-title-skew"}
                    />
                  </Typography>
                  <Typography
                    subject
                    className={"teachers-carousel-item-info-subject"}
                  >
                    {data.title}
                  </Typography>
                  {data.description && (
                    <Typography paragraph>{data.description}</Typography>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </Carousel>
    </Main>
  );
};
