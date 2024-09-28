import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

  const [isLogin,setIsLogin] =useState(true)
  return (
    <><Header />
      <div>
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg" />
        </div>
        <form className='bg-black absolute p-12 top-20 w-3/12 my-12 mx-auto left-0 right-0 bg-opacity-80 text-white'>
        <h1 className='font-bold text-3xl py-4' >{isLogin?"Sign In":"Sign Up"}</h1>
          <input type='email' placeholder='Email Address' className='p-4 my-4  w-full bg-gray-700 rounded-lg'/>
          <input type='password' placeholder='password' className='p-4 my-4  w-full bg-gray-700 rounded-lg' />
          {!isLogin && <input type='text' className='p-4 my-4  w-full bg-gray-700 rounded-lg' placeholder='First Name' />}
          <button className='p-4 m-2 my-6 bg-red-700 w-full opacity-100 rounded-lg'>Sign In</button>  
          <h1>{isLogin?"New to Netflix?":"Already an User?"}<span className='cursor-pointer' onClick={()=>{setIsLogin(!isLogin)}}>{isLogin?"Sign Up":"Sign In"} </span></h1>        
        </form>


    </>
  )
}

export default Login