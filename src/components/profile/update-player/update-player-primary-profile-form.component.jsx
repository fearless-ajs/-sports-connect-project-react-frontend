import React, {useState} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import ButtonSpinner from "../../spinners/button-spinner.component";
import {selectCurrentPlayer, selectCurrentPlayerLoadingStatus} from "../../../redux/player/player.selectors";
import {updatePlayerPrimaryProfileStart} from "../../../redux/player/player.actions";


const UpdatePlayerPrimaryProfileFormComponent = ({ currentPlayer, isLoading, updatePlayerPrimaryProfileStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        favoriteWingNo: currentPlayer.favoriteWingNo,
        dateOfBirth: currentPlayer.dateOfBirth,
        nationality: currentPlayer.nationality,
        city: currentPlayer.city,
        state: currentPlayer.state,
        height: currentPlayer.height,
        club: currentPlayer.club,
        phone: currentPlayer.phone,
        linkedInPageLink: currentPlayer.linkedInPageLink
    });

    const { favoriteWingNo, dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink } = userCredentials;

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the update
       updatePlayerPrimaryProfileStart({ favoriteWingNo, dateOfBirth, nationality, city, state, height, club, phone, linkedInPageLink });

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
                            controlId="validationCustom01"
                        >
                            <Form.Control
                                required
                                type="text"
                                placeholder="Wing"
                                name='favoriteWingNo'
                                value={favoriteWingNo}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </Form.Group>

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
    isLoading: selectCurrentPlayerLoadingStatus,
    currentPlayer: selectCurrentPlayer
});

const mapDispatchToProps = dispatch => ({
    updatePlayerPrimaryProfileStart: userCredentials => dispatch(updatePlayerPrimaryProfileStart(userCredentials))
});
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePlayerPrimaryProfileFormComponent);