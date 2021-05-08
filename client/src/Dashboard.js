import React from "react";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import "./dashboard.css";
import Rating from "./ratings/index";

const Dashboard = () => {
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
    <div>
      {button}
      <h1>Ex-Op Fitness</h1>
      <h2>Workout Dashboard</h2>
      <h3>Select a workout</h3>
      <br />
      <div className="card">
        <p>"Generated Workout goes here"</p>
      </div>
      <button type="button">30 Minute Workout</button>
      <br />
      <Rating />
      <div className="card">
        <p>"Generated Workout goes here"</p>
      </div>

      <button type="button">60 Minute Workout</button>
      <br />
      <div className="card">
        <p>"Generated Workout goes here"</p>
      </div>
      <button type="button">90 Minute Workout</button>
      <br />
    </div>
  );
};

export default Dashboard;
