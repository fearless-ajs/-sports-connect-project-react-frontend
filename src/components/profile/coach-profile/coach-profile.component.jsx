import React from "react";
import { Row, Container, Col, Button, Image } from "react-bootstrap";
import playerimg from "../../../assets/img/playerimg.png";
import './coach-profile.styles.css'

class CoachProfileComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: "player"
        }
    }

    render() {
        return (
          <div className="profile">
            {this.state.profile == "player" ? (
              <div>
                <div className="player">
                  <Container className="profile-container" fluid>
                    <div className="coachheader">
                      <Image src={playerimg} className="coachimg" />
                      <Button
                        className="profile-btn"
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
                        <h2>LEONARD BRUSE</h2>
                        <p>
                          Talented Football Player also known as:
                          <span style={{ display: "block" }}>
                            Becks. Born, 2 May 1995 in Kano
                          </span>
                          Nigeria
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
                        <a href className="post">
                          <h3>Posts</h3>
                        </a>
                      </Col>
                      <Col>
                        <a href="/# " className="post">
                          <h3>About</h3>
                        </a>
                      </Col>
                      <Col>
                        <a href="/#" className="post">
                          <h3>Media</h3>
                        </a>
                      </Col>
                      <Col>
                        <a href="/#" className="post">
                          <h3>Activities</h3>
                        </a>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            ) : (
              <div className="coach">

              </div>
            )}
          </div>
        );
    }
}

export default CoachProfileComponent