import React from "react";
import Typography from "../Typography";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const HistoryRoot = styled.div`
  display: flex;
  flex-direction: row;
  margin: calc(var(--spacing) * 2px) 0;

  ${down("md")} {
    flex-direction: column;
  }
`;

const HistoryImage = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: calc(var(--spacing) * -6px);
  min-width: 50%;
  min-height: calc(var(--spacing) * 25px);
  background-image: url(${props => props.image});
`;

const HistoryText = styled(Typography)`
  text-align: justify;
  margin-left: calc(var(--spacing) * 2px);

  ${down("md")} {
    margin-left: 0;
  }
`;

export default function History(props) {
  let { image, title, text, orientation } = props;

  return (
    <HistoryRoot orientation={orientation}>
      {image && <HistoryImage image={image} title={title} />}
      <HistoryText variant={"paragraph"}>{text}</HistoryText>
    </HistoryRoot>
  );
}
