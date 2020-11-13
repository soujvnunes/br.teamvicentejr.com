const Coloration = (ground, color) => {
  return `
      ${(ground === "back" && "background") ||
        (ground === "fore" && "color")}: hsla(${color}, 1);
        
      --cc: calc((${(color === "var(--cpl)" && "var(--cpLl)") ||
        (color === "var(--cpb)" && "var(--cpL)") ||
        (color === "var(--cpd)" && "var(--cpLd)") ||
        (color === "var(--csl)" && "var(--csLl)") ||
        (color === "var(--csb)" && "var(--csL)") ||
        (color === "var(--csd)" && "var(--csLd)")} - var(--ct)) * -100);
        
      ${(ground === "back" && "color") ||
        (ground === "fore" && "background")}: hsla(0, 0%, var(--cc), 0.5);
    `;
};

export default Coloration;
