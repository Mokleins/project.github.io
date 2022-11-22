import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="NavBar">
      <Link className='link' to = "/">Home</Link>
      <Link className='link' to = "/Hip-Hop">Hip-Hop</Link>
      <Link className='link' to = "Pop">Pop</Link>
      <Link className='link' to = "Latin-Music">Latin Music</Link>
      <Link className='link' to = "Clasic-Rock">Clasic Rock</Link>
    </nav>
  );
}

export default NavBar;
