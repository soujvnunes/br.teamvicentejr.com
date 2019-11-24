import React from "react";
import { data } from "../../utility/data";
import Content from "../Content";
import Description from "../Description";
import Footer from "../Footer";
import Highlight from "../Highlight";

export default props => {
  const title =
    (props.page === "home" && data.page.home.title) ||
    (props.page === "teachers" && data.page.teachers.title);

  return (
    <React.Fragment>
      <Content>
        <Description
          title={title}
          /*subtitle={subtitle}
          text={text}
          action={action}*/
        />
      </Content>
      <Footer />
      <Highlight />
    </React.Fragment>
  );
};
