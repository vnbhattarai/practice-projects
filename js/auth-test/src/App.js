import React, { Component } from "react";
import Login from "./Login";
import App from "./Feathers";
import { Link } from "react-router-dom";

// class Application extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   componentDidMount() {
//     const reservations = App.service("reservations");
//     const users = App.service("users");

//     // Try to authenticate with the JWT stored in localStorage
//     App.authenticate()
//       .then(response => {
//         console.log("Authenticated!", response);
//         return App.passport.verifyJWT(response.accessToken);
//       })
//       .then(payload => {
//         console.log("JWT Payload", payload);
//         return App.service("users").get(payload.userId);
//       })
//       .then(user => {
//         App.set("user", user);
//         console.log("User", App.get("user"));
//       })
//       .catch(function(error) {
//         console.error("Error authenticating!", error);
//         this.setState({ login: null });
//       });

// // On successfull login
// App.on("authenticated", login => {
//   // Get all users and reservations
//   Promise.all([
//     reservations.find({
//       query: {
//         $sort: { createdAt: -1 },
//         $limit: 25
//       }
//     }),
//     users.find()
//   ]).then(([messagePage, userPage]) => {
//     // We want the latest reservations but in the reversed order
//     const reservations = messagePage.data.reverse();
//     const users = userPage.data;

//     // Once both return, update the state
//     this.setState({ login, reservations, users });
//   });
// });

// On logout reset all all local state (which will then show the login screen)
//   App.on("logout", () =>
//     this.setState({
//       login: null,
//       reservations: null,
//       users: null
//     })
//   );

//   // Add new reservations to the message list
//   reservations.on("created", message =>
//     this.setState({
//       reservations: this.state.reservations.concat(message)
//     })
//   );

//   // Add new users to the user list
//   users.on("created", user =>
//     this.setState({
//       users: this.state.users.concat(user)
//     })
//   );
// }

//   render() {
//     if (this.state.login === undefined) {
//       return (
//         <main className="container text-center">
//           <h1>Loading...</h1>
//         </main>
//       );
//     } else if (this.state.login) {
//       return (
//         <Chat reservations={this.state.reservations} users={this.state.users} />
//       );
//     }

//     return <Login />;
//   }
// }

// export default Application;

class Application extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 style={{ textAlign: "center" }}>This is App Component</h3>
        </div>
        <div className="row">
          <h4>Link to other pages</h4>
          <ul className="li">
            <Link to="/login">Login page</Link>{" "}
          </ul>
          <ul className="li">
            <Link to="/dashboard">Dashboard page</Link>
          </ul>
          <ul className="li">
            <Link to="/reservationmap">Reservation Map</Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Application;
