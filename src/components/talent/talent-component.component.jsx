import React from 'react';
import {Button, Card} from "react-bootstrap";
import System from "../../backend/System";
import history from "../../history";
import { connect } from "react-redux";
import bookTalentStart from '../../redux/booking/booking.actions'
import {createStructuredSelector} from "reselect";
import {selectBookingLoadingStatus} from "../../redux/booking/booking.selectors";


const TalentComponentComponent = ({ talent }) => {
  return (
      <Card
          style={{ width: "50rem", borderRadius: "20px", marginBottom: "20px" }}
          className="text-left offset-3"
      >
        <Card.Body>
          <img
              src={System.userImagePath(talent.user.image)}
              alt="Talent Image"
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                float: "left",
                marginRight: "2rem",
              }}
          />
          <Card.Title
              style={{
                fontFamily: "Flutter",
              }}
          >
              {talent.user.name}
          </Card.Title>
          <Card.Text
              style={{
                color: "#979696",
                display: "flex",
                justifyContent: "space-between",
              }}
          >
            <div>
                <span>
                       Favorite Wing: {talent.favoriteWingNo}. Born, {talent.dateOfBirth} in {talent.state}
                </span>

            </div>
            <div>
              <Button
                  className="btn"
                  style={{
                    fontWeight: 400,
                    fontSize: "15px",
                    marginRight: "10px",
                    borderRadius: "20px",
                    padding: "5px 2rem",
                    color: "#70C980",
                    backgroundColor: "#F3FAF6",
                  }}
                  variant="outline-success"
                  type="submit"
                  onClick={() => history.push(`/talent/${talent._id}`) }
              >
                profile
              </Button>

                <Button
                    className="btn"
                    style={{
                        fontWeight: 400,
                        fontSize: "15px",
                        borderRadius: "20px",
                        padding: "5px 2rem",
                        color: "#70C980",
                        backgroundColor: "#F3FAF6",
                    }}
                    variant="outline-success"
                    type="submit"
                >
                    Book
                </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

const mapDispatchToProps = dispatch => ({
   bookTalent: receiverId => dispatch(bookTalentStart(receiverId)),
});
const mapStateToProps = createStructuredSelector({
   isLoading: selectBookingLoadingStatus
});
export default connect(mapStateToProps, mapDispatchToProps)(TalentComponentComponent)
