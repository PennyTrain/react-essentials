import React, {useState, useEffect} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null)
    const [postMessage, setPostMessage] = useState(null);
    const postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'hello world',
                body: 'it works',
                user: '123',

            }
        ).then(response => {
            setPostMessage(response.status === 201
                ? `Success! Title: ${response.data.title}`
                : `Failed!`
                )
        })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response)
            const data = Array.isArray(response.data) 
            ? response.data
            : [response.data]
        setPosts(data);
        })
        .catch(error => {
            setError(error.message);
        })
    }, [])

  return (
    <div>
        <button onClick={postToApi}>Create Post</button>
    <h2>Posts</h2>
    <p>{postMessage}</p>
    {
       posts.length ? (
        posts.map(posts => (
            <div key={posts.id}> 
                <h2>{posts.id}. {posts.title}</h2>
                <h4>By User ID {posts.userId}</h4>
                <p>{posts.body}</p>
                <hr />
            </div>
        ))
       ) : (
        error 
        ? <p>{error}</p> 
        : <h4>Loading posts . . . </h4>
       ) 
    }
  </div>
  )
}

export default HTTPHooks
