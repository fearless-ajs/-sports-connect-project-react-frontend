import React from "react";
import {Card} from "react-bootstrap";
import { fromNow } from "../../../utils/TimeFormatter";
import System from "../../../backend/System";

const FeedComponentComponent = ({ post }) => {

    return (
        <Card className="card-body-second" >
            <Card.Header>
                <Card.Text
                    style={{
                        color: "#979696",
                        textAlign: "left"
                    }}
                >
                    {post.user.name}
                </Card.Text>
                <p
                    style={{
                        color: "#a0dbaa",
                        textAlign: "left",
                        marginTop: "-18px",
                        marginBottom: "-2px",
                        fontSize: "70%"
                    }}
                >
                    {fromNow(post.createdAt)}
                </p>

            </Card.Header>
            {
                (post.media)?
                <div>
                    <Card.Img
                        variant="top"
                        src={System.postsMediaPath(post.media)}
                        style={{
                            borderRadius:' 20px'
                        }}
                    />
                </div>
                : null
            }
            <Card.Body>
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