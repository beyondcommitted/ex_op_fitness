import React, { useState } from "react";
import axios from "axios";

export default function PickExercises({ time }) {
  console.log(time);
  const [exercise, setExercise] = useState([]);
  function handleClick(event) {
    event.preventDefault();
    axios.get("/randomexercises").then(function (response) {
      const allExercise = response.data;

      function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
      }

      if (time === 30) {
        const thirtyMinute = [];
        for (let i = 0; i < 4; i++) {
          console.log(allExercise[i]);
          thirtyMinute.push(random_item(allExercise
            
            
            ));
        }
        setExercise(thirtyMinute);
      }
      console.log();
    });
    console.log(exercise);
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {time} Minutes Workout
      </button>
    </div>
  );
}
