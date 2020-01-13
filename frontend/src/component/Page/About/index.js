import React from "react";
import Main from "../../../component/Main";
import panelImage from "../../../asset/page/about/01001.jpg";
import headerImage from "../../../asset/page/about/01002.jpg";
import History from "../../History";
import { data } from "../../../lib/page/about";
import Header from "../../Header";
import Section from "../../Section";
import Panel from "../../Panel";
import Typography from "../../Typography";
import Icon from "../../Icon";
import styled from "styled-components";

const AboutPanelSocialIcon = styled(Icon)`
  margin: 0 calc(var(--spacing) * 1px);
`;

export default props => {
  return (
    <Main>
      <Header
        title={"Sobre"}
        subject={"Conheça mais a equipe."}
        image={headerImage}
      />
      <Section>
        {data.history.map((data, i) => {
          return <History key={i} image={data.image} text={data.text} />;
        })}
      </Section>
      <Panel image={panelImage} href={"https://www.instagram.com/vicentebjj/"}>
        <Typography variant={"title"}>Acompanhe</Typography>
        <div>
          Vicente no <AboutPanelSocialIcon name={"instagram"} /> Instagram
        </div>
      </Panel>
    </Main>
  );
};
