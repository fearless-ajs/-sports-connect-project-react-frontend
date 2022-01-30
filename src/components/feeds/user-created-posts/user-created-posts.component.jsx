import React, {useEffect} from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { fetchUserPostsStart } from "../../../redux/post/post.actions";
import { selectAllUserPosts, selectUserPostsFetchingStatus } from "../../../redux/post/post.selectors";
import FeedComponentComponent from "../feed-component-component/feed-component.component";

const UserCreatedPostsComponent = ({ currentUser, fetchUserPosts, userPosts, isUserPostsFetching }) => {

    useEffect(async () => {
        if (userPosts.length === 0){
            fetchUserPosts(currentUser.user._id)
        }
    }, [fetchUserPosts]);

    return (
        <div
            className="content"
            style={{
                textAlign: "center",
                justifyContent: "center",
                height: "auto",
                paddingTop: "1rem",
                paddingBottom:'5rem'
            }}
        >
            {
                (!isUserPostsFetching)?
                    userPosts.map(post => (
                        <FeedComponentComponent  post={post}/>
                    ))
                    :
                    <h5>Fetching your posts.....</h5>
            }


        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    userPosts: selectAllUserPosts,
    isUserPostsFetching: selectUserPostsFetchingStatus
});
const mapDispatchToProps = dispatch => ({
    fetchUserPosts: userId => dispatch(fetchUserPostsStart(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserCreatedPostsComponent);