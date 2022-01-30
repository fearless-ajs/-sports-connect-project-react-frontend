import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {fetchPostsStart} from "../../../redux/post/post.actions";
import {createStructuredSelector} from "reselect";
import {selectAllPosts, selectPostFetchingStatus} from "../../../redux/post/post.selectors";

import FeedsWrapperComponent from "./feeds-wrapper.component";
import PageSpinner from "../../spinners/page-spinner.component";

import './feeds.modules.css'

const FeedWrapperWithPageSpinner = PageSpinner(FeedsWrapperComponent)

const FeedsComponent = ({ fetchPosts, posts, isFetching }) => {

    useEffect(() => {
        if (posts.length === 0){
            fetchPosts();
        }
    }, [fetchPosts]);

  return (
    <div>
      <FeedWrapperWithPageSpinner isLoading={!!(isFetching)} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsStart())
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectPostFetchingStatus,
  posts: selectAllPosts,
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedsComponent);
