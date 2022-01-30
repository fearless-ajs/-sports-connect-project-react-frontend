import { createSelector } from "reselect";

const selectPost = state => state.post;

export const selectAllPosts = createSelector(
  [selectPost],
  post => post.posts
);

export const selectAllUserPosts = createSelector(
    [selectPost],
    post => post.userPosts
);

export const selectCurrentPostStatus = createSelector(
    [selectPost],
    post => post.postCompleted
);

export const selectCurrentPostContent = createSelector(
    [selectPost],
    post => post.postContent
);

export const selectPostFetchingStatus = createSelector(
    [selectPost],
    post => post.isFetching
);

export const selectUserPostsFetchingStatus = createSelector(
    [selectPost],
    post => post.isFetchingUserPosts
);


export const selectPostLoadingStatus = createSelector(
    [selectPost],
    post => post.isLoading
);
