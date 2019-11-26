import React from "react";
import Content from "../Content";
import Description from "../Description";
/*
import Footer from "../Footer";
*/
import LineSet from "../LineSet";
import Line from "../Line";
import classNames from "classnames";

export default props => {
  const className = {
    Events: [
      classNames("Events", {
        [`Events--${props.description}`]: props.description
      })
    ]
  };

  return (
    <React.Fragment>
      <Content>
        <Description
          title={"Vicente Júnior"}
          subtitle={"Brazilian Jiu-jítsu"}
          text={[...new Array(4)]
            .map(() => `Cras mattis consectetur purus sit amet fermentum.`)
            .join("\n")}
          action={props.event}
          actionLabel={"Eventos"}
          description={props.description}
        />
        <LineSet className={className.Events}>
          <Line />
          <Line />
          <Line />
          <Line />
        </LineSet>
      </Content>
      {/*<Footer />*/}
    </React.Fragment>
  );
};
