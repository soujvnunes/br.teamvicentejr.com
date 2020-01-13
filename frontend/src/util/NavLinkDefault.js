import { css } from "styled-components";

export const NavLinkDefault = css`
  color: rgba(var(--color-tertiary-light), 1);
  opacity: 1;
  transition: var(--transition);

  &:hover {
    opacity: 0.75;
  }

  &.active {
    color: rgba(var(--color-secondary-base), 1);
  }
`;
