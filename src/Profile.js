import Button from "@material-ui/core/Button";

const React = require("react");
const axios = require("axios");

const user_id = localStorage.getItem("user_id");
const token = localStorage.getItem("token");


const url = "https://student-network-backend-stage.herokuapp.com/userprofile"


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  async componenetDidMount() {
    try {
      const response = await axios.post(url, {
        
      });
      const json = await response.json();
      this.setState({ user: json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <p>Nationality: {this.state.user.nationality}</p>
        <p>Education Level: {this.state.user.education_level}</p>
        <p>First Name: {this.state.user.first_name}</p>
        <p>Last Name: {this.state.user.last_name}</p>
        <p>School: {this.state.user.school}</p>
        <p>Work e-mail: {this.state.user.work_email}</p>
        <p>Interests: {this.state.user.interests}</p>
       
        <Button>Edit Profile: </Button>
      </div>
    );
  }
}

export default Profile;
