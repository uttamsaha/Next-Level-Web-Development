import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => setPosts(data.slice(0,10)))
    },[])
  return (
    <div>
        <div>
            <div>
                {
                    posts?.map(post => <>
                    <Link to={`/posts/${post?.id}`} className='bg-blue-500 mx-2 p-2 rounded mt-8'>{post?.id}</Link>
                    </>)
                }
            </div>
            <div className='bg-black text-white'>
            <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Posts