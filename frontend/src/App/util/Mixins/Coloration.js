import React, { useState } from "react";

export const coloration = (ground, color) => {
  const [state, setState] = useState({
    lightness: ""
  });

  let { lightness } = state;
  if (color === "var(--cpl)") return setState({ lightness: "var(--cpLl)" });
  if (color === "var(--cpb)") return setState({ lightness: "var(--cpL)" });
  if (color === "var(--cpd)") return setState({ lightness: "var(--cpLd)" });
  if (color === "var(--csl)") return setState({ lightness: "var(--csLl)" });
  if (color === "var(--csH)") return setState({ lightness: "var(--csL)" });
  if (color === "var(--csH)") return setState({ lightness: "var(--csLd)" });

  if (ground === "background") {
    return `
      background: ${color};
      --cc: calc((${lightness} - var(--ct)) * -100);
      color: hsla(0, 0%, var(--cc), 1);
    `;
  } else if (ground === "color") {
    return `
      color: ${color};
      --cc: calc((${lightness} - var(--ct)) * -100);
      background: hsla(0, 0%, var(--cc), 1);
    `;
  }
};
