// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import HomePageBadgeGrid from "./HomePageBadgeGrid";
import Button from "@material-ui/core/Button";
import styles from "./Home.module.css";
import axios from "axios";
import Mentors from "./Mentors";
import Profile from "./Profile";
import Filter from "./Filter";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import { Row, Col } from "antd";
import { ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { Switch, Route, Link as RouterLink } from "react-router-dom";

const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");

const url = "https://student-network-backend-stage.herokuapp.com/userprofile";

const url_all =
  "/getallmatches";
const url_incoming =
  "https://student-network-backend-stage.herokuapp.com/getincomingrequests";
const url_favorite =
  "https://student-network-backend-stage.herokuapp.com/getfavoritematches";
const url_outgoing =
  "https://student-network-backend-stage.herokuapp.com/getoutgoingrequests";
const url_saved =
  "https://student-network-backend-stage.herokuapp.com/getsavedprofiles";

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
  {
    first_name: "Amene",
    last_name: "Rhodes",
    college: "Georgetown",
    major: "Computer Science",
    extras: ["Screenwriting", "Programming"]
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      all_matches: [],
      incoming_match_requests: [],
      favorite_matches: [],
      outgoing_match_requests: [],
      saved_profiles: [],
      mentor_interface: false
    };

    this.toggleButton = this.toggleButton.bind(this);

    // this.handleInterface = this.handleInterface.bind(this);
  }

  async componenetDidMount() {
    // not sure if required
    // const loggedInUser = localStorage.getItem("user_i");
    // if (loggedInUser) {
    //   const foundUser = JSON.parse(loggedInUser);
    //   (foundUser);

    try {
      const response_1 = await axios.get(url_all);
      const json_1 = response_1.json();
      this.setState({ all_matches: json_1 });
    } catch (error) {
      console.log(error);
    }

    try {
      const response_2 = await axios.get(url_incoming);
      const json_2 = response_2.json();
      this.setState({ incoming_match_requests: json_2 });
    } catch (error) {
      console.log(error);
    }

    try {
      const response_3 = await axios.get(url_favorite);
      const json_3 = response_3.json();
      this.setState({ favorite_matches: json_3 });
    } catch (error) {
      console.log(error);
    }

    try {
      const response_4 = await axios.get(url_outgoing);
      const json_4 = response_4.json();
      this.setState({ outgoing_match_requests: json_4 });
    } catch (error) {
      console.log(error);
    }

    try {
      const response_5 = await axios.get(url_saved);
      const json_5 = response_5.json();
      this.setState({ saved_profiles: json_5 });
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await axios.post(url, user_id, {
        headers: {
          Authorization: `Basic ${token}`
        }
      });
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  }

  toggleButton() {
    this.setState({ mentor_interface: !this.state.mentor_interface });
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
        <div className={styles.sn_banner}>
          <h1 className={styles.sn_banner_text}>The Student Network</h1>
        </div>
        <div className={styles.button_row}>
          {/* <Buttonoolbar className="mr-2" aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group"> */}
          <Button component={RouterLink} to="/home">
            <b>Home</b>
          </Button>
          <Button component={RouterLink} to="/user">
            <b>Profile</b>
          </Button>
          {/* <Button component={RouterLink} to="">
            Mentors
          </Button> */}
          <Button component={RouterLink} to="/home/inbox">
            <b>Inbox</b>
          </Button>
          <Button component={RouterLink} to="/home/calendar">
            <b>Calendar</b>
          </Button>
          <Button component={RouterLink} to="/home/search">
            <b>Search</b>
          </Button>
          {/* <Button
            variant="outlined"
            onClick={this.toggleButton}
            component={RouterLink}
            to=""
          >
            Switch to:{" "}
            {this.state.mentor_interface === false
              ? "Mentor Interface"
              : "Mentee interface"}
          </Button> */}
          {/* </ButtonGroup>
          </ButtonToolbar> */}
        </div>
        <Filter />
        <div className={styles.main_grid}>
          <Switch>
            <Route path="/updateprofile"></Route>
            <Route path="/user">
              <Profile />
            </Route>
            <Route path="/mentors">
              <Mentors user_id={user_id} token={token} />
            </Route>
            <Route path="/all_matches"></Route>
            <Route path="/incoming_match_requests"></Route>
            <Route path="/favorite_matches"></Route>
            <Route path="/outgoing_match_requests"></Route>
            <Route path="/saved_profiles"></Route>
            <Route path="/filter"></Route>
            <Route path="/home/search"></Route>
            <Route path="/home">
              <HomePageBadgeGrid users={users} />
            </Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Switch>

          
        </div>
      </div>
    );
  }
}

export default Home;
