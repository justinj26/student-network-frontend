import Badge from "./Badge";
import Grid from "@material-ui/core/Grid";
// class HomePageBadgeGrid extends React.Component {
//   constructor() {
//     super(props);

//     this.state = 
//   }
// }

export default function Mentors(props) {
  var badges = props.users.map((user) => 
  <Grid item xs={6}>
    <Badge user={user} />
    </Grid>
  );



  return (


    <div>
      <Grid 
        container 
        justify="space-evenly"
        alignItems="center">
          {badges}
      </Grid>
    </div>
  );
}

export default Mentors;