import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../Button";
import Skew from "../Skew";
import Mark from "../../asset/misc/vis/mark.png";
import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";
import { NavLinkDefault } from "../../util/NavLinkDefault";
import Wrapper from "../Wrapper";
import PropTypes from "prop-types";

const NavRoot = styled(Wrapper)`
  z-index: 1;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  flex-direction: row;
  height: calc(var(--ds) * 6px);
  padding: 0 calc(var(--ds) * 1px);
  align-self: center;
  width: 100%;
  margin: calc(var(--ds) * 4px) 0;

  ${down("md")} {
    width: 100vw;
    margin: 0;
    background-color: hsla(var(--cpb), 1);
    height: calc(var(--ds) * 9px);
    padding: 0 calc(var(--ds) * 2px);
    bottom: 0;
  }
`;

const NavSkew = styled(Skew)`
  color: hsla(var(--cpb), 1);
`;

const NavLinks = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  height: inherit;
  align-items: center;
  justify-content: space-around;

  ${down("md")} {
    width: 100%;
    height: calc(var(--ds) * 7px);
  }
`;

const NavLinksRunner = styled(Skew)`
  color: hsla(var(--ctl), 1);
  width: 25%;
  height: calc(100% + var(--ds) * 2px);
  top: calc(var(--ds) * -1px);

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
  width: calc(var(--ds) * 6px);
  height: calc(var(--ds) * 6px);

  & > img {
    width: inherit;
    height: inherit;
    transform: scale(1.5);

    ${down("md")} {
      transform: scale(1);
    }
  }
`;

const NavSocial = styled.aside`
  display: flex;
  flex-direction: row;
`;

const NavSocialButton = styled(Button)`
  ${NavLinkDefault};

  margin: 0 calc(var(--ds) * 1px);

  &:first-child {
    margin-left: calc(var(--ds) * 22px);

    ${down("md")} {
      margin-left: 0;
    }
  }
`;

const NavAside = styled(NavRoot)`
  top: 0;
  left: 0;
  background-color: hsla(var(--ctd), 0.5) !important;
`;

export default function Nav(props) {
  const isTablet = useMediaQuery({ maxDeviceWidth: 960 });
  let { children, indicator } = props;

  if (isTablet) {
    return (
      <>
        <NavAside>
          <NavLogo href={"/"}>
            <img src={Mark} alt={"marca da aplicação"} />
          </NavLogo>
          <NavSocial>
            <NavSocialButton
              skew={false}
              variant={"text"}
              icon={"instagram"}
              href={"https://instagr.am/vicentejrteambrasil"}
            />
            <NavSocialButton
              skew={false}
              variant={"text"}
              icon={"phone"}
              href={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
            />
            <NavSocialButton
              skew={false}
              variant={"text"}
              icon={"youtube"}
              href={"https://youtube.com"}
            />
          </NavSocial>
        </NavAside>
        <NavRoot>
          <NavLinks>
            <NavLinksRunner variant={"static"} indicator={indicator} />
            {children}
          </NavLinks>
        </NavRoot>
      </>
    );
  } else {
    return (
      <NavRoot>
        <NavSkew variant={"static"} />
        <NavLinks>
          <NavLinksRunner variant={"static"} indicator={indicator} />
          {children}
        </NavLinks>
        <NavLogo href={"/"}>
          <img src={Mark} alt={"marca da aplicação"} />
        </NavLogo>
        <NavSocial>
          <NavSocialButton
            skew={false}
            variant={"text"}
            icon={"instagram"}
            href={"https://instagr.am/vicentejrteambrasil"}
          />
          <NavSocialButton
            skew={false}
            variant={"text"}
            icon={"phone"}
            href={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
          />
          <NavSocialButton
            skew={false}
            variant={"text"}
            icon={"youtube"}
            href={"https://youtube.com"}
          />
        </NavSocial>
      </NavRoot>
    );
  }
}

Nav.propTypes = {
  children: PropTypes.node,
  indicator: PropTypes.string.isRequired
};
