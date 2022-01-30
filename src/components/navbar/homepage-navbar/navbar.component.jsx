import React from "react";
import { Button, Container, Image, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {createStructuredSelector} from "reselect";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import {selectCurrentUser, selectCurrentUserLoadingStatus} from "../../../redux/user/user.selectors";
import {signOutStart} from "../../../redux/user/user.actions";
import System from "../../../backend/System";
import logo from "../../../assets/img/logo-dark.png";


const Header = ({ currentUser, signOutStart,  history, isLoading }) => {
    const logout = () => {
        signOutStart()
    }

    let newUser = false;
    let coach = false;
    let player = false;
    if (currentUser){
        currentUser.roles.forEach(role => {
            // If user is a new user
            if (role.role.name === 'new-user'){
                newUser = true;
            }
            // If user is a coach
            if (role.role.name === 'coach'){
                coach = true;
            }
            // If user is a player
            if (role.role.name === 'player'){
                player = true;
            }
        });
    }

  return (
    <header>
      <Navbar
        variant="light"
        expand="lg"
        collapseOnSelect
        style={{ backgroundColor: "#f2faf6" }}
        className="navbar"
      >
        <Container className="mt-3" >
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image style={{ width: "170px" }} fluid src={logo} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "right" }}>
              {
                  (currentUser)?
                      <Nav className="ml-auto">
                          <div>
                              <Nav.Link>
                                  {
                                      (newUser) ?
                                          <Button
                                              style={{
                                                  width: "135px",
                                                  borderRadius: "30px",
                                                  fontSize: "20px",
                                                  fontWeight: 400,
                                                  fontFamily: "Flutter",
                                              }}
                                              variant="outline-success custom"
                                              onClick={() => history.push('/select-account')}
                                          >
                                              Continue
                                          </Button>
                                          :
                                          <img
                                              onClick={() => history.push(`/feeds`)}
                                              src={(currentUser)? System.userImagePath(currentUser.user.image): ''}
                                              alt=""
                                              style={{
                                                  height: "40px",
                                                  width: "40px",
                                                  borderRadius: "50%",
                                                  cursor: "pointer",
                                                  marginLeft: "1rem",
                                                  marginRight: "1rem"
                                              }}
                                          />
                                  }
                              </Nav.Link>
                          </div>
                      </Nav>
                      :
                      <Nav className="ml-auto">
                          <LinkContainer to="/signup">
                              <Nav.Link href="/signup">
                                  <Button
                                      style={{
                                          width: "135px",
                                          height: "35px",
                                          fontSize: "20px",
                                          fontWeight: 400,
                                          borderRadius: "20px",
                                          background: "#F3FAF6",
                                          paddingBottom: "38px",
                                          fontFamily: "Flutter",
                                      }}
                                      variant="light custom"
                                      onClick={() => history.push('/signup')}
                                  >
                                      Join now
                                  </Button>
                              </Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/login">
                              <Nav.Link>
                                  <Button
                                      style={{
                                          width: "135px",
                                          borderRadius: "30px",
                                          fontSize: "20px",
                                          fontWeight: 400,
                                          fontFamily: "Flutter",
                                      }}
                                      variant="outline-success custom"
                                      onClick={() => history.push('/login')}
                                  >
                                      sign in
                                  </Button>
                              </Nav.Link>
                          </LinkContainer>
                      </Nav>
              }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading: selectCurrentUserLoadingStatus
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
