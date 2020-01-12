import { css } from "styled-components";

export const NavLink = css`
  color: var(--color-tertiary-light);
  opacity: 1;
  transition: var(--transition);

  &:hover {
    opacity: 0.5;
  }

  &.active {
    color: var(--color-secondary-base);
  }
`;
