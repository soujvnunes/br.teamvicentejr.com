import React from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "./feed";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Main from "../Main";
import Typography from "../Typography";
import Wrapper from "../Wrapper";
import Chip from "../Chip";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const TeachersRoot = styled(Main)`
  background-color: hsla(var(--ctd), 1);
  padding-top: calc(var(--ds) * 14px);
  margin-bottom: 0;

  ${down("tablet")} {
    padding-top: calc(var(--ds) * 9px);
  }
`;

const TeachersCarousel = styled(Carousel)`
  width: 100%;

  .carousel {
    &.carousel-slider {
      & .slide {
        background: transparent;
      }
    }

    & .control-prev {
      &.control-arrow {
        left: calc(var(--ds) * 1.5px);
      }
    }

    & .control-next {
      &.control-arrow {
        right: calc(var(--ds) * 1.5px);
      }
    }

    & .control-dots {
      position: inherit;
      bottom: inherit;

      & .dot {
        outline: 0;
        box-shadow: none;
        transition: var(--a);
        background-color: hsla(var(--ctb), 1);
        opacity: 1;
        transform: skewX(var(--stsX)) skewY(0deg);
        border-radius: calc(var(--ds) * 0.25px);

        &.selected {
          background-color: hsla(var(--cpb), 1);
        }
      }
    }
  }
`;

const TeachersCarouselItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const TeachersCarouselItemImage = styled.img`
  width: inherit !important;
  height: calc(100vh - 214px);

  ${down("tablet")} {
    height: calc(100vh - 188px);
  }
`;

const TeachersCarouselItemInfo = styled(Wrapper)`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: calc(var(--ds) * 16px) calc(var(--ds) * 2px) calc(var(--ds) * 2px)
    calc(var(--ds) * 2px);
  box-shadow: inset 0 calc(var(--ds) * -26px) calc(var(--ds) * 8px)
    calc(var(--ds) * -8px) hsla(var(--ctd), 0.75);

  ${down("tablet")} {
    box-shadow: inset 0 calc(var(--ds) * -24px) calc(var(--ds) * 8px)
      calc(var(--ds) * -8px) hsla(var(--ctd), 0.75);
  }
`;

export default function Teachers() {
  return (
    <TeachersRoot>
      <TeachersCarousel showThumbs={false} showStatus={false}>
        {data.map((data, i) => {
          return (
            <TeachersCarouselItem key={i}>
              <TeachersCarouselItemImage src={data.image} alt={data.name} />
              <TeachersCarouselItemInfo>
                <Typography variant={"title"}>{data.name}</Typography>
                {data.url && (
                  <div>
                    <Chip
                      key={i}
                      primary={data.social}
                      href={data.url}
                      icon={"instagram"}
                    />
                  </div>
                )}
              </TeachersCarouselItemInfo>
            </TeachersCarouselItem>
          );
        })}
      </TeachersCarousel>
    </TeachersRoot>
  );
}
