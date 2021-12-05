import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

let bodyParts = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

let muscleGroups = {
  back: ["upper back", "spine", "traps", "lats"],
  cardio: ["cardiovascular system"],
  chest: ["pectorals", "serratus anterior"],
  "lower arms": ["forarms"],
  "lower legs": ["calves"],
  neck: ["levator scapulae"],
  shoulders: ["delts"],
  "upper arms": ["biceps", "triceps"],
  "upper legs": ["abductors", "adductors", "glutes", "hamstrings", "quads"],
  waist: ["abs"],
};

export default function searchBodyPart() {
  const [bodyPart, setBodyPart] = useState("");

  function selectBodyPart(e) {
    setBodyPart(e.target.value);
  }

  return (
    <div className="body-part-form">
      <p>Select a body part</p>
      <form className="body-part-section">
        {bodyParts.map((bodyPart) => {
          return (
            <Button
              key={bodyPart}
              className={bodyPart}
              value={bodyPart}
              onClick={selectBodyPart}
              variant="outlined"
            >
              {bodyPart}
            </Button>
          );
        })}
      </form>
      <form>
        <FormGroup>
          {bodyPart && (
            <p>Select muscle groups</p>
          )}
          {bodyPart &&
            muscleGroups[bodyPart].map((muscleGroup) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox />
                  }
                  label={muscleGroup}
                />
              );
            })}
        </FormGroup>
        {bodyPart && 
        <React.Fragment>
          <Button>Search</Button>
          <Button>Search All</Button>
        </React.Fragment>}
      </form>
    </div>
  );
}
