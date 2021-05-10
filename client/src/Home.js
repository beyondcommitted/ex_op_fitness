import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
//import './home.css';

const Home = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (authState.isPending) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login</button>
  );

  return (
    <div className=" d-flex row justify-content-center align-items-center">
      <Link to="/"></Link>
      <div
        className="jumbotron d-flex row justify-content-center align-items-center"
        style={{ height: "500px", width: "300px" }}
      >
        <h1>EX_OP Fitness</h1>
      </div>
      <Link to="/dashboard"></Link>
      <div className=" d-flex col justify-content-center align-items-center">
        {button}
      </div>
    </div>
  );
};
export default Home;
