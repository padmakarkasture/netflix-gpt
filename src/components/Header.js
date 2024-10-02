import React, {useEffect} from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from '../utils/userSlice';
import { AVATAR, LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName} =user;
        dispatch(addUser({uid,email,displayName}))
        navigate('/browse')

      }
      else{
        dispatch(removeUser())
        navigate("/")

      }

    })
    // unsubscribes when my component unmounts
    return ()=>unsubscribe()
  },[])

  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.

      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img
        className='w-48  z-50 '
        src={LOGO} />
      <div className='flex m-2 pr-5'>
        {user && <> <img className='m-3' src={AVATAR} />
          <div>    <p className='font-bold text-white'>{user.displayName}</p>
            <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button></div>

        </>}

      </div>
    </div>
  )
}

export default Header