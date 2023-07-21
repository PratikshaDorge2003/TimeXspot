import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav>
      <div className='navbar'>
        
          <h4 className='NavTitle'>TimeXSpot</h4>
           
          
          <Link className='NavCategory' to="/">Home</Link>
          <Link className='NavCategory' to="/guitars">Guitar</Link>
          <Link className='NavCategory' to="/strings"> Strings</Link>
          <Link className='NavCategory' to="/stuff"> Stuff</Link>
          
  

      </div>

    </nav>
  )
}

export default Navbar