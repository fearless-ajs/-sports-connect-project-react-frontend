import { PostActionTypes } from "./post.types";

const INITIAL_STATE = {
    posts: [],
    isFetching: false, // To check if user is already logged in
    isFetchingUserPosts: false,
    userPosts: [],
    isLoading: false,
    postCompleted: false,
    postContent: null,
    postError: null
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.WRITING_POST_CONTENT:
            return {
                ...state,
                postCompleted: false,
            }

        case PostActionTypes.CREATE_POST_START:
            return {
                ...state,
                isLoading: true,
            }
        case PostActionTypes.CREATE_POST_SUCCESS:
            return {
                ...state,
                posts: [ action.payload, ...state.posts],
                postCompleted: true,
                postContent: null,
                isLoading:  false,
                isFetching: false,
                postError: null
            }
        case PostActionTypes.CREATE_POST_FAILURE:
            return {
                ...state,
                postError: action.payload,
                isLoading: false,
                isFetching: false,
            }

        case PostActionTypes.FETCH_POSTS_START:
            return {
                ...state,
                isFetching: true,
            }
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isLoading:  false,
                isFetching: false,
                postError: null
            }
        case PostActionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                postError: action.payload,
                isLoading: false,
                isFetching: false,
            }

        case PostActionTypes.FETCH_USER_POSTS_START:
            return {
                ...state,
                isFetchingUserPosts: true,
            }
        case PostActionTypes.FETCH_USER_POSTS_SUCCESS:
            return {
                ...state,
                userPosts: action.payload,
                isFetchingUserPosts: false,
                postError: null
            }
        case PostActionTypes.FETCH_USER_POSTS_FAILURE:
            return {
                ...state,
                postError: action.payload,
                isFetchingUserPosts: false,
            }

        default:
            return state;
    }
};

export default postReducer;