import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import PreviousPrices from "../components/PreviousPrices";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Header />
        <div className="main-content">
            <Switch>
            <Route component={Main} path="/" exact={true} />
            <Route component={PreviousPrices} path="/past" />
            </Switch>
        </div>
    </BrowserRouter>
  );
};

export default AppRouter;