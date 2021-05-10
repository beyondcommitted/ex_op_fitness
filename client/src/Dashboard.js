import React from "react";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import "./dashboard.css";
import Rating from "./ratings/index";
import PickExercise from "./RandomWorkout/pickExercises";
import Navbar from "./components/ExerciseTracker/navbar";

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
    <div className="dashboard d-flex row justify-content-center align-items-center">
      <div>{button}</div>

      <div
        className="jumbotron d-flex row justify-content-center align-items-center"
        style={{ height: "600px", width: "350px" }}
      >
        <h1>
          EX_OP <br />
          Fitness
        </h1>
        <h2>
          Workout <br />
          Dashboard
        </h2>
        <Navbar />
      </div>

      <div>
        <h3>Select a workout</h3>
      </div>
      <div
        className="card d-flex justify-content-center align-items-center"
        style={{ height: "500px", width: "700px" }}
      >
        <PickExercise time={30} />
        <Rating />
      </div>
      <div
        className="card d-flex justify-content-center align-items-center"
        style={{ height: "500px", width: "700px" }}
      >
        <PickExercise time={60} />
        <Rating />
      </div>
      <div
        className=" card d-flex justify-content-center align-items-center"
        style={{ height: "550px", width: "700px" }}
      >
        <PickExercise time={90} />
        <Rating />
      </div>
    </div>
  );
};

export default Dashboard;
