import React from 'react'
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    //for creating account
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      //for send email verification
      const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
      let errorMessage;
      const navigate = useNavigate();

      if (error) {
        (
            errorMessage = <p className='font-bold text-red-500'>Error: {error?.message} {error1?.message}</p>
        )
      }
      if (loading || sending) {
        return <Loading></Loading>
      }
      
      const handleCreateAccount = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
      }
      if(user){
        navigate("/");
        sendEmailVerification();
        alert("Verification email sent")
        console.log("user: ",user);
      }
    //   sendEmailVerification();
  return (
    <div>
     <div className='flex mt-36 justify-center items-center'>
        
        <form onSubmit={handleCreateAccount} className='w-1/4 shadow-lg flex flex-col p-8'>
            <p className='text-2xl font-bold text-center mb-4'>Signup to Supex</p>
            <input name='email' className='h-12 px-2 bg-gray-200 outline-none border' type="text" placeholder='Enter email' />
            <input name='password' className='h-12 px-2 bg-gray-200 outline-none border mt-4'type="password" placeholder='Enter password' />
            <input className='h-12 bg-black text-white mt-4 cursor-pointer' type="submit" value="Submit"/>
        </form>
    </div>
    <SocialLogin></SocialLogin>
   </div>
  )
}

export default Register;