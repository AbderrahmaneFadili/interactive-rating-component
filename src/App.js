import React from "react";
import { Switch, Route } from "react-router-dom";
import AppStyle from "./components/App.styles";
import Rating from "./components/Rating/Rating";
import ThankYou from "./components/ThankYou/ThankYou";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Rating} />
        <Route path="/thank-you/:ratingsCount" component={ThankYou} />
      </Switch>
      <AppStyle />
    </>
  );
};

export default App;
