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
      paragraph={[...new Array(1)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join("\n")}
      className={"Description-paragraph"}
    />
    <Button label={"Conheça"} />
  </section>
);
