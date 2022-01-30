import React from "react";
import './homescreen.styles.css'
import { Row, Container, Col, Image, Button } from "react-bootstrap";
import dealpng from "../../assets/img/Business-deal.png";
import rafiki from "../../assets/img/Group 12.png";
import second from "../../assets/img/Business deal-1.png";
import soccer from "../../assets/img/soccerkick.png";
import logo2 from "../../assets/img/logo-light.png";
import {Link, withRouter} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser, selectCurrentUserLoadingStatus} from "../../redux/user/user.selectors";
import {signOutStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";
import ButtonSpinner from "../spinners/button-spinner.component";

const HomeScreen = ({ currentUser, history, signOutStart, isLoading }) => {
  let newUser = false;
  let agent = false;
  let player = false;
  if (currentUser){
    currentUser.roles.forEach(role => {
      // If user is a new user
      if (role.role.name === 'new-user'){
        newUser = true;
      }
      // If user is a coach
      if (role.role.name === 'agent'){
        agent = true;
      }
      // If user is a player
      if (role.role.name === 'player'){
        player = true;
      }
    });
  }

  const logout = () => {
    signOutStart()
  }

  return (
      <>
        <div className="firstbox">
          <Container>
            <Row>
              <Col md={7}>
                <div className="firsttext">
                  <h1>
                    We are helping Local Sports{" "}
                    <span style={{ display: "block" }}>
                    Talents join their dream club.
                  </span>
                  </h1>
                  <p>
                    With machine learning technology, we bridge the gap{" "}
                    <span style={{ display: "block" }}>
                    between local Sports talents and international clubs.
                  </span>
                  </p>
                  <Button
                      style={{
                        width: "200px",
                        fontWeight: 400,
                        marginTop: "2rem",
                        fontSize: "20px",
                        padding: "10px 10px",
                        borderRadius: "30px",
                        fontFamily: "Flutter",
                      }}
                      variant="outline-success custom"
                      onClick={() => history.push('/signup')}
                  >
                    Get Started
                  </Button>
                </div>
              </Col>
              <Col style={{ marginTop: "5rem" }}>
                <Image fluid src={soccer} className="firstimg" />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="secondbox" style={{ fontFamily: "Flutter" }}>
          <Container>
            <Row>
              <Col>
                <h1 className="secondh1">
                  Find open agents{" "}
                  <span style={{ display: "block" }}>and get connected</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Image fluid src={second} />
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={6}>
                    <div className="clubs">
                      <div className="club">Arsenal Fc</div>
                      <div className="club">OBNAcademy</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="clubs">
                      <div className="club">NBA</div>
                      <div className="club">Liverpool FC</div>
                    </div>
                  </Col>
                </Row>

                <div className="secondbutton">
                  {
                    (player || agent || newUser)?
                        <Button
                            style={{
                              width: "90%",
                              borderRadius: "30px",
                              marginBottom: "2rem",
                            }}
                            className="btn2"
                            variant="outline-success custon"
                            onClick={() => history.push('/feeds')}
                        >
                          <p id="secondText">Feeds</p>
                        </Button>
                        :
                        <Button
                            style={{
                              width: "90%",
                              borderRadius: "30px",
                              marginBottom: "2rem",
                            }}
                            className="btn2"
                            variant="outline-success custon"
                            onClick={() => history.push('/login')}
                        >
                          <p id="secondText">sign in</p>
                        </Button>
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="thirdbox">
          <Container>
            <div className="thirddiv text-center mt-auto">
              <h1 className="thirdh1">
                "Talent is equally distributed,{" "}
                <span style={{ display: "block" }}>opportunity is not"</span>
              </h1>
            </div>
          </Container>
        </div>

        <div className="fourthbox">
          <Container>
            <Row>
              <Col md={7}>
                <div className="fourthtext">
                  <h1 className="fourthh1">
                    Find top verified{" "}
                    <span style={{ display: "block" }}>Local Talents!</span>
                  </h1>
                  <p className="fourthp">
                    With our verified Sports talent pool, managers{" "}
                    <span>& coaches can now make informed decision</span>
                  </p>
                  {
                    (newUser || player)?   <Button
                            style={{
                              width: "200px",
                              fontWeight: 400,
                              marginTop: "1rem",
                              marginBottom: "5rem",
                              fontSize: "20px",
                              padding: "5px 15px",
                              borderRadius: "30px",
                              color: "#000",
                              fontFamily: "Flutter",
                            }}
                            variant="outline-light success"
                            onClick={() => window.open("/register-coach", "_self")}
                        >
                          Sign up as Agent
                        </Button> :

                        <Button
                            style={{
                              width: "200px",
                              fontWeight: 400,
                              marginTop: "1rem",
                              marginBottom: "5rem",
                              fontSize: "20px",
                              padding: "5px 15px",
                              borderRadius: "30px",
                              color: "#000",
                              fontFamily: "Flutter",
                            }}
                            variant="outline-light success"
                            onClick={() => window.open("/signup", "_self")}
                        >
                          Find Talents
                        </Button>
                  }
                </div>
              </Col>
              <Col className="mt-3" md={5}>
                <Image fluid src={dealpng} />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="fifthbox">
          <Container>
            <div className="fifthdiv">
              <Row className="justify-content-md-center">
                <Col md={6}>
                  <h1 className="fifthh1 text-center">
                    Your dream team awaits you!
                  </h1>
                  <div>
                    <Image
                        className="justify-content-md-center my-5"
                        fluid
                        src={rafiki}
                    />
                  </div>
                  <div className="text-center fifthbutton">
                    <Button
                        style={{
                          width: "50%",
                          borderRadius: "30px",
                          fontFamily: "Flutter",
                        }}
                        variant="outline-success custon"
                        onClick={() => history.push('/signup')}
                    >
                      <span id="fifthbuttontext">Get Verified Now</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div
            className="sixthbox"
            style={{ height: "auto", paddingBottom: "5rem" }}
        >
          <Container>
            <Row>
              <Col md={6}>
                <iframe
                    className="#"
                    src=""
                    style={{ height: "15rem" }}
                    title="sports"
                ></iframe>
              </Col>
              <Col md={6}>
                <h1 id="sixthh1" style={{ marginTop: "4rem" }}>
                  How Sportspadi <span style={{ display: "block" }}>works</span>
                </h1>
                <p id="sixthp">
                  Create a Sportspadi account in a few simple
                  <span style={{ display: "block" }}>
                  steps, and get verified
                </span>
                </p>
                <div>
                  <Button
                      style={{
                        width: "30%",
                        borderRadius: "30px",
                        padding: "7px 0",
                        marginTop: "1.5rem",
                        background: " #00A01E",
                        fontFamily: "Flutter",
                      }}
                      variant="success"
                  >
                    Learn more
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="seventhbox">
          <Container fluid>
            <Row>
              <Col>
                <div className="d-flex justify-content-center">
                  <h2>
                    Join your colleagues, Team-mates,
                    <span style={{ display: "block" }}>
                    and friends on Sportspadi
                  </span>
                  </h2>
                </div>
                <div>
                  <Button
                      style={{
                        width: "auto",
                        borderRadius: "30px",
                        padding: "9px 5rem",
                        marginTop: "30rem",
                        background: " #00A01E",
                        fontFamily: "Flutter",
                      }}
                      variant="success"
                      onClick={() => history.push('/signup')}
                  >
                    Get Started
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer">
          <div className="foot1">
            <div>
              <Link to="/">
                <Image src={logo2} fluid />
              </Link>
              <div className="dropdown">
                <select style={{ fontFamily: "Flutter" }}>
                  <option value="1">English</option>
                  <option value="2">English</option>
                  <option value="3">English</option>
                  <option value="4">English</option>
                  <option value="5">English</option>
                </select>
                <p style={{ color: "#fff", marginTop: "3rem", fontSize: "13px" }}>
                  © 2021 Penciledge
                </p>
                <div className="socials">
                  <p>
                    <a href="/#">Twitter</a>
                  </p>
                  <p style={{ marginRight: "5px" }}>.</p>
                  <p>
                    <a href="/#"> Instagram </a>
                  </p>
                  <p style={{ marginRight: "5px" }}>.</p>
                  <p>
                    <a href="/#"> Facebook</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="footcontents">
              <div className="footcontent">
                <h1>Company</h1>
                <a href="/#">
                  <h3>About</h3>
                </a>
                <a href="/#">
                  <h3>Careers</h3>
                </a>
                <a href="/#">
                  <h3>Patnership</h3>
                </a>
                <a href="/#">
                  <h3>About</h3>
                </a>
              </div>
            </div>

            <div className="footcontents">
              <div className="footcontent">
                <h1>Products</h1>
                <a href="/#">
                  <h3>For players</h3>
                </a>
                <a href="/#">
                  <h3>For agents</h3>
                </a>
                <a href="/#">
                  <h3>Technology</h3>
                </a>
                <a href="/#">
                  <h3>Verification</h3>
                </a>
              </div>
            </div>

            <div className="footcontents">
              <div className="footcontent">
                <h1>Legal</h1>
                <a href="/#">
                  <h3>Terms of use</h3>
                </a>
                <a href="/#">
                  <h3>Privacy Policy</h3>
                </a>
                <a href="/#">
                  <h3>User agreement</h3>
                </a>
                <a href="/#">
                  <h3>Cookie policies</h3>
                </a>
              </div>
            </div>
          </div>

          <Row>
            <Col>
              <p id="foottext">
                Sportspadi is a Sports Talent Pool platform that connects local
                sports talents to international clubs and{" "}
                <span style={{ display: "block" }}>
                {" "}
                  agencies using Machine Learning technology.
              </span>
              </p>
            </Col>
          </Row>
        </div>
      </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectCurrentUserLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));
