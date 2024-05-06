import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getPost } from './Redux/Features/PostSlice';
import '../StyleSheets/ReadPosts.css'

const ReadPosts = () => {

      const [id, setId] = useState('');

      //useDispatch to fill data in redux
      const dispatch = useDispatch();

      const handleFetchRequest = (e) => {
            e.preventDefault();
            console.log(id);
            dispatch(getPost({ id }));
      }

      // useSelector to throw data on page     
      const { post } = useSelector(state => ({ ...state.app }))


      // handleDelete Function 
      const handleDelete = ({ id }) => {
            dispatch(deletePost({ id: post[0].id }))
            window.alert('Post Deleted');
      }

      return (
            <>
                  <div className='container'>
                        <div className='fetch-posts-form'>
                              <form>
                                    <br />
                                    <h2 className='fetch-heading'>Fetch Posts:</h2>
                                    <br/>
                                    <input className='input-fields' type="number" placeholder='Please Enter Post Id' value={id} onChange={(e) => setId(e.target.value)} />
                                    <br />
                                    <br />
                                    <button className='fetch-btn' onClick={handleFetchRequest} type='submit'>Fetch Posts</button>
                                    <br />
                                    <br />
                              </form>
                        </div>
                  </div>

                  <div className='posts-container'>
                        {post.map(posts => (
                              <div key={posts.id} className='post'>
                                    <h3 className='post-title'> Title: {posts.title}</h3>
                                    <p className='post-body'> <b>Body:</b> {posts.body}</p>
                                    <button className='delete-btn' onClick={handleDelete}>Delete</button>
                              </div>
                        ))}
                  </div>
            </>
      )
}

export default ReadPosts