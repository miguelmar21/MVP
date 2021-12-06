import React from 'react';

export default function NavBar({ setForm, returnToAllExercises }) {
  function showForm(e) {
    setForm(e.target.value)
  }

  return(
    <React.Fragment>
      <div className="nav-bar-container">
        <div className="login-logo">
          <div className="login">Login</div>
          <div className="logo">NewbieGainz</div>
        </div>
        <div className="navigation">
           <button value="none" onClick={(e) => {showForm(e); returnToAllExercises()}}>All exercises</button>
           <button value="name form" onClick={showForm}>Search by name </button>
           <button value="body part form" onClick={showForm}>Search by body part </button>
           <button value="favorites" onClick={showForm}>My favorites </button>
        </div>
      </div>
    </React.Fragment>
  )
}