import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";

import Sidebar from "host/Sidebar";
import Home from "host/Home";
import FinanceTrackerContent from "finance-tracker/FinanceTrackerContent";
import InvestmentsContent from "investments/InvestmentsContent";

export default function Router() {
  return (
    <ReactRouter>
      <div>
        <Sidebar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* TODO: add finance tracker to home page */}
            <Route path="/finance-tracker" component={FinanceTrackerContent} />
            <Route path="/investments" component={InvestmentsContent} />
          </Switch>
        </div>
      </div>
    </ReactRouter>
  );
}