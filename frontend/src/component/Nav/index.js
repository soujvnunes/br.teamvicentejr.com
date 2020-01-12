import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../Button";
import Skew from "../Skew";
import Mark from "../../asset/mark.png";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";

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
`;

const NavSkew = styled(Skew)`
  color: var(--color-primary-base);
`;

const NavLinks = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: inherit;
  align-items: center;
  justify-content: space-around;
`;

const NavLinksRunner = styled(Skew)`
  color: var(--color-tertiary-light);
  width: 25%;
  height: calc(100% + var(--spacing) * 2px);
  top: calc(var(--spacing) * -1px);

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
  &:first-child {
    margin-left: calc(var(--spacing) * 43px);

    ${down("md")} {
      margin-left: 0;
    }
  }
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
        <div className={"Nav-social"}>
          <Body />
        </div>
      ) : (
        <Body />
      )}
    </NavRoot>
  );
}
