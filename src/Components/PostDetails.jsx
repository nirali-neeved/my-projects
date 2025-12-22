import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
  }, [id])

  if (!post) return <div>Loading...</div>

  return (
    <div>
      <p>User ID: {post.userId}</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default PostDetails