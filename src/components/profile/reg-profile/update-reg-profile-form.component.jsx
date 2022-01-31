import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import ButtonSpinner from "../../spinners/button-spinner.component";
import {selectCurrentUser, selectCurrentUserLoadingStatus} from "../../../redux/user/user.selectors";
import System from "../../../backend/System";
import {updateProfileStart} from "../../../redux/user/user.actions";
import player from "../../../assets/img/secondBall.png";
import logo from "../../../assets/img/logo-dark.png";
import history from "../../../history";
import icon1 from "../../../assets/img/facebookicon.png";
import icon3 from "../../../media/icons8-linkedin-48 (1).png";
import {Link} from "react-router-dom";


class UpdateRegProfileFormComponent extends React.Component{
    constructor(props) {
        super(props);

        const { currentUser: { user } } = this.props;
        this.state = {
            name: user.name,
            phone: user.phone,
            image: ''
        }
        this.userImage = user.image;


    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleFileChange = (event) => {
        const { files, name } = event.target;
        this.setState({ [name]: files[0] });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { name, phone, image  } = this.state;
        // Create the formData
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('image', image);

        //Submit Form
        this.props.updateProfileStart(formData)
    }

    render() {
        return (
            <div className="" >
                <div style={{ textAlign: "center", marginTop: "40px", width: "90%" }}>
                    <h3 style={{ color: "#00a01e" }}>Update registration details</h3>
                    <Image
                        src={System.userImagePath(this.props.currentUser.user.image)}
                        style={{
                            borderRadius: "50%",
                            maxWidth: "23%"
                        }}
                    />
                </div>

                <div className="">
                    <Form
                        className="form-group col-lg-8"
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Group controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Fullname"
                                name="name"
                                value={this.state.name}
                                style={{
                                    backgroundColor: "#BFE7C7",
                                    borderRadius: "20px",
                                    marginTop: "2rem",
                                    height: "3rem",
                                }}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                value={this.state.phone}
                                style={{
                                    backgroundColor: "#BFE7C7",
                                    borderRadius: "20px",
                                    marginTop: "2rem",
                                    height: "3rem",
                                }}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="validationCustomPassword">
                            <p>Upload profile picture</p>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="file"
                                    name='image'
                                    onChange={this.handleFileChange}
                                    style={{
                                        backgroundColor: "#F3FAF6",
                                        borderRadius: "10px",
                                        width: "100%",
                                        height: "2rem",
                                        paddingRight: ".5rem",
                                    }}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="validationCustomPassword">
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
                                {this.props.isLoading?(<ButtonSpinner />): 'Update profile'}
                            </Button>
                        </Form.Group>

                    </Form>
                </div>
            </div>
        )

    }

   }

const mapStateToProps = createStructuredSelector({
    isLoading: selectCurrentUserLoadingStatus,
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    updateProfileStart: formData => dispatch(updateProfileStart({formData}))
});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateRegProfileFormComponent);