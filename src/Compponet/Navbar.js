import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <div>
<nav class="navbar navbar-expand-lg navbar-light bg-danger">
<div className='logo'><img src='img/logo.p.png'/></div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auo">
        <li class="nav-item">
          
      <Link to="/">   <a class="nav-link ">Home</a></Link>
        </li>
        <li class="nav-item">
      <Link to="/Movie"><a class="nav-link" >Movie</a></Link>
        </li>
        <li class="nav-item">
      <Link to="/Contact">   <a class="nav-link" >Contact</a></Link>
      </li>
      <div className='serch'>
      <form class="">
      <button class="btne btn-outline" type="submit">Search</button>

              </form>
      </div>
      </ul>

    </div>
  
</nav>
  </div>;
};
export default Navbar


