// badge
// presumably, it would seemingly be easier to port around
// a user, and then call user.blah_blah_blah

// it seems that how to render the badge will depend on
// whether it comes over as a prop, or come through the state

import styles from "./Badge.module.css";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import Button from "@material-ui/core/Button";
// import Avatar from "./Avatar";
const React = require("react");

// const data = {
//   college: "University of Michigan",
//   major: "Computer Science",
//   extracuriculars: ["Aerospace Engineering", "Dungeons and Dragons"]
// };

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // thought: whether json will come in
      // an array, and instead of setting
      // data to be json, appending the json
      // and flattening the array(s?)
      data: [],
      favorite: false
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(``);
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // const extracurriculars = this.props.user.extras;
    // const allExtracurriculars = extracurriculars.map(extra => (

    // <p>extra</p>);

    return (
      <div className={styles.badge_box}>
        <p>
          Name:{" "}
          {this.props.user.first_name
            .concat(" ")
            .concat(this.props.user.last_name)}
        </p>
        <div>
          <Button
            onClick={(e) => this.setState({ favorite: !this.state.favorite })}
          >
            {this.state.favorite ? (
              <FavoriteTwoToneIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderTwoToneIcon style={{ color: "red" }} />
            )}
          </Button>
        </div>
        {/* <Avatar /> */}

        <p>College: {this.props.user.college}</p>
        <p>Major: {this.props.user.major}</p>

        <div>
          Extracurriculars:{" "}
          {this.props.user.extras.map((extra) => (
            <p>{extra}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Badge;
