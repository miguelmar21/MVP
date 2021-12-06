import React, { useState } from 'react';

export default function SearchByName({ form, setForm, filterExercisesByName }) {
  const [name, setName] = useState("")

  function exit(e) {
    setForm("none");
  }

  function onInputChange(e) {
    setName(e.target.value)
  }

  return (
    <div className={
      "name-form " +
      (form === "name form" ? "activated" : "deactivated")
    }>
    <button onClick={exit}>X</button>
    <p>Enter name of exercise</p>
    <form>
      <input type="text" onChange={onInputChange}></input>
    </form>
      <button onClick={() => {exit(); filterExercisesByName(name)}}>Search</button>
    </div>
  )
}