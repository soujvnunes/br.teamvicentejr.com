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
import Highlight from "../Highlight";
import classNames from "classnames";

export default props => {
  const [state, setState] = React.useState({
    active: window.location.pathname.substring(1)
  });

  const [event, setEvent] = React.useState(false);

  React.useEffect(() => setState({ ...state, active: data.nav.home.name }), []);

  function handleEvent() {
    if (event) setEvent(false);
    else setEvent(true);
  }

  const className = {
    Highlight: [
      classNames({
        [`Highlight-${state.active}-page`]: state.active,
        [`Highlight--event`]: event
      })
    ]
  };

  return (
    <main role={"main"} className={"App"}>
      <Router>
        <Header social={(state.active !== "home" || event) && "condensed"}>
          <Nav className={"Header-nav"}>
            {Object.keys(data.nav).map((key, i) => (
              <NavLink
                key={i}
                to={data.nav[key].to}
                className={data.nav[key].className}
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
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              event={handleEvent}
              description={event && "expanded"}
            />
          )}
        />
        <Route path="/teachers" render={props => <Teachers {...props} />} />
        <Route path="/branches" render={props => <Branches {...props} />} />
        <Route path="/connect" render={props => <Connect {...props} />} />
        <Highlight className={className.Highlight} />
      </Router>
    </main>
  );
};
