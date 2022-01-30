import React from 'react';
import { Container, Card, Button, Form, Navbar } from "react-bootstrap";
import coachimg from "../../assets/img/coachimg.png";
import NavBar from "../navbar/feeds-top-navbar/feeds-top-navbar.components"
import './interview.styles.css'

const Interview = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <div className="first-card-body">
          <div className="header-3">
            <h3>Interview Request</h3>
          </div>
          <Card className="interview-card">
            <Card.Body className="interview-card-body">
              <img src={coachimg} alt="" className="interview-image" />
              <div className="interview-body">
                <Card.Title>Mid-fielder scout interview</Card.Title>
                <Card.Text>
                  <div style={{ color: "#979696", fontSize: "15px" }}>
                    Hey there, saw your profile and quite impressive. Let’s meet
                    to
                    <span style={{ display: "block" }}>
                      discuss a few things...
                    </span>
                  </div>
                </Card.Text>
              </div>
              <div>
                <Button
                  className="interview-btn"
                  variant="outline-success"
                  type="submit"
                >
                  View
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <Card className="interview-card">
          <Card.Body className="interview-card-body">
            <img src={coachimg} className="interview-image" alt="" />
            <div className="interview-body">
              <Card.Title>[name] is looking for Mid-fielder</Card.Title>
              <Card.Text style={{ color: "#979696", fontSize: "15px" }}>
                Hey there, saw your profile and quite impressive. Let’s meet to
                discuss a few things on joining our team - Mancity. Can we
                schedule a call on Zoom for discuss our terms.?
              </Card.Text>
              <div>
                <Button
                  className="btn"
                  variant="outline-success"
                  type="submit"
                  className="interview-btn"
                  style={{ marginLeft: "0", marginTop: "0" }}
                >
                  Accept
                </Button>
                <Button
                  className="btn"
                  variant="outline-success"
                  type="submit"
                  className="interview-btn"
                  style={{ marginLeft: "1rem", marginTop: "0" }}
                >
                  Decline
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Interview;
