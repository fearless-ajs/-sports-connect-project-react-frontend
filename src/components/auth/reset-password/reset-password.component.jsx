import React, {useEffect, useState} from "react";
import {Row, Container, Col, Button, Form} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import './reset-password.styles.css'
import {connect} from "react-redux";
import {selectCurrentUserLoadingStatus} from "../../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {verificationStart} from "../../../redux/user/user.actions";
import ButtonSpinner from "../../spinners/button-spinner.component";
import EmailResetFormComponent from "./email-reset-form.component";
import NewPasswordFormComponent from "./new-password-form.component";

const ResetPasswordComponent = () => {


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
                    Reset you account password
                </h2>
                <p id="paragraph">
                  We are here for you. Please enter the email you registered
                    with on sportspadi.{" "} A password reset link will be sent to the
                    mail for confirmation.
                </p>
              </div>
                <EmailResetFormComponent />
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


export default ResetPasswordComponent
