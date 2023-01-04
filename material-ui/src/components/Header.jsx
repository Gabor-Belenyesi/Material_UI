import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/abaut'>Abaut</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Header