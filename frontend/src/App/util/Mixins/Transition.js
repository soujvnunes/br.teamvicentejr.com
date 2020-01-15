export const transition = properties => {
  return `
    transition-duration: var(--ad);
    transition-property: ${properties};
    transition-timing-function: var(--af);
  `;
};
