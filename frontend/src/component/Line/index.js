import React, { useState } from "react";
import Skew from "../Skew";
import Button from "../Button";
import Typography from "../Typography";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";

const LineRoot = styled.li``;

const LineHeader = styled.header`
  display: flex;
  width: 100%;
  transition: var(--transition);
  position: relative;
  align-items: center;
`;

const LineHeaderInfo = styled.div`
  flex: auto;
  padding: calc(var(--spacing) * 2px);

  ${down("md")} {
    padding: calc(var(--spacing) * 1px);
  }
`;

const LineHeaderInfoHeading = styled(Typography)`
  margin-left: calc(var(--spacing) * 1px);
`;

const LineHeaderInfoSubject = styled(Typography)`
  margin-top: 1rem;
`;

const LineHeaderButton = styled(Button)`
  margin-right: calc(var(--spacing) * 2px);
`;

const LineContent = styled.div`
  overflow: hidden;
  max-height: 0;
  transition: var(--transition);

  ${props =>
    props.expand &&
    css`
      max-height: calc(var(--spacing) * 100px);
    `}
`;

export default function Line(props) {
  const [state, setState] = useState({
    expand: false
  });
  let { expand } = state;
  let { className, children, primary, secondary } = props;

  const handleExpand = () => {
    if (expand) setState({ ...state, expand: false });
    else setState({ ...state, expand: true });
  };

  return (
    <LineRoot className={className}>
      <LineHeader>
        <LineHeaderInfo>
          <LineHeaderInfoHeading variant={"heading"}>
            {primary}
          </LineHeaderInfoHeading>
          <LineHeaderInfoSubject variant={"subject"}>
            {secondary}
          </LineHeaderInfoSubject>
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
