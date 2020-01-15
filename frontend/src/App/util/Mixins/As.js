export default function As(element) {
  if (element === "a")
    return {
      as: `${element}`,
      target: "_blank",
      rel: "noopener noreferrer"
    };
  else
    return {
      as: `${element}`
    };
}
