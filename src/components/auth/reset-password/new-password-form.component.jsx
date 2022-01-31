import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ButtonSpinner from "../../spinners/button-spinner.component";
import {Link, withRouter} from 'react-router-dom';
import history from "../../../history";
import Auth from "../../../backend/Auth";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const notify = withReactContent(Swal);


const NewPasswordFormComponent = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        password: '',
        passwordConfirm: ''
    });
    const { password, passwordConfirm } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (password !== passwordConfirm){
            alert('Password does not match')
            return setLoading(false);
        }
        await Auth.chooseNewPassword(match.params.resetToken, password, passwordConfirm).then(response => {
            // If successful redirect t show password
            notify.fire({
                icon: 'success',
                title: 'Password reset successful',
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
            history.push('/login')
        }).catch(error => {
            notify.fire({
                icon: 'error',
                title: 'Reset Error',
                timerProgressBar: true,
                showConfirmButton: false,
                text: error.response.data.message,
                timer: 2500
            });
            setLoading(false);
        });


        // Redirect to login if successful
    }
    return (
        <div>
            <div className="confirmMail">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-body">
                                <h2
                                    style={{
                                        marginTop: "3rem",
                                        textAlign: "center",
                                        marginBottom: "3rem",
                                        fontSize: "23px",
                                        fontFamily: "Flutterwave",
                                    }}
                                >
                                    Choose a new password for your account
                                </h2>
                                <p id="paragraph">
                                    Please enter the password you'll like to attach with
                                    your account on sportspadi.{" "} Please choose the password carefully because you'll be
                                    required to login with it next you try login in.
                                </p>
                            </div>
                            <Form
                                onSubmit={handleSubmit}
                            >
                                <Form.Group controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="New password"
                                        name="password"
                                        value={password}
                                        style={{
                                            backgroundColor: "#BFE7C7",
                                            borderRadius: "20px",
                                            marginTop: "2rem",
                                            height: "3rem",
                                        }}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Confirm password"
                                        name="passwordConfirm"
                                        value={passwordConfirm}
                                        style={{
                                            backgroundColor: "#BFE7C7",
                                            borderRadius: "20px",
                                            marginTop: "2rem",
                                            height: "3rem",
                                        }}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Button
                                    type='submit'
                                    style={{
                                        width: "50%",
                                        fontWeight: 400,
                                        marginTop: "2rem",
                                        fontSize: "20px",
                                        padding: "7px 5px",
                                        borderRadius: "20px",
                                        color: "#fff",
                                        backgroundColor: "#00A01E",
                                        textAlign: "center",
                                        fontFamily:'Flutter'
                                    }}
                                    variant="outline-success custon"
                                >
                                    {loading?(<ButtonSpinner />): 'Reset password'}
                                </Button>
                            </Form>
                            <div className="foot" style={{ marginTop:"20px" }}>
                                <h4>Remember password?</h4>
                                <Link to={'/login'}>Login here</Link>
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
                            <hr
                                style={{
                                    borderTop: "1px solid #000",
                                    marginTop: "4rem",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default withRouter(NewPasswordFormComponent)