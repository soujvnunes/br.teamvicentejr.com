import css from "styled-components";

export default function Transition(properties) {
  css`
    transition-duration: var(--ad);
    transition-property: ${properties};
    transition-timing-function: var(--af);
  `;
}
