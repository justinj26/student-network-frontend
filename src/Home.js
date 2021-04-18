import React from "react";
import HomePageBadgeGrid from "./HomePageBadgeGrid";
import Button from "@material-ui/core/Button";
import styles from "./Home.module.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {}
    };
  }

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
          <Button variant="outlined">Home</Button>
          <Button variant="outlined">Profile</Button>
          <Button variant="outlined"></Button>
        </div>

        <div>
          <HomePageBadgeGrid users={[]} />
        </div>
      </div>
    );
  }
}

export default Home;
