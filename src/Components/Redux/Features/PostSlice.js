import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Read request to read posts

export const getPost = createAsyncThunk('post/getPosts', async ({ id }) => {

      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .catch(error => console.log(error));
})

// Delete request to delete post 

export const deletePost = createAsyncThunk('post/deletePosts', async ({ id }) => {

      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
            {
                  method: 'DELETE'
            }
                  .then(res => res.json())
                  .catch(error => console.log(error));
})

// create request to create a new post 

export const createPost = createAsyncThunk('post/createPosts', async ({ title, body }) => {

      return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
            }
      })
            .then(res => res.json())
            .catch(error => console.log(error));
})


// edit request to edit post 

export const editPost = createAsyncThunk('post/editPosts', async ({ id, title, body }) => {

      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`), {
            method: 'PUT',
            body: JSON.stringify({ title, body }),
            headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
            }
      }
            .then(response => response.json())
            .catch(error => console.log(error));
})

// Creating slice 
const PostSlice = createSlice({
      name: 'post',
      initialState: {
            loading: false,
            post: [],
            error: null
      },
      extraReducers: (builder) => {
            builder
                  .addCase(getPost.pending, (state) => {
                        state.loading = true;
                  })
                  .addCase(getPost.fulfilled, (state, action) => {
                        state.loading = false;
                        state.post = [action.payload];
                  })
                  .addCase(getPost.rejected, (state, action) => {
                        state.loading = false;
                        state.post = action.payload;
                  })
                  .addCase(deletePost.pending, (state) => {
                        state.loading = true;
                  })
                  .addCase(deletePost.fulfilled, (state, action) => {
                        state.loading = false;
                        state.post = action.payload;
                  })
                  .addCase(deletePost.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.payload;
                  })
                  .addCase(createPost.pending, (state) => {
                        state.loading = true;
                  })
                  .addCase(createPost.fulfilled, (state, action) => {
                        state.loading = false;
                        state.post = action.payload;
                  })
                  .addCase(createPost.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.payload;
                  })
                  .addCase( editPost.pending ,(state) =>{
                        state.loading = true;
                  })
                  .addCase( editPost.fulfilled ,( state, action )=>{
                        state.loading = false;
                        state.post = [action.payload];
                  })
                  .addCase( editPost, ( state, action )=>{
                        state.loading = false;
                        state.error = action.payload;
                  })

      }
})

export default PostSlice.reducer;