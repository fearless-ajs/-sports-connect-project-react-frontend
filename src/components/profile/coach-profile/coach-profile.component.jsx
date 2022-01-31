import React, {useState} from "react";
import { Row, Container, Col, Button, Image } from "react-bootstrap";
import playerimg from "../../../assets/img/playerimg.png";
import './coach-profile.styles.css'
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../../redux/user/user.selectors";
import {signOutStart} from "../../../redux/user/user.actions";
import {selectCurrentCoach} from "../../../redux/coach/coach.selectors";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import System from "../../../backend/System";
import UserCreatedPostsComponent from "../../feeds/user-created-posts/user-created-posts.component";
import AboutUserComponent from "../about-player/about-player.component";

const CoachProfileComponent = ({ currentUser, currentCoach, signOutStart, history }) => {
    const { user } = currentUser;

    const [userPosts, setUserPosts] = useState(true);
    const [aboutUser, setAboutUser] = useState(false);

    const showUserPosts = () => {
        setUserPosts(true);
        setAboutUser(false);
    }

    const showAboutUser = () => {
        setAboutUser(true);
        setUserPosts(false);
    }
    const logout = () => {
        signOutStart()
    }
    return (
        <div className="profile">
            <div>
                <div className="player">
                    <Container className="profile-container" fluid>
                        <div className="coachheader">
                            <Image src={System.userImagePath(user.image)} className="coachimg" style={{ maxWidth: "15%" }} />
                            <Button
                                className="profile-btn"
                                onClick={() => history.push('/update-coach-profile')}
                                variant="outline-success custom"
                            >
                                Edit Profile
                            </Button>
                        </div>
                    </Container>
                </div>
                <div className="profile-content">
                    <Container className="profile-container">
                        <Row>
                            <Col>
                                <h2>{user.name.toUpperCase()}</h2>
                                <p>
                                    Experienced Football Coach, Club:
                                    <span style={{ display: "block" }}>
                           {currentCoach.club}. Born, {currentCoach.dateOfBirth} in {currentCoach.state}
                            </span>
                                    {currentCoach.country}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <hr
                        style={{
                            borderTop: "1px solid #747373",
                        }}
                    />
                    <Container className="posts">
                        <Row>
                            <Col>
                                <a href="#" className="post">
                                    <h3 onClick={() => showUserPosts()}>Posts</h3>
                                </a>
                            </Col>
                            <Col>
                                <a href="#" className="post">
                                    <h3 onClick={() => showAboutUser()}>About</h3>
                                </a>
                            </Col>
                            <Col>
                                <Link to="/feeds" className="post">
                                    <h3>Feeds</h3>
                                </Link>
                            </Col>
                            <Col>
                                <a href="#" className="post">
                                    <h3 onClick={logout}>Sign out</h3>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            {
                                (userPosts)?<UserCreatedPostsComponent />:null
                            }
                            {
                                (aboutUser)?<AboutUserComponent />:null
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentCoach: selectCurrentCoach,
});
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoachProfileComponent));