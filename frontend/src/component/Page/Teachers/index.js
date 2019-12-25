import React from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../../library/data";
import Main from "../../../component/Main";
import Typography from "../../Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default props => {
  return (
    <Main className={"teachers"}>
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
              <div className={"teachers-carousel-item-legend"}>
                <Typography title>{data.name}</Typography>
                <Typography subject>{data.title}</Typography>
              </div>
            </div>
          );
        })}
      </Carousel>
    </Main>
  );
};
