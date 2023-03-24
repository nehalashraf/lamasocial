import React from 'react'
import { Link } from 'react-router-dom'
export default function login() {
  return <>
 <div className="body">
 <div className="regietseration col-lg-10 d-flex justify-content-center mx-auto align-items-center">
   <div className="col-lg-5 image_1">
     <h1>Social App.</h1>
     <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et, non dignissimos perspiciatis asperiores porro! Earum vel quos, reprehenderit 
     </p>
     <h5 className='mt-5 text-white'>Do you Have an account?</h5>
     <Link className='btn' to="/">Regietser</Link>
    </div>
    <div className="col-lg-4 rgiestrer">
    <form action="" >
      <h2>Log in</h2>
      <div className="col mt-5">
      <input type="text" placeholder='Email'  />
      <input type="text" placeholder='Password' />
     <Link className='btn' to="home">Login</Link>
     </div>
      </form>
    </div>
  </div>
 </div>
  </>
}
