import React, {useEffect} from "react";
import {Row, Container, Col, Button, Form} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import './verifyemail.styles.css'
import {connect} from "react-redux";
import {selectCurrentUserLoadingStatus} from "../../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {verificationStart} from "../../../redux/user/user.actions";
import ButtonSpinner from "../../spinners/button-spinner.component";

const VerifyEmailComponent = ({ match, isLoading, verificationStart  }) => {
    useEffect(() => {
        verificationStart(match.params.token);
    }, [verificationStart]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        verificationStart(match.params.token);
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
                    Verifying your email account
                </h2>
                <p id="paragraph">
                  Thank you for choosing us. Sportspadi gives you the best
                  connection you need to take your career to the{" "}
                  <span style={{ display: "block" }}>next level</span>
                </p>
                <p>
                  Confirming your account will give you full access to Sport
                  spadi and all future notifications will be sent to{" "}
                  <span style={{ display: "block" }}>your email</span>
                </p>
              </div>
                <Form
                    onSubmit={handleSubmit}
                >
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
                        {isLoading?(<ButtonSpinner />): 'Verify email'}
                    </Button>
                </Form>
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

//For setting values on the state with redux
const mapDispatchToProps = dispatch => ({
    verificationStart: token => dispatch(verificationStart({ token })),
});

const mapStateToProps = createStructuredSelector({
    isLoading: selectCurrentUserLoadingStatus,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VerifyEmailComponent));
