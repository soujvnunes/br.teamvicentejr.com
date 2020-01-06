import React from "react";
import Main from "../../../component/Main";
import panelImage from "../../../asset/br/about/01001.jpg";
import History from "../../History";
import { data } from "../../../library/about";
import Header from "../../Header";
import Section from "../../Section";
import Panel from "../../Panel";
import Typography from "../../Typography";
import Icon from "../../Icon";
import Wrapper from "../../Wrapper";

export default props => {
  return (
    <Main className={"about"}>
      <Header title={"Sobre"} />
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
        url={"https://www.instagram.com/vicentebjj/"}
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
      <footer className={"about-footer"}>
        <Wrapper>
          {data.br.footer.map((data, i) => (
            <Typography
              key={i}
              subject
              url={data.url}
              className={"about-footer-link"}
            >
              {data.label}
            </Typography>
          ))}
        </Wrapper>
      </footer>
    </Main>
  );
};
