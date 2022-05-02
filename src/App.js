import React from "react";
import { Switch, Route } from "react-router-dom";
import AppStyle from "./components/App.styles";
import Rating from "./components/Rating/Rating";
import ThankYou from "./components/ThankYou/ThankYou";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Rating} />
        <Route exact path="/thank-you/:ratingsCount" component={ThankYou} />
        <Route component={PageNotFound} />
      </Switch>
      <AppStyle />
    </>
  );
};

export default App;
