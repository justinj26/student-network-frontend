// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import HomePageBadgeGrid from "./HomePageBadgeGrid";
import Button from "@material-ui/core/Button";
import styles from "./Home.module.css";
import axios from "axios";
import Mentors from "./Mentors";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import { Row, Col } from "antd";
import { ButtonToolbar, ButtonGroup } from "react-bootstrap"
import { Switch, Route, Link as RouterLink } from 'react-router-dom';


const url = "/userprofile";
const users = [
{
  first_name: "Ike",
    last_name: "Boxton",
    college: "University of Michigan",
    major: "Computer Science",
    extras: ["Aerospace Engineering", "Dungeons and Dragons"]
},
{
  first_name: "Mike",
    last_name: "Clarington",
    college: "University of Wisconsin",
    major: "Computer Engineering",
    extras: ["Comedy", "Programming"]
},
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      mentor_interface: false
    };

    // this.handleInterface = this.handleInterface.bind(this);
  }

  async componenetDidMount() {
    // not sure if required
    // const loggedInUser = localStorage.getItem("user_i");
    // if (loggedInUser) {
    //   const foundUser = JSON.parse(loggedInUser);
    //   (foundUser);

    const user_id = localStorage.getItem("user_id")
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(
        url, 
        user_id, 
        {
        headers: {
          'Authorization': `Basic ${token}` 
        }});
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }

    
  }

  // handleInterface() {
  //   this.setState({ mentor_interface: !this.state.mentor_interface})
  // }

  render() {
    // as a note for this page
    // one can use a series of divs,
    // and then have those divs as having
    // various relative positions
    // might be time to look up / research responsive design
    // might want to use components for individual parts of screen
    return (
      <div>
        <div classname={styles.button_row}>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="outlined" component={RouterLink} to="/home">Home</Button>
            <Button variant="outlined" component={RouterLink} to="/user">Profile</Button>
            <Button variant="outlined" component={RouterLink} to="">Menotrs</Button>
            <Button variant="outlined">Switch to: {this.state.interace === false ? "Mentor Interface" : "Mentee interface"}</Button>
          </ButtonGroup>
        </ButtonToolbar>
        </div>

        <div>
          <Switch>
            <Route path="/updateprofile">

            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/mentors">
              <Mentors />
            </Route>
            <Route></Route>
          </Switch>
          
          <HomePageBadgeGrid users={users} />
        </div>
      </div>
    );
  }
}

export default Home;
