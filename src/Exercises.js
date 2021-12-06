import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Exercises({
  exercises,
  exercisesInPage,
  setExercisesInPage,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  function addNewFavorite(e) {
    axios.post('http://localhost:3000/exercises/favorites', {
      exerciseId: e.target.value
    })
    .then((response) => {
      console.log('added to favorites!')
    })
    .catch((err) => {
      console.error(err)
    })
  }

  console.log(exercises);
  function setNewPage(e) {
    var prevOrNext = e.target.value;
    if (prevOrNext === "prev" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setExercisesInPage([exercisesInPage[0] - 6, exercisesInPage[1] - 6]);
    } else if (prevOrNext === "next") {
      setCurrentPage(currentPage + 1);
      setExercisesInPage([exercisesInPage[0] + 6, exercisesInPage[1] + 6]);
    }
  }

  return (
    <div className="exercises-container">
      {exercises.map((exercise) => {
        return (
          <div 
            // key={exercise.id} 
            className="exercise-container">
            <div className="left-exercise-container">
              <div className="favorite">
                <button value={exercise.id} onClick={addNewFavorite}>Favorite</button>
              </div>
              <div className="exercise-info">
                <p>{exercise.name}</p>
                <p>Muscle group: {exercise.target}</p>
                <p>Equipment needed: {exercise.equipment}</p>
              </div>
              <div className="body-part">
                <p>{exercise.bodyPart.toUpperCase()}</p>
              </div>
            </div>
            <div className="right-exercise-container">
              <img src={exercise.gifUrl} />
            </div>
          </div>
        );
      })}
      <div className="page-handler">
        <button value="prev" onClick={setNewPage}>
          Prev page
        </button>
        <p>{currentPage}</p>
        <button value="next" onClick={setNewPage}>
          Next page
        </button>
      </div>
    </div>
  );
}
