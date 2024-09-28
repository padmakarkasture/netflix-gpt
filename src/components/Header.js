import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {

    signOut(auth).then(() => {
      console.log("signed out")
      // Sign-out successful.

      navigate('/')
    }).catch((error) => {
      // An error happened.
      console.log("error", error)
    });
  }
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img
        className='w-48  z-50 '
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
      <div className='flex m-2 pr-5'>
        {user && <> <img className='m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgudOc7BmniA35L9AtOFaMkMAMMW0z3ng1OrSiJVBdLu3UpJWx4GZDft38&s" />
          <div>    <p className='font-bold text-white'>{user.displayName}</p>
            <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button></div>

        </>}

      </div>
    </div>
  )
}

export default Header