import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { navigation } from "./lib/navigation";
import Nav from "./component/Nav";
import NavItem from "./component/NavItem";
import styled from "styled-components";
import GlobalStyle from "./util/globalStyle";
import Home from "./page/Home";
import Teachers from "./page/Teachers";
import Branches from "./page/Branches";
import About from "./page/About";
import { down } from "styled-breakpoints";
import Footer from "./component/Footer";
import { coloration } from "./util/Mixins/Coloration";

const AppRoot = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";
  ${coloration("back", "var(--csb)")};

  ${down("tablet")} {
    padding-bottom: calc(var(--ds) * 9px);
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
        <Nav indicator={active}>
          {navigation.map((data, i) => (
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
