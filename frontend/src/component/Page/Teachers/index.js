import React from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../../lib/teachers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Main from "../../Main";
import Typography from "../../Typography";
import Wrapper from "../../Wrapper";
import Chip from "../../Chip";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const TeachersRoot = styled(Main)`
  padding-top: calc(var(--spacing) * 14px);
  margin-bottom: 0;

  ${down("md")} {
    padding-top: calc(var(--spacing) * 9px);
  }
`;

const TeachersCarousel = styled(Carousel)`
  width: 100%;
`;

const TeachersCarouselItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const TeachersCarouselItemImage = styled.img`
  width: inherit !important;
  height: calc(100vh - 156px);

  ${down("md")} {
    height: calc(100vh - 182px);
  }
`;

const TeachersCarouselItemInfo = styled(Wrapper)`
  height: calc(100vh - 150px - 50%);
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: calc(var(--spacing) * 16px) calc(var(--spacing) * 2px) 0
    calc(var(--spacing) * 2px);
  text-align: center;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(var(--color-black), 0.5) 50%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(var(--color-black), 0.5) 50%
  );

  ${down("md")} {
    height: calc(100vh - 182px - 50%);
  }

  ${down("sm")} {
    padding-top: calc(var(--spacing) * 8px);
  }
`;

export default props => {
  return (
    <TeachersRoot className={"teachers"}>
      <TeachersCarousel
        showThumbs={false}
        showStatus={false}
        className={"teachers-carousel"}
      >
        {data.br.map((data, i) => {
          return (
            <TeachersCarouselItem key={i}>
              <TeachersCarouselItemImage src={data.url} alt={data.name} />
              <TeachersCarouselItemInfo>
                {data.name && (
                  <Typography variant={"heading"}>{data.name}</Typography>
                )}
                <div>
                  {data.titles.map((title, i) => (
                    <Chip key={i} primary={title} />
                  ))}
                </div>
                {data.description && (
                  <Typography>{data.description}</Typography>
                )}
              </TeachersCarouselItemInfo>
            </TeachersCarouselItem>
          );
        })}
      </TeachersCarousel>
    </TeachersRoot>
  );
};
