import React from "react";
import {Card} from "react-bootstrap";
import { fromNow } from "../../../utils/TimeFormatter";
import System from "../../../backend/System";

const FeedComponentComponent = ({ post }) => {

    return (
        <Card className="card-body-second" >
            {
                (post.media)?  <Card.Img
                    variant="top" src={System.postsMediaPath(post.media)}
                    style={{
                        borderRadius:' 20px'
                    }}
                /> : null
            }
            <Card.Body>
                <p
                    style={{
                        color: "#a0dbaa",
                        textAlign: "left",
                    }}
                >
                    {fromNow(post.createdAt)}
                </p>
                <Card.Text
                    style={{
                        textAlign: "left",
                    }}
                >
                    {post.content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FeedComponentComponent;