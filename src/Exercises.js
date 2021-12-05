import React from "react";

export default function Exercises({ exercises }) {
  return (
    <div className="exercises-container">
      {exercises.map((exercise) => {
        return (
          <div key={exercise.id} className="exercise-container">
            <div className="left-exercise-container">
              <div className="favorite">
                <div>Favorite</div>
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
        <p>Prev page</p>
        <p>1</p>
        <p>Next page</p>
      </div>
    </div>
  );
}
