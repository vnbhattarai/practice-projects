import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ReservationMap from "./ReservationMap";
// import registerServiceWorker from './registerServiceWorker';

const Routes = () =>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/reservationmap" component={ReservationMap} />
    </div>
  </BrowserRouter>;

ReactDOM.render(<Routes />, document.getElementById("root"));
// registerServiceWorker();
