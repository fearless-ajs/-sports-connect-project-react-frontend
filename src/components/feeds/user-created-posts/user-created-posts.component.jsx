import React, {useEffect, useState} from "react";
import FeedComponentComponent from "../feed-component-component/feed-component.component";
import Post from "../../../backend/Post";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);

const UserCreatedPostsComponent = ({ userId }) => {
    const [posts, setPosts] = useState(null);

    useEffect(async () => {
        if (!posts){
          await fetchUserPosts();
        }
    }, [posts]);

    const fetchUserPosts = async () => {
       await Post.fetchAllUserPosts(userId).then(response => {
          setPosts(response.data.data.data);
       }).catch(error => {
           notify.fire({
               icon: 'error',
               title: 'Posts Error',
               text: 'Unable to fetch posts',
               showConfirmButton: true,
               confirmButtonColor: '#00a01e',
           });
       });
    }

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
                (posts)?
                    posts.map(post => (
                        <FeedComponentComponent post={post} />
                    ))
                    :
                    <h5>Fetching user posts.....</h5>
            }
        </div>
    );
}

export default UserCreatedPostsComponent;