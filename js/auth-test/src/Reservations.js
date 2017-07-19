import React, { Component } from "react";
import moment from "moment";

class Reservations extends Component {
  render() {
    const { users, reservations } = this.props;
    return (
      <div>
        <h3>Reservations Lists:</h3>
        {reservations.map(reservation =>
          <div key={reservation._id}>
            <div>
              <p>
                <span>
                  {reservation.user.email}
                </span>
                <span>
                  {moment(reservation.createdAt).format("MMM Do, hh:mm:ss")}
                </span>
              </p>
              <p>
                {reservation.info}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Reservations;
