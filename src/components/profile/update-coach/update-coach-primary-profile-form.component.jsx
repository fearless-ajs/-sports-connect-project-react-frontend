import React, {useState} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import ButtonSpinner from "../../spinners/button-spinner.component";
import {selectCurrentPlayer, selectCurrentPlayerLoadingStatus} from "../../../redux/player/player.selectors";
import {updatePlayerPrimaryProfileStart} from "../../../redux/player/player.actions";
import {selectCurrentCoach, selectCurrentCoachLoadingStatus} from "../../../redux/coach/coach.selectors";
import {updateCoachPrimaryProfileStart} from "../../../redux/coach/coach.actions";


const UpdateCoachPrimaryProfileFormComponent = ({ currentCoach, isLoading,   updateCoachPrimaryProfileStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        dateOfBirth: currentCoach.dateOfBirth,
        nationality: currentCoach.nationality,
        city: currentCoach.city,
        state: currentCoach.state,
        height: currentCoach.height,
        club: currentCoach.club,
        phone: currentCoach.phone,
        linkedInPageLink: currentCoach.linkedInPageLink
    });
    const { dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink } = userCredentials;

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the update
        updateCoachPrimaryProfileStart({ dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink });

    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    }

    return (
        <div className="" style={{ justifyContent: "center" }}>

            <hr />
            <Row>
                <Col md={8}>
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
                            </p>
                            <Button
                                type="submit"
                                style={{
                                    width: "60%",
                                    fontWeight: 400,
                                    marginRight: "9rem",
                                    marginTop: ".5rem",
                                    fontSize: "20px",
                                    padding: "4px 3px",
                                    borderRadius: "30px",
                                    color: "#fff",
                                    backgroundColor: "#00A01E",
                                }}
                                variant="outline-success custon"
                            >
                                {isLoading?(<ButtonSpinner />): 'Update profile'}
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectCurrentCoachLoadingStatus,
    currentCoach: selectCurrentCoach
});

const mapDispatchToProps = dispatch => ({
    updateCoachPrimaryProfileStart: userCredentials => dispatch(updateCoachPrimaryProfileStart(userCredentials))
});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateCoachPrimaryProfileFormComponent);