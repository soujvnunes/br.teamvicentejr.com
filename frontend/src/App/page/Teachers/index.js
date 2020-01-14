import React from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../lib/page/teachers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Main from "../../component/Main";
import Typography from "../../component/Typography";
import Wrapper from "../../component/Wrapper";
import Chip from "../../component/Chip";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const TeachersRoot = styled(Main)`
  background-color: rgba(var(--cqd), 1);
  padding-top: calc(var(--ds) * 14px);
  margin-bottom: 0;

  ${down("md")} {
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
        background-color: rgba(var(--ctb), 1);
        opacity: 1;
        transform: skewX(var(--stsX)) skewY(0deg);
        border-radius: calc(var(--ds) * 0.25px);

        &.selected {
          background-color: rgba(var(--cpb), 1);
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
  padding: calc(var(--ds) * 16px) calc(var(--ds) * 2px) 0 calc(var(--ds) * 2px);
  text-align: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(var(--cqd), 0.75) 50%
  );

  ${down("md")} {
    height: calc(100vh - 182px - 50%);
  }

  ${down("sm")} {
    padding-top: calc(var(--ds) * 8px);
  }
`;

const TeachersCarouselItemInfoChip = styled(Chip)`
  margin: 0 calc(var(--ds) * 1px);

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default function Teachers() {
  return (
    <TeachersRoot>
      <TeachersCarousel showThumbs={false} showStatus={false}>
        {data.map((data, i) => {
          return (
            <TeachersCarouselItem key={i}>
              <TeachersCarouselItemImage src={data.url} alt={data.name} />
              <TeachersCarouselItemInfo>
                {data.name && (
                  <Typography variant={"title"}>{data.name}</Typography>
                )}
                <div>
                  {data.titles.map((title, i) => (
                    <TeachersCarouselItemInfoChip key={i} primary={title} />
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
}
