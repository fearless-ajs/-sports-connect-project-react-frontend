import React from "react";
import {Button, Card, Form} from "react-bootstrap";
import Aa from "../../../assets/img/Aa.png";
import postimg from "../../../assets/img/postimgicon.png";
import emoji from "../../../assets/img/emojiicon.png";
import sendicon from "../../../assets/img/sendicon.png";
import {createPostStart, writingPostStart} from "../../../redux/post/post.actions";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {
    selectCurrentPostContent,
    selectCurrentPostStatus,
    selectPostLoadingStatus
} from "../../../redux/post/post.selectors";
import ButtonSpinner from "../../spinners/button-spinner.component";

class PostFeedFormComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            content: this.props.postContent,
            media: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleFileChange = (event) => {
        const { files, name } = event.target;
        this.setState({ [name]: files[0] });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        // Create the formData
        const formData = new FormData();
        formData.append('content', this.state.content);
        formData.append('media', this.state.media);

        this.props.createPostStart(formData)

    }

    render() {
        return (
            <Card className="card-body-first">
                <Card.Body>
                    <Card.Title
                        style={{
                            color: " #00A01E",
                            fontFamily: "Flutter",
                        }}
                    >
                        Post an Update
                    </Card.Title>
                    <Card.Text
                        style={{
                            color: "#979696",
                        }}
                    >
                        Sharing an update is a quick way to get your profile trending
                    </Card.Text>
                    <Form className="" style={{ fontFamily: "Flutter" }}  onSubmit={this.handleSubmit}>
                        <Form.Group controlId="Custom01">
                            <div className="conatinericons">


                                <textarea
                                    onFocus={() => this.props.writingPostStart()}
                                    value={this.state.content}
                                    name='content'
                                    onChange={this.handleChange}
                                    className="icons-form"
                                    style={{
                                        backgroundColor: "#F3FAF6",
                                        borderRadius: "10px",
                                        border: '.2px solid #00a01e',
                                        height: "7rem",
                                        paddingLeft: "1rem",
                                        paddingRight: "1rem",

                                    }}>

                                     </textarea>
                                <Form.Control
                                    type="file"
                                    name='media'
                                    onChange={this.handleFileChange}
                                    style={{
                                        backgroundColor: "#F3FAF6",
                                        borderRadius: "10px",
                                        width: "100%",
                                        height: "2rem",
                                        paddingRight: ".5rem",
                                    }}
                                />

                                <span className="img-icons">
                                </span>
                                <Button
                                    type='submit'
                                    style={{
                                        width: "100%",
                                        marginTop: "5px",
                                        borderRadius: "20px",
                                        fontFamily:'Flutter',
                                    }}
                                    variant="outline-success custon"
                                >
                                    { this.props.isLoading ? (<ButtonSpinner />): ' Post' }
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    createPostStart: formData => dispatch(createPostStart({formData})),
    writingPostStart: () => dispatch(writingPostStart())
});

const mapStateToProps = createStructuredSelector({
    isLoading: selectPostLoadingStatus,
    postCompleted: selectCurrentPostStatus,
    postContent: selectCurrentPostContent
});
export default connect(mapStateToProps, mapDispatchToProps)(PostFeedFormComponent);