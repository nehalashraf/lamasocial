/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
export default function home() {
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }
  return  <>
   <div className="navbar d-flex justify-content-between">
    <div className="nav_1  d-flex justify-content-between">
        <a href=""> Social App</a>
        <div className="icons">
        <a href=""><i class="fa-solid fa-house"></i></a>
        <a href="" onClick={myFunction()}><i class="fa-solid fa-moon"></i></a>
        <a href=""><i class="fa-solid fa-bars"></i></a>
        </div>
        <div className="search">
           <i class="fa-solid fa-magnifying-glass"></i>
           <input type="text" placeholder='search' />
        </div>
    </div>
    <div className="nav_2  d-flex justify-content-between">
        <div className="icons">
            <a href=""><i class="fa-regular fa-user"></i></a>
            <a href=""><i class="fa-regular fa-envelope"></i></a>
            <a href=""><i class="fa-sharp fa-regular fa-bell"></i></a>
        </div>
    </div>
  </div>
  </>
}
