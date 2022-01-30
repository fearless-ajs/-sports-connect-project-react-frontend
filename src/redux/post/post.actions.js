import { PostActionTypes } from "./post.types";

export const writingPostStart = () => ({
   type: PostActionTypes.WRITING_POST_CONTENT,
});

// Takes userCredentials as a whole Object
export const createPostStart = formData => ({
   type: PostActionTypes.CREATE_POST_START,
   payload: formData
});

//You can pass a whole object also, it's a personal preference
export const createPostSuccess = post => ({
   type: PostActionTypes.CREATE_POST_SUCCESS,
   payload: post
});

export const createPostFailure = error => ({
   type: PostActionTypes.CREATE_POST_FAILURE,
   payload: error
});


// Takes userCredentials as a whole Object
export const fetchPostsStart = () => ({
   type: PostActionTypes.FETCH_POSTS_START,
});

//You can pass a whole object also, it's a personal preference
export const fetchPostsSuccess = posts => ({
   type: PostActionTypes.FETCH_POSTS_SUCCESS,
   payload: posts
});

export const fetchPostsFailure = error => ({
   type: PostActionTypes.FETCH_POSTS_FAILURE,
   payload: error
});

// Takes userCredentials as a whole Object
export const fetchUserPostsStart = (userId) => ({
   type: PostActionTypes.FETCH_USER_POSTS_START,
   payload: userId
});

//You can pass a whole object also, it's a personal preference
export const fetchUserPostsSuccess = posts => ({
   type: PostActionTypes.FETCH_USER_POSTS_SUCCESS,
   payload: posts
});

export const fetchUserPostsFailure = error => ({
   type: PostActionTypes.FETCH_USER_POSTS_FAILURE,
   payload: error
});
