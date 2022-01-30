import { takeLatest, put, all, call } from 'redux-saga/effects';
import { PostActionTypes } from "./post.types";


import {
    createPostSuccess,
    createPostFailure,
    fetchPostsSuccess,
    fetchPostsFailure,
    fetchUserPostsSuccess, fetchUserPostsFailure
} from "./post.actions";
import Post from "../../backend/Post";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);


/** ------------------------------------------------------------------- **/
// Asynchronous logic/ other controllers
// Payload automatically comes in as an object
/** ------------------------------------------------------------------- **/
export function* createNewPost({payload: { formData }}) {
    try{

        const response =  yield Post.createPost(formData);
        const { post } = response.data.data;
        // console.log(response.data.data);
        yield put(createPostSuccess(post));
        notify.fire({
            icon: 'success',
            title: 'Update posted successfully',
            timerProgressBar: true,
            showConfirmButton: true,
            timer: 10000
        });
    }catch (error) {
        const { message } = error.response.data
        yield put(createPostFailure(error.response.data));
        notify.fire({
            icon: 'error',
            title: 'Update Failed',
            timerProgressBar: true,
            showConfirmButton: true,
            text: message,
            timer: 100000
        });
    }
}

export function *fetchAllPosts() {
    try{
        const response =  yield Post.fetchAllPosts();
        yield put(fetchPostsSuccess(response.data.data.data));
    }catch (error) {
        // const { message } = error.response
        yield put(fetchPostsFailure(error));
        notify.fire({
            icon: 'error',
            title: 'Update Failed',
            timerProgressBar: true,
            showConfirmButton: true,
            // text: message,
            timer: 100000
        });
    }
}

export function *fetchAllUserPosts({payload: userId }) {
    try{
        const response =  yield Post.fetchAllUserPosts(userId);
        yield put(fetchUserPostsSuccess(response.data.data.data));
    }catch (error) {
        // const { message } = error.response
        yield put(fetchUserPostsFailure(error));
        notify.fire({
            icon: 'error',
            title: 'Update Failed',
            timerProgressBar: true,
            showConfirmButton: true,
            // text: message,
            timer: 100000
        });
    }
}

/** ------------------------------------------------------------------- **/
// LISTENERS
/** ------------------------------------------------------------------- **/


export function* onCreatePostStart() {
    yield takeLatest(PostActionTypes.CREATE_POST_START, createNewPost)
}

export function* onFetchAllPostsStart() {
    yield takeLatest(PostActionTypes.FETCH_POSTS_START, fetchAllPosts)
}

export function* onFetchAllUserPostsStart() {
    yield takeLatest(PostActionTypes.FETCH_USER_POSTS_START, fetchAllUserPosts)
}

export function* postSagas() {
    yield all([
        call(onCreatePostStart),
        call(onFetchAllPostsStart),
        call(onFetchAllUserPostsStart)
    ])
}