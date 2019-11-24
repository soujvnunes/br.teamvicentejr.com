import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";
import Home from "../Page/Home";
import Teachers from "../Page/Teachers";
import Branches from "../Page/Branches";
import Connect from "../Page/Connect";

export default props => {
  return (
    <main role={"main"} className={"App"}>
      <Router>
        <Header>
          <Nav className={"Header-nav"}>
            <NavLink to="/" exact>
              <Typography
                subject={<Icon name={"logo"} />}
                className={"Header-nav-logo"}
              />
            </NavLink>
            <NavLink to="/home">
              <Typography
                subject={<Icon name={"home"} />}
                className={"Header-nav-link"}
              />
            </NavLink>
            <NavLink to="/teachers">
              <Typography
                subject={<Icon name={"people"} />}
                className={"Header-nav-link"}
              />
            </NavLink>
            <NavLink to="/branches">
              <Typography
                subject={<Icon name={"local"} />}
                className={"Header-nav-link"}
              />
            </NavLink>
            <NavLink to="/connect">
              <Typography
                subject={<Icon name={"user"} />}
                className={"Header-nav-link"}
              />
            </NavLink>
          </Nav>
        </Header>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/home" render={props => <Home {...props} />} />
        <Route path="/teachers" render={props => <Teachers {...props} />} />
        <Route path="/branches" render={props => <Branches {...props} />} />
        <Route path="/connect" render={props => <Connect {...props} />} />
      </Router>
    </main>
  );
};
