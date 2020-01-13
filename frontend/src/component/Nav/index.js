import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../Button";
import Skew from "../Skew";
import Mark from "../../asset/mark.png";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";
import { NavLinkDefault } from "../../util/NavLinkDefault";

const NavRoot = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  flex-direction: row;
  height: calc(var(--spacing) * 6px);
  width: calc(100% - var(--spacing) * 6px);
  margin: calc(var(--spacing) * 4px);
  padding: 0 calc(var(--spacing) * 1px);

  ${down("md")} {
    width: 100vw;
    margin: 0;
    background-color: rgba(var(--color-primary-base), 1);
    height: calc(var(--spacing) * 9px);
    padding: 0 calc(var(--spacing) * 2px);
    bottom: 0;
  }
`;

const NavSkew = styled(Skew)`
  color: rgba(var(--color-primary-base), 1);
`;

const NavLinks = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: inherit;
  align-items: center;
  justify-content: space-around;

  ${down("md")} {
    width: 100%;
    height: calc(var(--spacing) * 7px);
  }
`;

const NavLinksRunner = styled(Skew)`
  color: rgba(var(--color-tertiary-light), 1);
  width: 25%;
  height: calc(100% + var(--spacing) * 2px);
  top: calc(var(--spacing) * -1px);
      
  ${down("md")} {
    height: 100%;
    top: 0;
  } 

  ${props =>
    props.indicator === "home" &&
    css`
      left: 0;
    `}

  ${props =>
    props.indicator === "teachers" &&
    css`
      left: 25%;
    `}
  
  ${props =>
    props.indicator === "branches" &&
    css`
      left: 50%;
    `}
  
  ${props =>
    props.indicator === "about" &&
    css`
      left: 75%;
    `}
`;

const NavLogo = styled.a`
  width: calc(var(--spacing) * 6px);
  height: calc(var(--spacing) * 6px);

  & > img {
    width: inherit;
    height: inherit;
    transform: scale(1.5);

    ${down("md")} {
      transform: scale(1);
    }
  }
`;

const NavAside = styled.aside`
  display: flex;
  flex-direction: row;
`;

const NavAsideButton = styled(Button)`
  ${NavLinkDefault};

  &:first-child {
    margin-left: calc(var(--spacing) * 43px);

    ${down("md")} {
      margin-left: 0;
    }
  }
`;

const NavSocial = styled(NavRoot)`
  top: 0;
  left: 0;
  background-color: rgba(var(--color-black), 0.25) !important;
`;

export default function Nav(props) {
  const isTablet = useMediaQuery({ maxDeviceWidth: 960 });
  let { children, indicator } = props;

  function Body() {
    return (
      <>
        <NavLogo href={"/"}>
          <img src={Mark} alt={"marca da aplicação"} />
        </NavLogo>
        <NavAside>
          <NavAsideButton
            skew={false}
            variant={"text"}
            icon={"instagram"}
            href={"https://instagr.am/vicentejrteambrasil"}
          />
          <NavAsideButton
            skew={false}
            variant={"text"}
            icon={"phone"}
            href={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
          />
          <NavAsideButton
            skew={false}
            variant={"text"}
            icon={"youtube"}
            href={"https://youtube.com"}
          />
        </NavAside>
      </>
    );
  }

  return (
    <NavRoot>
      {!isTablet && <NavSkew variant={"contained"} />}
      <NavLinks>
        <NavLinksRunner variant={"contained"} indicator={indicator} />
        {children}
      </NavLinks>
      {isTablet ? (
        <NavSocial>
          <Body />
        </NavSocial>
      ) : (
        <Body />
      )}
    </NavRoot>
  );
}
