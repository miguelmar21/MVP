import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import Exercises from "./Exercises";
import Container from '@mui/material/Container'
import SearchBodyPart from "./searchBodyPart";
import sampleData from './sampleData'

function App() {
  const [exercises, setExercises] = useState(sampleData)

  let exercisePage = exercises.slice(0, 5)

  // useEffect(() => {
  //   axios.get('http://localhost:3000/exercises')
  //     .then((response) => {
  //       setExercises(response.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  // }, [])

  function filterExercises(category, filter) {
    function filterByCategory(exercise) {
      if (exercise.equipment === 'barbell') {
        return true;
      } else {
        return false;
      }
    }

    let newExercises = exercises.filter(filterByCategory)
    setExercises(newExercises)
  }

  return (
    <Container>
      <NavBar />
      <Exercises exercises={exercisePage}/>
      <SearchBodyPart className="body-part-form"/>
    </Container>
  )
}

export default App;