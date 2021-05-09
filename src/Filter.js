import Button from "@material-ui/core/Button";
import extracurriculars from "./extracurriculars";
import majors from "./majors";
import styles from "./Filter.module.css";

const countries_json = require("all-countries-and-cities-json");
const student_status = ["High School", "Undergraduate", "Graduate"];
const years = ["1", "2", "3", "4"];
const countries = Object.keys(countries_json);

const React = require("react");
const axios = require("axios");

const url = "/users";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filter_major1: "",
      filter_major2: "",
      filter_major3: "",
      filter_school: "",
      filter_nationality: "",
      filter_extracurricular1: "",
      filter_extracurricular2: "",
      filter_extracurricular3: ""
    };

    this.handleMajor1 = this.handleMajor1.bind(this);
    this.handleMajor2 = this.handleMajor2.bind(this);
    this.handleMajor3 = this.handleMajor3.bind(this);
    this.handleExtracurricular1 = this.handleExtracurricular1.bind(this);
    this.handleExtracurricular2 = this.handleExtracurricular2.bind(this);
    this.handleExtracurricular3 = this.handleExtracurricular3.bind(this);
    this.handleSchool = this.handleSchool.bind(this);
    this.handleNationality = this.handleNationality.bind(this);
  }

  async componenetDidMount() {
    try {
      const response = await axios.get(url);
      const json = await response.json();
      this.setState({ users: json });
    } catch (error) {
      console.log(error);
    }
  }

  handleMajor1(event) {
    this.setState({ filter_major1: event.target.value });
  }
  handleMajor2(event) {
    this.setState({ filter_major1: event.target.value });
  }
  handleMajor3(event) {
    this.setState({ filter_major1: event.target.value });
  }
  handleExtracurricular1(event) {
    this.setState({ filter_major1: event.target.value });
  }
  handleExtracurricular2(event) {
    this.setState({ filter_major1: event.target.value });
  }
  handleExtracurricular3(event) {
    this.setState({ filter_major1: event.target.value });
  }
  handleSchool(event) {
    this.setState({ filter_major1: event.target.value });
  }

  handleNationality(event) {
    this.setState({ filter_major1: event.target.value });
  }

  render() {
    let users_to_display = this.state.users;
    if (this.state.filter_major1 !== "") {
      users_to_display = users_to_display.filter((user) => user.major);
    }
    if (this.state.filter_school !== "") {
      users_to_display = users_to_display.filter((user) => user.major);
    }
    if (this.state.filter_nationality !== "") {
      users_to_display = users_to_display.filter((user) => user.major);
    }
    // if (filter_major != "") {
    //   users_to_display = users_to_display.filter(user => user.major)
    // }
    // if (filter_major != "") {
    //   users_to_display = users_to_display.filter(user => user.major)
    // }

    return (
      <div className={styles.filter_box}>
        <form>
          <label>
            Nationality:
            <select
              value={this.state.filter_nationality}
              onChange={this.handleNationality}
            >
              {countries.map((country) => (
                <option>{country}</option>
              ))}
            </select>
          </label>
          <label>
            School Name:
            <input type="text" value={this.state.filter_school} />
          </label>
          <label>
            Major:
            <select
              value={this.state.filter_major1}
              onChange={this.handleNationality}
            >
              {majors.map((major) => (
                <option>{major}</option>
              ))}
            </select>
          </label>
          <label>
            <label>
              Major:
              <select
                value={this.state.filter_major2}
                onChange={this.handleNationality}
              >
                {majors.map((major) => (
                  <option>{major}</option>
                ))}
              </select>
            </label>{" "}
            <label>
              Major:
              <select
                value={this.state.filter_major3}
                onChange={this.handleNationality}
              >
                {majors.map((major) => (
                  <option>{major}</option>
                ))}
              </select>
            </label>
            Extracurricular:
            <select
              value={this.state.filter_extracurricular1}
              onChange={this.handleNationality}
            >
              {extracurriculars.map((extra) => (
                <option>{extra}</option>
              ))}
            </select>
          </label>
          <label>
            Extracurricular:
            <select
              value={this.state.filter_extracurricular2}
              onChange={this.handleNationality}
            >
              {extracurriculars.map((extra) => (
                <option>{extra}</option>
              ))}
            </select>
          </label>
          <label>
            Extracurricular:
            <select
              value={this.state.filter_extracurricular3}
              onChange={this.handleNationality}
            >
              {extracurriculars.map((extra) => (
                <option>{extra}</option>
              ))}
            </select>
          </label>

          <Button>Search using filter</Button>
        </form>
      </div>
    );
  }
}

export default Filter;
