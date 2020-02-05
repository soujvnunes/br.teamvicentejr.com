import React, { useState } from "react";
import Skew from "../Skew";
import Button from "../Button";
import Typography from "../Typography";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const LineHeader = styled.header`
  display: flex;
  width: 100%;
  transition: var(--a);
  position: relative;
  min-height: calc(var(--ds) * 10px);
  align-items: center;
  padding: 0 calc(var(--ds) * 2px);
`;

const LineHeaderInfo = styled.div`
  flex: auto;
`;

const LineHeaderInfoHeading = styled(Typography)`
  margin-left: calc(var(--ds) * 1px);
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

export default function Line({
  children,
  primary,
  secondary,
  image,
  ...other
}) {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    if (expand) setExpand(false);
    else setExpand(true);
  };

  return (
    <li {...other}>
      <LineHeader onClick={handleExpand}>
        <LineHeaderInfo>
          <LineHeaderInfoHeading variant={"heading"}>
            {primary}
          </LineHeaderInfoHeading>
          <Typography variant={"subject"}>{secondary}</Typography>
        </LineHeaderInfo>
        <Skew variant={"outlined"} />
        <Button
          skew={true}
          icon={expand ? "remove" : "add"}
          onClick={handleExpand}
          variant={"contained"}
        />
      </LineHeader>
      <LineContent expand={expand}>{children}</LineContent>
    </li>
  );
}

Line.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired
};
