import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./Articles.js";
import SingleArticle from "./SingleArticle.js";
import SignUpForm from "./SignUpForm.js";
import SignInForm from "./SignInForm.js";
import Navbar from "./Navbar.js";
import CreateArticle from "./CreateArticle.js";
import EditArticle from "./EditArticle.js";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/app" component={Articles} />
          <Route
            exact
            path="/app/users/1/articles/new"
            component={CreateArticle}
          />
          <Route
            exact
            path="/app/users/:user_id/articles/:id"
            component={SingleArticle}
          />
          <Route
            exact
            path="/app/users/:user_id/articles/:id/edit"
            component={EditArticle}
          />
          <Route exact path="/app/users/sign_up" component={SignUpForm} />
          <Route exact path="/app/users/sign_in" component={SignInForm} />
        </Switch>
      </Router>
    </>
  );
}
