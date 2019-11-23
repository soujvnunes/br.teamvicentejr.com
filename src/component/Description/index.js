import React from "react";
import Typography from "../Typography";
import Button from "../Button";

export default props => (
  <section className={"Description"}>
    <Typography title={"Vicente Júnior"} className={"Description-title"} />
    <Typography
      subject={"Brazilian Jiu-jítsu"}
      className={"Description-subject"}
    />
    <Typography
      paragraph={[...new Array(4)]
        .map(() => `Cras mattis consectetur purus sit amet fermentum.`)
        .join("\n")}
      className={"Description-paragraph"}
    />
    <Button
      id={"events"}
      className={"Description-button"}
      label={"Eventos"}
      icon={"chevronRight"}
      type={"normal"}
    />
  </section>
);
