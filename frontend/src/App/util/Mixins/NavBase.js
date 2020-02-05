import { css } from "styled-components";

const NavBase = css`
  color: hsla(var(--ctl), 1);
  opacity: 1;
  transition: var(--a);

  &:hover {
    color: hsla(var(--ctl), 1);
  }

  &.active {
    color: hsla(var(--csb), 1);
  }
`;

export default NavBase;
