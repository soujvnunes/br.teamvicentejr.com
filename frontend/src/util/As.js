export default function As(element) {
  return {
    as: `${element}`,
    target: `${element === "a" ? "_blank" : null}`,
    rel: `${element === "a" ? "noopener noreferrer" : null}`
  };
}
