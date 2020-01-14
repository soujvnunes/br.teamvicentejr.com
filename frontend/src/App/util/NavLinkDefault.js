import { css } from "styled-components";

export const NavLinkDefault = css`
  color: rgba(var(--ctl), 1);
  opacity: 1;
  transition: var(--a);

  &:hover {
    opacity: 0.75;
  }

  &.active {
    color: rgba(var(--csb), 1);
  }
`;
