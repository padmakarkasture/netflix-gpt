import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { checkValidData } from '../utils/validate';
import Header from './Header';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  // either you can use state variables to store or referrence
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErroeMessage] = useState()
  const [isLogin, setIsLogin] = useState(true);
  const handleButtonClick = (e) => {
    e.preventDefault()
    const validationError = checkValidData(email.current.value, password.current.value)
    // console.log("is valid",isNotValid)


    setErroeMessage(validationError)
    if (validationError) return;
    // sign Up
    if (!isLogin) {
      // sign up logic


      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const {user}=userCredential;
          updateProfile(user,{
            displayName:name.current.value,
            photoURL:""
          }).then((user)=>{
            const {uid,email,displayName} =auth.currentUser;

            dispatch(addUser({uid,email,displayName}))
            navigate("/browse")
          })
          .catch(error=>{
            console.log("error",error)
          })


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErroeMessage(error.message)
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse")

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErroeMessage(errorMessage)

        });
    }


    // validate data
  }
  return (
    <><Header />
      <div>
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg" />
      </div>
      <form className='bg-black absolute p-12 top-20 w-3/12 my-12 mx-auto left-0 right-0 bg-opacity-80 text-white'>
        <h1 className='font-bold text-3xl py-4' >{isLogin ? "Sign In" : "Sign Up"}</h1>
        <input ref={email} type='email' placeholder='Email Address' className='p-4 my-4  w-full bg-gray-700 rounded-lg' />
        <input ref={password} type='password' placeholder='password' className='p-4 my-4  w-full bg-gray-700 rounded-lg' />
        {!isLogin && <input ref={name} type='text' className='p-4 my-4  w-full bg-gray-700 rounded-lg' placeholder='First Name' />}

        <p className='text-red-600 '>{errorMessage}</p>
        <button className='p-4 m-2 my-6 bg-red-700 w-full opacity-100 rounded-lg' onClick={handleButtonClick}>{!isLogin ? "Sign Up" : "Sign In"}</button>
        <h1>{isLogin ? "New to Netflix?" : "Already an User?"}<span className='cursor-pointer' onClick={() => { setIsLogin(!isLogin) }}>{isLogin ? "Sign Up" : "Sign In"} </span></h1>
      </form>


    </>
  )
}

export default Login