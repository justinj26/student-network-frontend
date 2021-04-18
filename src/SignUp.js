// import { Form, Input, Button, Select, Checkbox } from "antd";
import { Form, Col, Row } from "react-bootstrap";
import styles from "./SignUp.module.css";
import Button from "@material-ui/core/Button";

const React = require("react");
// thought: user likely from a different page
const user = {};

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: ""
      },
      validated: false
    };

    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
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

    this.setState({ validated: true });
  }

  render() {
    return (
      <div className={styles.form_box}>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              First Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="First name" required />
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
              <Form.Control type="text" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                {/* username or password not recognized */}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name:
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
            <Form.Label column sm={2}></Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" required />
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
