import React, {useState} from 'react'

function Navbar() {
  return (
    <>
      <nav className="Navbar"></nav>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
        </div>
    </>
  )
}

export default Navbar
