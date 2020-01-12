import { css } from "styled-components";

export const NavLinkDefault = css`
  color: var(--color-tertiary-light);
  opacity: 1;
  transition: var(--transition);

  &:hover {
    opacity: 0.75;
  }

  &.active {
    color: var(--color-secondary-base);
  }
`;
