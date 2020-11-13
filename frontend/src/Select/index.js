import React from "react";
import Skew from "../Skew";
import Icon from "../Icon";
import styled from "styled-components";
import InputBase from "../util/Mixins/InputBase";
import PropTypes from "prop-types";

const SelectRoot = styled.label`
  position: relative;
  padding: calc(var(--ds) * 1px) 0;
  display: flex;
  align-items: center;
`;

const SelectInput = styled.select`
  ${InputBase};

  position: inherit;
  font-weight: bold;
  width: 100%;
  padding-right: calc(var(--ds) * 5px);
`;

const SelectInputOption = styled.option`
  background-color: hsla(var(--ctb), 1);
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 0;
`;

export default function Select({ option, id, onChange, value, ...other }) {
  return (
    <SelectRoot {...other} htmlFor={id}>
      <Skew variant={"underlined"} />
      <SelectIcon name={"chevron"} />
      <SelectInput id={id} onChange={onChange} value={value}>
        {option.map((option, i) => (
          <SelectInputOption
            key={i}
            label={option.label}
            value={option.value}
          />
        ))}
      </SelectInput>
    </SelectRoot>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  option: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
