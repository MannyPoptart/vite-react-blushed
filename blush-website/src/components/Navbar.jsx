import React from 'react';

function Navbar() {
  return (
    <div className="Menu">
        <ul>
          <li><a class="active" href="/">Home</a></li>
          <li><a href="/guidelines">Guidelines</a></li>
        </ul>
    </div>
  )
}

export default Navbar