import React, { useState } from "react";
import axios from "axios";

export default function PickExercises({ time }) {
  console.log(time);
  const [exercise, setExercise] = useState([]);
  function handleClick(event) {
    event.preventDefault();
    axios.get("/randomexercises").then(function (response) {
      const allExercise = response.data;
      const workout = [];
      if (time === 30) {
        for (let i = 0; i < 4; i++) {
          const jdx = Math.floor(Math.random() * allExercise.length);
          workout.push(allExercise[jdx]);
        }
      } else if (time === 60) {
        for (let i = 0; i < 7; i++) {
          const jdx = Math.floor(Math.random() * allExercise.length);
          workout.push(allExercise[jdx]);
        }
      } else if (time === 90) {
        for (let i = 0; i < 10; i++) {
          const jdx = Math.floor(Math.random() * allExercise.length);
          workout.push(allExercise[jdx]);
        }
      }
      workout.length && setExercise(workout);
    });
  }
  console.log(exercise);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {time} Minutes Workout
      </button>
    </div>
  );
}
