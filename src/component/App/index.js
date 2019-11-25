import React from "react";
import { data } from "../../utility/data";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";
import Home from "../Page/Home";
import Teachers from "../Page/Teachers";
import Branches from "../Page/Branches";
import Connect from "../Page/Connect";
import Indicator from "../Indicator";

export default props => {
  const [state, setState] = React.useState({ active: "home" });

  return (
    <main role={"main"} className={"App"}>
      <Router>
        <Header>
          <Nav className={"Header-nav"}>
            {Object.keys(data.nav).map((key, i) => (
              <NavLink
                key={i}
                to={data.nav[key].to}
                className={"Header-nav-link"}
                exact={data.nav.home ? true : null}
                isActive={() => state.active === data.nav[key].name}
                onClick={() =>
                  setState({ ...state, active: `${data.nav[key].name}` })
                }
              >
                <Typography subject={<Icon name={data.nav[key].icon} />} />
              </NavLink>
            ))}
            <Indicator className={`indicate-${state.active}-page`} />
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
