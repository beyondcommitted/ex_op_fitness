import React, { useState } from "react";
import axios from "axios";
import DisplayExercises from "./displayExercises";

export default function PickExercises({ time }) {
  console.log(time);
  const [exercise, setExercise] = useState([]);
  function handleClick(event) {
    event.preventDefault();
    axios.get("/randomexercises").then(function (response) {
      const allExercise = response.data;
      const workout = [];
      if (time === 30) {
        for (let i = 0; i < 5; i++) {
          const jdx = Math.floor(Math.random() * allExercise.length);
          if (workout.indexOf(allExercise[jdx]) === -1) {
            workout.push(allExercise[jdx]);
          } else {
            workout.push(allExercise[jdx + 1]);
            console.log("Replaced Duplicate");
          }
        }
      } else if (time === 60) {
        for (let i = 0; i < 8; i++) {
          const jdx = Math.floor(Math.random() * allExercise.length);
          if (workout.indexOf(allExercise[jdx]) === -1) {
            workout.push(allExercise[jdx]);
          } else {
            workout.push(allExercise[jdx + 1]);
            console.log("Replaced Duplicate");
          }
        }
      } else if (time === 90) {
        for (let i = 0; i < 12; i++) {
          const jdx = Math.floor(Math.random() * allExercise.length);
          if (workout.indexOf(allExercise[jdx]) === -1) {
            workout.push(allExercise[jdx]);
          } else {
            workout.push(allExercise[jdx + 1]);
            console.log("Replaced Duplicate");
          }
        }
      }
      workout.length && setExercise(workout);
    });
  }
  console.log(exercise);

  return (
    <div>
      {exercise.length ? <DisplayExercises exercise={exercise} /> : null}
      <button type="button" onClick={handleClick}>
        {time} Minute Workout
      </button>
    </div>
  );
}
