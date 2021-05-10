import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppWithRouterAccess from "./AppWithRouterAccess";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from 'react-bootstrap';



const App = () => (
  <Container>
  <Router>
    <AppWithRouterAccess />
  </Router>
  </Container>
);

export default App;
