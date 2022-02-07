import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./Articles.js";
import SingleArticle from "./SingleArticle.js";
import SignUpForm from "./SignUpForm.js";
import SignInForm from "./SignInForm.js";
import Navbar from "./Navbar.js";

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route
            exact
            path="/users/:user_id/articles/:id"
            component={SingleArticle}
          />
          <Route exact path="/users/sign_up" component={SignUpForm} />
          <Route exact path="/users/sign_in" component={SignInForm} />
        </Switch>
      </Router>
    </>
  );
}
