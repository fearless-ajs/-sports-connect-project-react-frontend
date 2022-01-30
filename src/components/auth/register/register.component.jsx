import React, { useState, useContext } from "react";
import './register.styles.css'
import {
  Row,
  Container,
  Col,
  Image,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import player from "../../../media/secondBall.png";
import logo from "../../../media/sportspadi-logo.png";
import icon1 from "../../../media/facebookicon.png";
import icon2 from "../../../media/instagramicon.png";
import icon3 from "../../../media/icons8-linkedin-48 (1).png";
import {createStructuredSelector} from "reselect";
import {selectCurrentUserLoadingStatus} from "../../../redux/user/user.selectors";
import {signUpStart} from "../../../redux/user/user.actions";
import {connect} from "react-redux";
import ButtonSpinner from "../../spinners/button-spinner.component";
import history from "../../../history";
import {Link} from "react-router-dom";

const RegisterComponent = ({ signUpStart, isLoading }) => {
    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, phone, password, confirmPassword } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ name, email, phone,  password, confirmPassword });

    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
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
                <h5 style={{ textAlign: "center", fontFamily: "Flutter" }}>
                  Our singular mission is to bring{" "}
                  <span style={{ display: "block" }}>
                    African Sports and it's Stars to the limelight.
                  </span>
                </h5>
              </div>
            </Col>
            <Col>
              <div className="signup2">
                <Image
                  src={logo}
                  style={{ marginTop: "1.5rem" }}
                  className="image"
                  onClick={() => history.push('/')}
                />
                <h2 style={{ color: "#00a01e", fontFamily: "Flutter" }}>
                  Create Account
                </h2>
                <Form
                  className="form-group col-lg-8"
                  noValidate
                  style={{ fontFamily: "Flutter" }}
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Fullname"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#BFE7C7",
                        borderRadius: "20px",
                        marginTop: "1.5rem",
                        height: "3rem",
                      }}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="validationEmail"
                    novalidate
                  >
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#BFE7C7",
                        borderRadius: "20px",
                        marginTop: "1.5rem",
                        height: "3rem",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="validationEmail"
                    novalidate
                  >
                    <Form.Control
                      required
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#BFE7C7",
                        borderRadius: "20px",
                        marginTop: "1.5rem",
                        height: "3rem",
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="validationCustomPassword"
                  >
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#BFE7C7",
                        borderRadius: "20px",
                        marginTop: "1rem",
                        height: "3rem",
                      }}
                    />
                    <Form.Control
                      required
                      type="password"
                      placeholder="Verify Password"
                      value={confirmPassword}
                      name="confirmPassword"
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#BFE7C7",
                        borderRadius: "20px",
                        marginTop: "1.5rem",
                        height: "3rem",
                      }}
                    />

                    <Button
                      className="registerbtn"
                      style={{
                        width: "100%",
                        fontWeight: 400,
                        marginTop: "1.5rem",
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
                        {isLoading?(<ButtonSpinner />): 'Register'}
                    </Button>
                  </Form.Group>
                </Form>
                <h4>or Sign Up Using</h4>
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
                    marginTop: "1rem",
                    fontFamily: "Flutter",
                  }}
                >
                  Already have an account? <Link to='/login' >
                    Login
                </Link>{" "}
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});
const mapStateToProps = createStructuredSelector({
    isLoading: state => selectCurrentUserLoadingStatus(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
