import React from 'react'
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <img className='navbar__logo' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix-logo" />
      <img className='navbar__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </div>
  )
}

export default NavBar