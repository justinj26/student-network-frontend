import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from "@material-ui/core/Button";
import styles from "./MatchesAndRequests.module.css";

const React = require("react");

class MatchesAndRequests extends React.component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className={styles.matches_and_requests_box}>

        </div>
      </div>
    )
  }

}

export default MatchesAndRequests;