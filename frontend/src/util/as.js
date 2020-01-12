export default function as(element) {
  return {
    as: `${element}`,
    target: `${element === "a" && "_blank"}`,
    rel: `${element === "a" && "noopener noreferrer"}`
  };
}
