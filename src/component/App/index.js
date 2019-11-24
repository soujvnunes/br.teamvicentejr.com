import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Header from "../Header";
import Page from "../Page";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";

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
        <Route
          exact
          path="/"
          render={props => <Page {...props} page={"home"} />}
        />
        <Route
          path="/home"
          render={props => <Page {...props} page={"home"} />}
        />
        <Route
          path="/teachers"
          render={props => <Page {...props} page={"teachers"} />}
        />
        <Route
          path="/branches"
          render={props => <Page {...props} page={"branches"} />}
        />
        <Route
          path="/connect"
          render={props => <Page {...props} page={"connect"} />}
        />
      </Router>
    </main>
  );
};
