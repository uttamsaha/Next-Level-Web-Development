import React, { useEffect, useState } from 'react'
import SingleFriends from './SingleFriends'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setFriends(data))
    },[])
  return (
    <div>
        <h1 className='text-center text-3xl font-bold text-blue-500 mt-2'>All friends</h1>
        <div>
        {
            friends?.map(friend => <SingleFriends friend={friend}></SingleFriends>)
        }
        </div>
    </div>
  )
}

export default Friends