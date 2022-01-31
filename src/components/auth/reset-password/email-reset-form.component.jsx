import React, {useState} from "react";
import {Button,  Form} from "react-bootstrap";
import ButtonSpinner from "../../spinners/button-spinner.component";
import Auth from "../../../backend/Auth";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {Link} from "react-router-dom";
const notify = withReactContent(Swal);

const EmailResetFormComponent = () => {
    const [loading, setLoading] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        email: '',
    });
    const { email } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        await setLoading(true);
        Auth.verifyResetPasswordEmail(email).then(response => {
            // If successful redirect t show password
            notify.fire({
                icon: 'success',
                title: 'Reset link sent to your email',
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
            setUserCredentials({ email: '' })
        }).catch(error => {
            notify.fire({
                icon: 'error',
                title: 'Verification failed',
                timerProgressBar: true,
                message: error.message,
                showConfirmButton: false,
                timer: 2000
            });
            setLoading(false);
        })

    }

    return (
        <Form
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
        </Form>

    );
}

export default EmailResetFormComponent