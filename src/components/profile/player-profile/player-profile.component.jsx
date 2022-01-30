import React, {useState} from "react";
import { Row, Container, Col, Button, Image } from "react-bootstrap";
import playerimg from "../../../assets/img/playerimg.png";
import './player-profile.styles.css'
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {selectCurrentUser} from "../../../redux/user/user.selectors";
import {selectCurrentPlayer} from "../../../redux/player/player.selectors";
import {createStructuredSelector} from "reselect";
import System from "../../../backend/System";
import {signOutStart} from "../../../redux/user/user.actions";
import SpinnerComponent from "../../spinners/page-spinner-component/spinner.component";
import UserCreatedPostsComponent from "../../feeds/user-created-posts/user-created-posts.component";
import AboutUserComponent from "../about-player/about-player.component";

const PlayerProfileComponent = ({ currentUser, currentPlayer, signOutStart, history }) => {
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
            {
                (!currentPlayer)?
                 <SpinnerComponent /> :
                    <div>
                        <div className="player">
                            <Container className="profile-container" fluid>
                                <div className="coachheader">
                                    <Image src={System.userImagePath(user.image)} className="coachimg" />
                                    <Button
                                        className="profile-btn"
                                        onClick={() => history.push('/update-player-profile')}
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
                                            Talented Football Player, favorite Wing::
                                            <span style={{ display: "block" }}>
                           {currentPlayer.favoriteWingNo}. Born, {currentPlayer.dateOfBirth} in {currentPlayer.state}
                            </span>
                                            {currentPlayer.country}
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
            }

        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentPlayer: selectCurrentPlayer,
});
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerProfileComponent));