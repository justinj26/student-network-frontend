import "./styles.css";
import Login from "./Login";
import Badge from "./Badge";
import Welcome from "./Welcome";

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

  return (
    <div className="App">
      <Welcome />
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
      <Login />
      <Badge user={data} />
    </div>
  );
}
