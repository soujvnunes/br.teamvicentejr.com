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
  align-items: center;
`;

const LineHeaderInfo = styled.div`
  flex: auto;
  padding: calc(var(--ds) * 2px);

  ${down("md")} {
    padding: calc(var(--ds) * 1px);
  }
`;

const LineHeaderInfoHeading = styled(Typography)`
  margin-left: calc(var(--ds) * 1px);
`;

const LineHeaderButton = styled(Button)`
  margin-right: calc(var(--ds) * 2px);
`;

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
  let { children, primary, secondary, ...other } = props;

  const handleExpand = () => {
    if (expand) setState({ ...state, expand: false });
    else setState({ ...state, expand: true });
  };

  return (
    <LineRoot {...other}>
      <LineHeader>
        <LineHeaderInfo>
          <LineHeaderInfoHeading variant={"heading"}>
            {primary}
          </LineHeaderInfoHeading>
          <Typography variant={"subject"}>{secondary}</Typography>
        </LineHeaderInfo>
        <Skew variant={"outlined"} />
        <LineHeaderButton
          skew={false}
          icon={expand ? "remove" : "add"}
          onClick={handleExpand}
          variant={"text"}
        />
      </LineHeader>
      <LineContent expand={expand}>{children}</LineContent>
    </LineRoot>
  );
}

Line.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired
};
