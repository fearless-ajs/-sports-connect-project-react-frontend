import React, {useState} from "react";
import { Row, Container, Col, Button, Image } from "react-bootstrap";
import './talent-profile.styles.css'
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {selectCurrentUser} from "../../../redux/user/user.selectors";
import {selectCurrentPlayer} from "../../../redux/player/player.selectors";
import {createStructuredSelector} from "reselect";
import System from "../../../backend/System";
import {signOutStart} from "../../../redux/user/user.actions";
import history from "../../../history";
import UserCreatedPostsComponent from "../../feeds/user-created-posts/user-created-posts.component";
import AboutUserComponent from "../../profile/about-player/about-player.component";

const TalentProfileComponent = ({ player }) => {
    const { user } = player;

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
                                onClick={() => history.push('/book-talent')}
                                variant="outline-success custom"
                            >
                                Book Talent
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
                                    Talented Football Player, favorite Wing:
                                    <span style={{ display: "block" }}>
                           {player.favoriteWingNo}. Born, {player.dateOfBirth} in {player.state}
                            </span>
                                    {player.country}
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
                        </Row>
                        <Row>
                            {
                                (userPosts)?<UserCreatedPostsComponent userId={user._id} />:null
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

export default TalentProfileComponent;