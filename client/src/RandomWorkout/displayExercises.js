import React from 'react'
import {Container} from 'react-bootstrap'



export default function DisplayExercises({exercise}) {
    console.log(exercise)
    return (
        <Container>
        <ul>
           {exercise && exercise.map(response => {
               return (
                   <li key={response._id}>
                       {response.description} :3 SETS X 10 REPS
                   </li>
               )
           })}
        </ul>
        </Container>
    )
}
