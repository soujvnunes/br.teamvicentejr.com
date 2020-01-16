import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { data } from "./lib/data";
import Nav from "./component/Nav";
import NavItem from "./component/NavItem";
import styled from "styled-components";
import GlobalStyle from "./util/globalStyle";
import { ReactComponent as Icon } from "./asset/misc/vis/icon.svg";
import Home from "./page/Home";
import Teachers from "./page/Teachers";
import Branches from "./page/Branches";
import About from "./page/About";
import { down } from "styled-breakpoints";
import Footer from "./component/Footer";

const AppRoot = styled.section`
  display: flex;
  flex-direction: column;

  ${down("tablet")} {
    margin-bottom: calc(var(--ds) * 9px);
  }
`;

export default function App() {
  const [state, setState] = useState({
    active: window.location.pathname.substring(1)
  });

  let { active } = state;

  useEffect(() => setState({ active: "home" }), []);

  return (
    <Router>
      <GlobalStyle />
      <AppRoot>
        <Icon />
        <Nav indicator={active}>
          {data.navigation.map((data, i) => (
            <NavItem
              key={i}
              to={data.to}
              isActive={() => active === data.name}
              onClick={() => setState({ ...state, active: `${data.name}` })}
              primary={data.primary}
              icon={data.icon}
              iconActive={active === data.name}
            />
          ))}
        </Nav>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/professores" render={props => <Teachers />} />
        <Route exact path="/filiais" render={props => <Branches />} />
        <Route exact path="/sobre" render={props => <About />} />
        <Footer />
      </AppRoot>
    </Router>
  );
}
