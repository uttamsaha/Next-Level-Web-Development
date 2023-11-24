import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingleFriends = ({friend}) => {
    const navigate = useNavigate();
    const {id, name, username, email, address:{street}} = friend;
    console.log(id,name,username,email, street);

    const viewFriend = (id) => {
   
        const path = `/friends/${id}`;
        navigate(path);
    }
  return (
    <div className='mx-auto'>
        <div className='w-[300px] shadow-md text-center mx-auto py-6 px-6 my-4'>
            <h1>ID: {id}</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Street: {street}</p>
            <button className='mt-2 bg-black text-white p-2 rounded' onClick={()=>{viewFriend(id)}}>View details</button>
        </div>
    </div>
  )
}

export default SingleFriends;