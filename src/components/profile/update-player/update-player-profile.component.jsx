import React, {useState} from "react";
import { connect } from "react-redux";
import {
    Row,
    Container,
    Col,
    Image,
    Button,
} from "react-bootstrap";
import player from "../../../media/secondBall.png";
import { createStructuredSelector } from "reselect";
import UpdateRegProfileFormComponent from "../reg-profile/update-reg-profile-form.component";
import {selectCurrentUserLoadingStatus} from "../../../redux/user/user.selectors";
import {Link} from "react-router-dom";
import {selectCurrentPlayerLoadingStatus} from "../../../redux/player/player.selectors";
import UpdatePlayerPrimaryProfileFormComponent from "./update-player-primary-profile-form.component";

const UpdatePlayerProfileComponent = ({ isPrimaryProfileUpdating, isRegProfileLoading }) => {
    const [primaryProfileForm, setPrimaryProfileForm] = useState(true);
    const [regProfileForm, setRegProfileForm] = useState(false);

    const showPrimaryProfileForm = () => {
        setPrimaryProfileForm(true);
        setRegProfileForm(false);
    }

    const showRegProfileForm = () => {
        setRegProfileForm(true);
        setPrimaryProfileForm(false);
    }

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
                                        marginTop: "6rem",
                                    }}
                                />
                                <div />
                                <p style={{ textAlign: "center" }}>
                                    Our singular mission is to bring{" "}
                                    <span style={{ display: "block" }}>
                    African Sports and it's Stars to the limelight.
                        </span>
                                    {
                                        (regProfileForm)?
                                            <Button
                                            disabled={(isPrimaryProfileUpdating || isRegProfileLoading)}
                                            style={{
                                                width: "50%",
                                                border: "1px solid white",
                                                color: "white",
                                                borderRadius: "50px",
                                                fontFamily:'Flutter',
                                                marginTop: ".2rem"
                                            }}
                                            variant="outline-success custon"
                                            onClick={() => showPrimaryProfileForm()}
                                        >
                                            <span id="fifthbuttontext">{(isPrimaryProfileUpdating || isRegProfileLoading)? 'Updating profile...' : 'Update primary profile'}</span>
                                        </Button>
                                            : null
                                    }
                                    {
                                        (primaryProfileForm) ?
                                            <Button
                                            disabled={(isPrimaryProfileUpdating || isRegProfileLoading)}
                                            style={{
                                                width: "50%",
                                                border: "1px solid white",
                                                color: "white",
                                                borderRadius: "50px",
                                                fontFamily:'Flutter',
                                                marginTop: ".2rem"
                                            }}
                                            variant="outline-success custon"
                                            onClick={() => showRegProfileForm()}
                                        >
                                            <span id="fifthbuttontext">{(isPrimaryProfileUpdating || isRegProfileLoading)? 'Updating profile...' : 'Update registration info'}</span>
                                        </Button>
                                            : null
                                    }

                                    <br />
                                    <Link to={'/player-profile'}
                                        style={{
                                            color: "white",
                                            fontSize: "80%",
                                            textDecoration: "underline"
                                        }}
                                    >
                                         Back to profile
                                    </Link>
                                </p>
                            </div>
                        </Col>
                        <Col>
                            {
                                (primaryProfileForm)? <UpdatePlayerPrimaryProfileFormComponent /> : null
                            }
                            {
                                (regProfileForm)? <UpdateRegProfileFormComponent/> : null
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    isPrimaryProfileUpdating: selectCurrentPlayerLoadingStatus,
    isRegProfileLoading: selectCurrentUserLoadingStatus,
});
export default connect(mapStateToProps)(UpdatePlayerProfileComponent);
