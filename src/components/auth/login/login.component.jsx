import React from "react";
import {
  Row,
  Container,
  Col,
  Image,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import player from "../../../assets/img/secondBall.png";
import logo from "../../../assets/img/logo-dark.png";
import icon1 from "../../../assets/img/facebookicon.png";
import icon3 from "../../../media/icons8-linkedin-48 (1).png";
import { useState } from "react";
import "./login.styles.css";
import {signInStart} from "../../../redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {
    selectCurrentUserLoadingStatus,
    selectCurrentUserLoginError,
    selectCurrentUserSessionError
} from "../../../redux/user/user.selectors";
import {connect} from "react-redux";
import ButtonSpinner from "../../spinners/button-spinner.component";
import {Link} from "react-router-dom";
import history from "../../../history";

const LogInComponent = ({ signInStart, loginError, sessionError, isLoading }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userCredentials;


    const handleSubmit = async (event) => {
        event.preventDefault();
        signInStart(email, password);
    }


    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };

    return (
    <>
      <div className="signup">
        <Container fluid>
          <Row>
            <Col md={5}>
              <div className="signup1">
                <Image
                  fluid
                  src={player}
                  style={{
                    marginLeft: "1rem",
                    marginTop: "8rem",
                  }}
                />
                <div />
                <p style={{ textAlign: "center" }}>
                  Our singular mission is to bring{" "}
                  <span style={{ display: "block" }}>
                    African Sports and it's Stars to the limelight.
                  </span>
                </p>
              </div>
            </Col>
            <Col>
              <div className="signup2">
                <Image
                  src={logo}
                  style={{ marginTop: "2rem" }}
                  className="image"
                  onClick={() => history.push('/')}
                />
                <h2 style={{ color: "#00a01e" }}>Login to your dashboard</h2>
                <div className="">
                  <Form
                    className="form-group col-lg-8"
                    onSubmit={handleSubmit}
                  >
                    <Form.Group controlId="validationCustom01">
                      <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        style={{
                          backgroundColor: "#BFE7C7",
                          borderRadius: "20px",
                          marginTop: "2rem",
                          height: "3rem",
                        }}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="validationCustomPassword">
                      <InputGroup hasValidation>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          name="password"
                          required
                          style={{
                            backgroundColor: "#BFE7C7",
                            borderRadius: "20px",
                            marginTop: "2rem",
                            height: "3rem",
                          }}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <Button
                        className="registerbtn"
                        style={{
                          width: "100%",
                          fontWeight: 400,
                          marginTop: "2rem",
                          fontSize: "20px",
                          padding: "7px 5px",
                          borderRadius: "20px",
                          color: "#fff",
                          backgroundColor: "#00A01E",
                          border: "0",
                        }}
                        variant="outline-primary custon"
                        type="submit"
                      >
                          {isLoading?(<ButtonSpinner />): 'Login'}
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
                <div className="foot">
                  <h4>or Sign In Using</h4>
                  <div className="socialicon">
                    <a href="/#" style={{ marginRight: "0.5rem" }}>
                      <Image src={icon1} />
                    </a>
                    <a href="/#" style={{ marginLeft: "0.5rem" }}>
                      <Image src={icon3} />
                    </a>
                  </div>
                  <h4
                    style={{
                      marginTop: "2rem",
                      fontFamily: "Flutter",
                    }}
                    className="signupp"
                  >
                    Don't have an account? <Link to='/signup' >
                      Sign Up
                  </Link>
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

//For setting values on the state with redux
const mapDispatchToProps = dispatch => ({
    signInStart: (email, password) => dispatch(signInStart({ email, password })),
});
const mapStateToProps = createStructuredSelector({
    loginError: selectCurrentUserLoginError,
    sessionError: selectCurrentUserSessionError,
    isLoading: selectCurrentUserLoadingStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInComponent);
