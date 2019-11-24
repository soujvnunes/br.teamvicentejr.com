import React from "react";
import Content from "../Content";
import Description from "../Description";
import Footer from "../Footer";
import Highlight from "../Highlight";

export default props => {
  return (
    <React.Fragment>
      <Content>
        <Description
          title={"Professores"}
          actionLabel={"Conheça"}
          text={[...new Array(4)]
            .map(() => `Cras mattis consectetur purus sit amet fermentum.`)
            .join("\n")}
          //action={action}
        />
      </Content>
      <Footer />
      <Highlight />
    </React.Fragment>
  );
};
