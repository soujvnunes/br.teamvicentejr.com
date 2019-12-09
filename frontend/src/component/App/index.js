import React, { useState, useEffect } from "react";
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
import Highlight from "../Highlight";
import classNames from "classnames";
import Mark from "../../asset/mark.png";
import Footer from "../Footer";

export default props => {
  const [state, setState] = useState({
    active: window.location.pathname.substring(1),
    switchContent: false
  });

  let { active, switchContent } = state;

  useEffect(() => setState({ active: "home" }), []);

  function handleEvent() {
    if (switchContent) setState({ ...state, switchContent: false });
    else setState({ ...state, switchContent: true });
  }

  const classes = {
    Highlight: [
      classNames({
        [`Highlight-${active}-page`]: active,
        [`Highlight--event`]: switchContent
      })
    ]
  };

  return (
    <main role={"main"} className={"App"}>
      <Router>
        <Header social={(active !== "home" || switchContent) && "condensed"}>
          <Nav className={"Header-nav"}>
            <NavLink
              to={"/"}
              className={"Header-nav-mark"}
              exact
              isActive={() => active === "home"}
              onClick={() => setState({ ...state, active: "home" })}
            >
              <img src={Mark} alt={"Marca"} className={"Header-nav-mark-img"} />
            </NavLink>
            {Object.keys(data.nav).map((key, i) => (
              <NavLink
                key={i}
                to={data.nav[key].to}
                isActive={() => active === data.nav[key].name}
                className={data.nav[key].className}
                onClick={() =>
                  setState({ ...state, active: `${data.nav[key].name}` })
                }
              >
                <Icon name={data.nav[key].icon} />
                <Typography subject>{data.nav[key].primary}</Typography>
              </NavLink>
            ))}
            <Indicator className={`indicate-${active}-page`} />
          </Nav>
        </Header>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              event={handleEvent}
              switchContent={switchContent}
            />
          )}
        />
        <Route path="/teachers" render={props => <Teachers {...props} />} />
        <Route path="/branches" render={props => <Branches {...props} />} />
        <Route path="/connect" render={props => <Connect {...props} />} />
        <Footer />
        <Highlight className={classes.Highlight} />
      </Router>
    </main>
  );
};
