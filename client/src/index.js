import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

ReactDOM.render(
    <App />,   
    document.getElementById("root")
);
