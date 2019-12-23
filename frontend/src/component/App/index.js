import React, { useState, useEffect } from "react";
import { data } from "../../utility/data";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";
import Home from "../../page/Home";
import Teachers from "../../page/Teachers";
import Branches from "../../page/Branches";
import Highlight from "../Highlight";
import classNames from "classnames";
import About from "../../page/About";

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
    <Router>
      <Nav indicator={active}>
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
      </Nav>
      <Route
        exact
        path="/"
        render={props => (
          <Home {...props} event={handleEvent} switchContent={switchContent} />
        )}
      />
      <Route path="/professores" render={props => <Teachers {...props} />} />
      <Route
        path="/filiais"
        render={props => (
          <Branches
            {...props}
            event={handleEvent}
            switchContent={switchContent}
          />
        )}
      />
      <Route
        path="/sobre"
        render={props => (
          <About {...props} event={handleEvent} switchContent={switchContent} />
        )}
      />
      <Highlight className={classes.Highlight} />
    </Router>
  );
};
