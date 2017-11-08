import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Playground from "./components/Pages/Playground";
import SignUpForm from "./components/Pages/SignUpForm";

const App = ({ location }) => (
  <div>
    <h1>Welcome to react Playground!</h1>
    <Route location={location} path="/" exact component={ Playground } />
    <Route location={location} path="/signup_form" exact component={ SignUpForm } />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
