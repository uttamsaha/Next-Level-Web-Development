import React, { useState } from 'react'
import SocialLogin from './SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let errorMessage;

      const location = useLocation();
      const navigate = useNavigate();
      const from = location?.state?.from?.pathname || '/';
     

      if (error) {
        (
            errorMessage = <p className='font-bold text-red-500'>Error: {error?.message}</p>
        )
      }
      if (loading) {
        return <Loading></Loading>
      }

      if(user){
        navigate(from, {replace: true}); // jekhan theke login korse se khane niye jabe
        console.log("user login: ",user);
      }
      const handleEmailPasswordLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password);
        console.log(email, password);

      }
  return (
    <div>
    <div className='flex mt-36 justify-center items-center'>
       
       <form onSubmit={handleEmailPasswordLogin} className='w-full md:w-1/4 shadow-lg flex flex-col p-8'>
           <p className='text-2xl font-bold text-center mb-4'>Login to Supex</p>
           <input name='email'  className='h-12 px-2 bg-gray-200 outline-none border' type="text" placeholder='Enter email' />
           <input name='password'  className='h-12 px-2 bg-gray-200 outline-none border mt-4'type="password" placeholder='Enter password' />
           {errorMessage}
           <input className='h-12 bg-black text-white mt-4 cursor-pointer' type="submit" value="Login"/>
           <div className='mt-4'>
               <p>New to Supex? <Link className='text-blue-500' to="/register">Create new user</Link></p>
               <p>Forgot password? <Link className='text-blue-500'>Reset password</Link></p>
           </div>
       </form>
   </div>
   <SocialLogin></SocialLogin>
  </div>
  )
}

export default Login;