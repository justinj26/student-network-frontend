// import { Form, Input, Button, Select, Checkbox } from "antd";
import { Form, Col, Row } from "react-bootstrap";
import styles from "./SignUp.module.css";
import Button from "@material-ui/core/Button";
import country_names from "./countries";

const axios = require("axios");
const React = require("react");
// thought: user likely from a different page
const user = {};
const url = "/signup";

const student_status = ["High School", "Undergraduate", "Graduate"];
const years = ["1", "2", "3", "4"];

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      },
      data: {
        Nationality: "",
        Interests: ["", ""],
        "Contact Number": ["", ""],
        student_status: "",
        location: {
          country: "",
          state: "",
          city: ""
        },
        potential_major: "",
        extracurriculars: "",
        fun_fact: ""
      },
      validated: false
    };

    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleNationality = this.handleNationality.bind(this);
    this.handleContact1 = this.handleContact1.bind(this);
    this.handleContact2 = this.handleContact2.bind(this);
    this.handleInterest1 = this.handleInterest1.bind(this);
    this.handleInterest2 = this.handleInterest2.bind(this);
    this.handleStudentStatus = this.handleStudentStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirst(event) {
    this.setState({ user: { first_name: event.target.value } });
  }
  handleLast(event) {
    this.setState({ user: { last_name: event.target.value } });
  }
  handleEmail(event) {
    this.setState({ user: { email: event.target.value } });
  }
  handlePassword(event) {
    this.setState({ user: { password: event.target.value } });
  }
  handleNationality(event) {
    this.setState({ data: { Nationality: event.target.value } });
  }
  handleContact1(event) {
    this.setState({ data: { "Contact Number": event.target.value } });
  }
  handleContact2(event) {
    this.setState({ data: { "Contact Number": event.target.value } });
  }
  handleInterest1(event) {
    this.setState({ data: { Interests: event.target.value } });
  }
  handleInterest2(event) {
    this.setState({ data: { Interests: event.target.value } });
  }

  handleStudentStatus(event) {
    this.setState({ data: { "Student Status": event.target.value } });
  }

  async handleSubmit(event) {
    alert("submitted");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    try {
      axios.post(url, user);
    } catch (error) {
      alert(error.message);
    }

    this.setState({ validated: true });
  }

  render() {
    let years_filter =
      this.state.data.student_statuses === "Graduate"
        ? years.slice(0, 3)
        : years;
    return (
      <div className={styles.form_box}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              First Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="First Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Last Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Last Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <br />

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Primary Phone:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="tel"
                placeholder="Format: 555-555-5555"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Secondary phone:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="tel"
                placeholder="Format: 555-555-5555"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Nationality:
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="select" custom>
                {country_names.map((country) => (
                  <option>{country}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Interests
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="select" placeholder="Interest 1" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            {/* <Form.Label column sm={2}>
              Ema
            </Form.Label> */}
            <Col sm={10}>
              <Form.Control type="email" placeholder="Interest 2" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Last Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Last Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Last Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Last Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Last Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label sm={2}>Student Status: </Form.Label>
            {/* <Col sm={10}> */}
            <Form.Control as="select" custom>
              {student_status.map((country) => (
                <option>{country}</option>
              ))}
            </Form.Control>
            {/* </Col> */}
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label sm={2}>Year: </Form.Label>
            {/* <Col sm={10}> */}
            <Form.Control as="select" custom>
              {years_filter.map((num) => (
                <option>{num}</option>
              ))}
            </Form.Control>
            {/* </Col> */}
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              School Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Last Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Potential major:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Last Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Extracurriculars:
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="select" custom>
                {country_names.map((country) => (
                  <option>{country}</option>
                ))}
              </Form.Control>
            </Col>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Extracurricular"
                required
              />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
              <Form.Control type="text" placeholder="Last Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
              <Form.Control type="text" placeholder="Last Name" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Fun fact:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="textarea" placeholder="Fun fact" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              {/* // material-ui button */}
              <br />
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SignUp;

// onFinish(values) {
//   console.log("Success:", values);
// }

// onFinishFailed(errorInfo) {
//   console.log("Failed:", errorInfo);
// }

// const layout = {
//   labelCol: {
//     span: 8
//   },
//   wrapperCol: {
//     span: 16
//   }
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16
//   }
// };

//     <div>
// {/* <Form
//           {...layout}
//           name="basic"
//           initialValues={{
//             remember: true
//           }}
//           onFinish={this.onFinish()}
//           onFinishFailed={this.onFinishFailed()}
//         >
//           <Form.Item
//             label="Username"
//             name="username"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your username!"
//               }
//             ]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!"
//               }
//             ]}
//           >
//             <Input.Password />
//           </Form.Item>

//           <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//             <Checkbox>Remember me</Checkbox>
//           </Form.Item>

//           <Form.Item {...tailLayout}>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </Form.Item>
//           <Form.Item label="Select">
//             <Select>
//               <Select.Option value="demo">Demo</Select.Option>
//             </Select>
//           </Form.Item>
//         </Form> */}
//         </div>
