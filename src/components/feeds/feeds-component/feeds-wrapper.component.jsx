import React from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectAllPosts} from "../../../redux/post/post.selectors";

import Navbar from '../../navbar/feeds-top-navbar/feeds-top-navbar.components'
import PostFeedFormComponent from "../post-feed-form-component/post-feed-form.component";
import FeedComponentComponent from "../feed-component-component/feed-component.component";

import './feeds.modules.css'

const FeedsWrapperComponent = ({ posts }) => {
  return (
    <div>
      <Navbar/>
      <div className="content">

        <PostFeedFormComponent />

          {posts.map(post => (
              <FeedComponentComponent post={post} />
          ))}

      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    posts: selectAllPosts,
});
export default connect(mapStateToProps)(FeedsWrapperComponent);
