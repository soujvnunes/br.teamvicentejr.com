import React, { useState } from "react";
import Skew from "../Skew";
import Button from "../Button";
import Typography from "../Typography";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";
import PropTypes from "prop-types";

const LineRoot = styled.li``;

const LineHeader = styled.header`
  display: flex;
  width: 100%;
  transition: var(--a);
  position: relative;
  min-height: calc(var(--ds) * 10px);
  align-items: center;

  ${props =>
    props.image
      ? css`
          padding: 0 calc(var(--ds) * 2px) 0 0;
        `
      : css`
          padding: 0 calc(var(--ds) * 2px);
        `}
`;

const LineHeaderImage = styled.div`
  width: 50%;
  height: calc(var(--ds) * 20px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  clip-path: polygon(7% 10%, 100% 10%, 93% 90%, 0% 90%);

  ${down("sm")} {
    height: calc(var(--ds) * 10px);
    clip-path: polygon(11% 10%, 100% 10%, 93% 90%, 0% 90%);
  }
`;

const LineHeaderInfo = styled.div`
  flex: auto;
`;

const LineHeaderInfoHeading = styled(Typography)`
  margin-left: calc(var(--ds) * 1px);
`;

const LineHeaderButton = styled(Button)``;

const LineContent = styled.div`
  overflow: hidden;
  max-height: 0;
  transition: var(--a);

  ${props =>
    props.expand &&
    css`
      max-height: calc(var(--ds) * 100px);
    `}
`;

export default function Line(props) {
  const [state, setState] = useState({
    expand: false
  });

  let { expand } = state;
  let { children, primary, secondary, image, ...other } = props;

  const handleExpand = () => {
    if (expand) setState({ ...state, expand: false });
    else setState({ ...state, expand: true });
  };

  return (
    <LineRoot {...other}>
      <LineHeader image={image} onClick={handleExpand}>
        {image && <LineHeaderImage image={image} />}
        <LineHeaderInfo>
          <LineHeaderInfoHeading variant={"heading"}>
            {primary}
          </LineHeaderInfoHeading>
          <Typography variant={"subject"}>{secondary}</Typography>
        </LineHeaderInfo>
        <Skew variant={"outlined"} />
        <LineHeaderButton
          skew={true}
          icon={expand ? "remove" : "add"}
          onClick={handleExpand}
          variant={"contained"}
        />
      </LineHeader>
      <LineContent expand={expand}>{children}</LineContent>
    </LineRoot>
  );
}

Line.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired
};
