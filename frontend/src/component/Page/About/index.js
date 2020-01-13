import React from "react";
import Main from "../../../component/Main";
import panelImage from "../../../asset/br/about/01001.jpg";
import headerImage from "../../../asset/br/about/01002.jpg";
import History from "../../History";
import { data } from "../../../lib/about";
import Header from "../../Header";
import Section from "../../Section";
import Panel from "../../Panel";
import Typography from "../../Typography";
import Icon from "../../Icon";

export default props => {
  return (
    <Main className={"about"}>
      <Header title={"Sobre"} image={headerImage} />
      <Section>
        {data.br.history.map((data, i) => {
          return (
            <History
              key={i}
              image={data.image}
              text={data.text}
              orientation={data.orientation}
              className={"about-history"}
            />
          );
        })}
      </Section>
      <Panel
        image={panelImage}
        href={"https://www.instagram.com/vicentebjj/"}
        className={"about-panel"}
      >
        <Typography title className={"about-panel-title"}>
          Acompanhe
        </Typography>
        <br />
        <div className={"about-panel-content-text"}>
          Vicente no{" "}
          <Icon
            name={"instagram"}
            className={"about-panel-content-text-icon"}
          />{" "}
          Instagram
        </div>
      </Panel>
    </Main>
  );
};
