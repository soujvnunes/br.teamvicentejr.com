import { css } from "styled-components";

export const NavLinkDefault = css`
  color: hsla(var(--ctl), 1);
  opacity: 1;
  transition: var(--a);

  &:hover {
    opacity: 0.75;
  }

  &.active {
    color: hsla(var(--csb), 1);
  }
`;
