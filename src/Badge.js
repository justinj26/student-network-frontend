// badge
// presumably, it would seemingly be easier to port around
// a user, and then call user.blah_blah_blah

// it seems that how to render the badge will depend on
// whether it comes over as a prop, or come through the state
import styles from "./Badge.module.css";
import Avatar from "./Avatar";
const React = require("react");

const data = {
  college: "University of Michigan",
  major: "Computer Science",
  extracuriculars: ["Aerospace Engineering", "Dungeons and Dragons"]
};

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // thought: whether json will come in
      // an array, and instead of setting
      // data to be json, appending the json
      // and flattening the array(s?)
      data: []
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
        {/* <Avatar /> */}

        <p>{this.props.user.college}</p>
        <p>{this.props.user.major}</p>
        {/* <div>
          Extracurriculars:
          <div>{this.props.user.extras.forEach(extra) { return <p>extra</p> } </div>
        </div> */}
      </div>
    );
  }
}

export default Badge;
