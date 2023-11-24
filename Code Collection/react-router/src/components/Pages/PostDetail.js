import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  console.log("testing: ",postId);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json()).then(data => setPost(data))
  },[postId])
  return (
    <div>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
    </div>
  )
}

export default PostDetail