import React from 'react';

export default function NavBar() {
  return(
    <React.Fragment>
      <div className="nav-bar-container">
        <div className="login-logo">
          <div className="login">Login</div>
          <div className="logo">Logo</div>
        </div>
        <div className="navigation">
          <p>Exercises of the day</p>
          <p>Search by name</p>
          <p>Search by body part</p>
          <p>My favorites</p>
        </div>
      </div>
    </React.Fragment>
  )
}