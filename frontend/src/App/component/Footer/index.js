import React from "react";
import Typography from "../Typography";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import { down } from "styled-breakpoints";
import Icon from "../Icon";

const FooterRoot = styled.footer`
  padding: calc(var(--ds) * 2px) 0;
  background-color: hsla(var(--csb), 1);
  display: flex;
  justify-content: center;
  border-top: var(--sb);
`;

const FooterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;

  ${down("tablet")} {
    flex-direction: column;
  }
`;

const FooterWrapperCopyright = styled.div`
  margin-right: calc(var(--ds) * 0.5px);
  display: flex;
  flex-direction: row;
  align-items: center;

  ${down("tablet")} {
    margin-bottom: calc(var(--ds) * 2px);
  }
`;

const FooterWrapperDev = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${down("tablet")} {
    margin-bottom: calc(var(--ds) * 2px);
  }
`;

const FooterWrapperMail = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FooterWrapperMailIcon = styled(Icon)`
  margin-right: calc(var(--ds) * 1px);
`;

const FooterWrapperCopyrightSymbol = styled(Typography)`
  margin: 0 calc(var(--ds) * 0.5px);
`;

export default function Footer(props) {
  return (
    <FooterRoot>
      <FooterWrapper>
        <FooterWrapperCopyright>
          <Typography variant={"action"}>Copyright 2020</Typography>
          <FooterWrapperCopyrightSymbol>©</FooterWrapperCopyrightSymbol>
          <Typography variant={"action"}>Vicente Júnior</Typography>
        </FooterWrapperCopyright>
        <FooterWrapperDev
          href={"https://behance.net/soujvnunes"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <Typography variant={"action"}>Desenvolvedor</Typography>
        </FooterWrapperDev>
        <FooterWrapperMail
          href={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <FooterWrapperMailIcon name={"phone"} />
          <Typography variant={"action"}>vicentejrteam@gmail.com</Typography>
        </FooterWrapperMail>
      </FooterWrapper>
    </FooterRoot>
  );
}
