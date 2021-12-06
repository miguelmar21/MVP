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

let muscleGroupsData = {
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

export default function searchBodyPart({
  form,
  setForm,
  filterExercisesWithTargets,
  filterExercisesByBodyPart
}) {
  const [bodyPart, setBodyPart] = useState("");
  const [muscleGroups, setMuscleGroups] = useState([]);

  function selectBodyPart(e) {
    setBodyPart(e.target.value);
    if (e.target.value !== bodyPart) {
      setMuscleGroups([]);
    }
  }

  function exit(e) {
    setForm("none");
  }

  function addOrRemoveMuscleGroup(e) {
    let muscleGroup = e.target.value;
    if (e.target.checked) {
      setMuscleGroups([...muscleGroups, muscleGroup]);
    } else {
      let newArr = muscleGroups.filter((item) => item !== muscleGroup);
      setMuscleGroups(newArr);
    }
  }

  return (
    <div
      className={
        "body-part-form " +
        (form === "body part form" ? "activated" : "deactivated")
      }
    >
      <button onClick={exit}>X</button>
      <p>Select a body part</p>
      <form className="body-part-section">
        {bodyParts.map((bodyPart) => {
          return (
            <Button
              // key={bodyPart}
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
          {bodyPart && <p>Select muscle groups</p>}
          {bodyPart &&
            muscleGroupsData[bodyPart].map((muscleGroup) => {
              return (
                <FormControlLabel
                  value={muscleGroup}
                  control={<Checkbox onChange={addOrRemoveMuscleGroup} />}
                  label={muscleGroup}
                />
              );
            })}
        </FormGroup>
        {bodyPart && (
          <React.Fragment>
            <Button
              onClick={() => {
                exit();
                filterExercisesWithTargets(bodyPart, muscleGroups);
              }}
            >
              Search
            </Button>
            <Button
             onClick={() => {
              exit();
              filterExercisesByBodyPart(bodyPart);
            }}
            >Search All</Button>
          </React.Fragment>
        )}
      </form>
    </div>
  );
}
