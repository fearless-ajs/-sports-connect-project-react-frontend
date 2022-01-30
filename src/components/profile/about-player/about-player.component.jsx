import React from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const AboutUserComponent = ({ currentUser }) => {

    return (
        <h2>My Information</h2>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AboutUserComponent);