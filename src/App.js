import React from "react";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/navbar";

const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />

      </Switch>
    </>
  );
};

export default App;
