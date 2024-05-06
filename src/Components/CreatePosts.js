import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {createPost } from './Redux/Features/PostSlice';
import '../StyleSheets/CreatePosts.css'

const CreatePosts = () => {

      const [title, setTitle] = useState("");
      const [body, setBody] = useState("");

      const dispatch = useDispatch();
      const handleCreatePost = (e) =>{
            e.preventDefault();
            dispatch(createPost({ title, body}));
      }

      return (
            <>
                  <div className='container'>
                        <div className='create-posts-form'>
                              <form className=''>
                                    <br/>
                                    <h2 className='create-heading'>Create Post:</h2>
                                    <br/>
                                    <input className='input-fields' type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <br />
                                    <br/>
                                    <input className='input-fields' type='text' placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
                                    <br />
                                    <br/>
                                    <button className='create-btn' onClick={handleCreatePost}> Create Post </button>
                                    <br />
                                    <br />
                              </form>
                        </div>
                  </div>      
            </>
      )
}

export default CreatePosts