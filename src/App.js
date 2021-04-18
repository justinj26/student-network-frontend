import "./styles.css";
import Login from "./Login";
import Badge from "./Badge";
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

// const data = {
//   college: "University of Michigan",
//   major: "Computer Science",
//   extracuriculars: ["Aerospace Engineering", "Dungeons and Dragons"]
// }

export default function App() {
  const data = {
    college: "University of Michigan",
    major: "Computer Science",
    extras: ["Aerospace Engineering", "Dungeons and Dragons"]
  };

  // some setup, to where if a user is present, go to home page
  // if not, go to Welcome page

  return (
    <div className="App">
      <Home />

      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/home">
          {/* user here */}
          <Home />
        </Route>

        <Route></Route>

        <Route></Route>

        <Route></Route>
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SignUp />
      <Welcome />
      <Login />
      <Badge user={data} />
    </div>
  );
}
