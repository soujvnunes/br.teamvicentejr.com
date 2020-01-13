import React from "react";
import Skew from "../Skew";
import Icon from "../Icon";
import styled from "styled-components";
import { InputBase } from "../../util/InputBase";

const SelectRoot = styled.section`
  position: relative;
  padding: calc(var(--spacing) * 1px) calc(var(--spacing) * 2px);
  display: flex;
  align-items: center;
`;

const SelectInput = styled.select`
  ${InputBase};

  position: inherit;
  font-weight: bold;
  width: 100%;
  padding-right: calc(var(--spacing) * 5px);
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: calc(var(--spacing) * 2px);
`;

export default function Select(props) {
  let { option, name, className, id, onChange, value } = props;

  return (
    <SelectRoot className={className} htmlFor={id}>
      <Skew variant={"outlined"} />
      <SelectIcon name={"chevronBottom"} />
      <SelectInput name={name} id={id} onChange={onChange} value={value}>
        {option.map((option, i) => (
          <option key={i} label={option.label} value={option.value} />
        ))}
      </SelectInput>
    </SelectRoot>
  );
}
