import React from 'react'
import auth from '../../Firebase/firebase.init'
const Home = () => {
    const handleClick = () => {
        console.log("auth: ",auth);
    }
  return (
    <div>This is home page

        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home;