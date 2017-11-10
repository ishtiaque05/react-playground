import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Playground from "./components/Pages/Playground";
import LoginForm from "./components/Pages/LoginForm";

const App = ({ location }) => (
  <div>
    {window.location.pathname === "/" && 
      <div className="text-center">
        <h1>Welcome to components Scrap Yard!!</h1>
      </div>
    }

    <Route location={location} path="/" exact component={Playground} />
    <Route location={location} path="/login_form" exact component={LoginForm} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
