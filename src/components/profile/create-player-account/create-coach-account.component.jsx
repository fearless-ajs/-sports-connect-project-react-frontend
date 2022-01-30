import React, {useState} from "react";
import './create-coach-account.styles.css'
import { Row, Container, Col, Button, Image, Form } from "react-bootstrap";
import soccerkick from "../../../assets/img/soccerkick2.png";
import coach from "../../../assets/img/coach.png";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import ButtonSpinner from "../../spinners/button-spinner.component";
import {registerCoachStart} from "../../../redux/coach/coach.actions";
import {selectCurrentCoachLoadingStatus} from "../../../redux/coach/coach.selectors";


const CreateCoachAccountComponent = ({ isLoading, registerCoachStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        dateOfBirth: '',
        nationality: '',
        city: '',
        state: '',
        height: '',
        club: '',
        phone: '',
        linkedInPageLink: ''
    });
    const { dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink } = userCredentials;

    const handleSubmit = event => {
        event.preventDefault();
        registerCoachStart({ dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink })
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };

    return (
        <div className="profile">
            <div className="playerReg">
                <Container>
                    <h2>Create your profile as Coach</h2>
                    <Row>
                        <Col md={5}>
                            <Form
                                noValidate
                                onSubmit={handleSubmit}
                                // validated={validated}
                                // onSubmit={handleSubmit}
                            >
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationemail"
                                    novalidate
                                >
                                    <Form.Control
                                        type="date"
                                        placeholder="Date of birth"
                                        name='dateOfBirth'
                                        value={dateOfBirth}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationpassword"
                                >
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nationality"
                                        name='nationality'
                                        value={nationality}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="validationpassword"
                                >
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="State"
                                        name='state'
                                        value={state}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </Form.Group>


                                <Form.Group
                                    className="mb-3"
                                    controlId="validationpassword"
                                >
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="City"
                                        name='city'
                                        value={city}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationpassword"
                                >
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Height"
                                        value={height}
                                        onChange={handleChange}
                                        name='height'
                                        className="form-input"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationpassword"
                                >
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Club"
                                        value={club}
                                        name='club'
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationpassword"
                                >
                                    <Form.Control
                                        required
                                        type="number"
                                        name='phone'
                                        onChange={handleChange}
                                        value={phone}
                                        placeholder="Phone number"
                                        className="form-input"
                                    />
                                </Form.Group>
                                <Form.Group
                                        className="mb-3"
                                        controlId="validationpassword"
                                    >
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="linkedIn profile link"
                                            name='linkedInPageLink'
                                            value={linkedInPageLink}
                                            onChange={handleChange}
                                            className="form-input"
                                        />

                                    <p
                                        style={{
                                            textAlign: "left",
                                            color: "#565555",
                                            fontSize: "11px",
                                            marginLeft: "20px",
                                            marginTop: "1rem",
                                        }}
                                    >
                            <span
                                style={{
                                    color: "#000",
                                }}
                            >
                              Terms and Conditions: {""}
                            </span>
                                        I give permission to show
                                        my CV details to other interested parties. We
                              may occasionally send you e-mails from time to
                              time with latest news and updates.

                              If you agree with the above
                                        terms please tick this box.<br/>
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            id="terms"
                                            style={{
                                                marginLeft: "5px",
                                            }}
                                        />
                                    </p>
                                    <Button
                                        type="submit"
                                        style={{
                                            width: "60%",
                                            fontWeight: 400,
                                            marginRight: "9rem",
                                            marginTop: "1rem",
                                            fontSize: "20px",
                                            padding: "4px 3px",
                                            borderRadius: "30px",
                                            color: "#fff",
                                            backgroundColor: "#00A01E",
                                        }}
                                        variant="outline-success custon"
                                    >
                                        {isLoading?(<ButtonSpinner />): 'Create Account'}
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Image src={soccerkick} className="image2" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    registerCoachStart: userCredentials => dispatch(registerCoachStart(userCredentials))
});

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectCurrentCoachLoadingStatus(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateCoachAccountComponent);