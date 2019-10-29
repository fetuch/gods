import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import GodsPage from "./gods/GodsPage";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/gods" component={GodsPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
