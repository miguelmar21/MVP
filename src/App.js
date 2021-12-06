import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Exercises from "./Exercises";
import Container from "@mui/material/Container";
import SearchBodyPart from "./SearchBodyPart";
import sampleData from "./sampleData";
import axios from 'axios';
import SearchByName from "./SearchByName";

function App() {
  const [allExercises, setAllExercises] = useState(sampleData);
  const [exercises, setExercises] = useState(sampleData);
  const [favorites, setFavorites] = useState([]);
  const [exercisesInPage, setExercisesInPage] = useState([0, 5]);
  const [form, setForm] = useState("none");

  let exercisePage = exercises.slice(exercisesInPage[0], exercisesInPage[1]);
  let favoritePage = favorites.slice(exercisesInPage[0], exercisesInPage[1]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/exercises')
  //     .then((response) => {
  //       setAllExercises(response.data);
  //       setExercises(response.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  // }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/exercises/favorites')
      .then((response) => {
        filterByFavorites(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])


  function filterByFavorites(exerciseIds) {
    var favoriteArray = []
    for (const element of exerciseIds) {
      favoriteArray.push(element.exercise_id)
    }

    function filterById(exercise) {
      console.log(favoriteArray)
      if (favoriteArray.includes(parseInt(exercise.id))) {
        return true;
      } else {
        console.log('false')
        return false;
      }
    }

    let newExercises = allExercises.filter(filterById);
    setFavorites(newExercises);
  }

  function filterExercisesByName(name) {
    function filterByName(exercise) {
      if (exercise.name === name) {
        return true;
      } else {
        return false;
      }
    }

    let newExercises = allExercises.filter(filterByName);
    setExercises(newExercises);
  }

  function filterExercisesByBodyPart(category) {
    function filterByBodyPart(exercise) {
      if (exercise.bodyPart === category) {
        return true;
      } else {
        return false;
      }
    }

    let newExercises = allExercises.filter(filterByBodyPart);
    setExercises(newExercises);
  }

  function filterExercisesWithTargets(category, targets) {
    function filterByCategory(exercise) {
      if (exercise.bodyPart === category && targets.includes(exercise.target)) {
        return true;
      } else {
        return false;
      }
    }

    let newExercises = allExercises.filter(filterByCategory);
    setExercises(newExercises);
  }

  function returnToAllExercises() {
    setExercises(allExercises);
  }

  return (
    <Container>
      <NavBar 
        setForm={setForm}
        returnToAllExercises={returnToAllExercises} />
      <Exercises
        exercises={form === "favorites" ? favoritePage : exercisePage}
        setExercisesInPage={setExercisesInPage}
        exercisesInPage={exercisesInPage}
      />
      <SearchBodyPart 
      form={form} 
      setForm={setForm}
      filterExercisesByBodyPart={filterExercisesByBodyPart}
      filterExercisesWithTargets={filterExercisesWithTargets}/>
      <SearchByName 
      form={form}
      setForm={setForm}
      filterExercisesByName={filterExercisesByName}/>
    </Container>
  );
}

export default App;
