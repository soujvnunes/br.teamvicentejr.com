import React from "react";
import Typography from "../Typography";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import PropTypes from "prop-types";

const HistoryRoot = styled.div`
  display: flex;
  flex-direction: row;
  margin: calc(var(--spacing) * 2px) 0;

  &:first-child {
    margin: 0;
  }

  &:last-child {
    margin: 0;
  }

  ${down("md")} {
    flex-direction: column;
  }
`;

const HistoryImage = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  min-width: 50%;
  min-height: calc(var(--spacing) * 43px);
  background-image: url(${props => props.image});
  border-radius: var(--radius);
`;

const HistoryText = styled(Typography)`
  text-align: justify;
  margin: 0 0 0 calc(var(--spacing) * 2px);

  ${down("md")} {
    margin: calc(var(--spacing) * 2px) 0 0 0;
  }
`;

export default function History(props) {
  let { image, title, text, ...other } = props;

  return (
    <HistoryRoot {...other}>
      {image && <HistoryImage image={image} title={title} />}
      <HistoryText variant={"paragraph"}>{text}</HistoryText>
    </HistoryRoot>
  );
}

History.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};
