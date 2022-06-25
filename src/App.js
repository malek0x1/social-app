import { Grid, makeStyles } from '@material-ui/core';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import NavBar from './Navbar';
import Feed from './Feed';
import Add from './components/Add';
import { useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
  right: {
    display: "block",
    [theme.breakpoints.down("sm")]: { display: "none" }
  },
}));

function App() {
  const classes = useStyles();
  const axios = require("axios");
  
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
      </Grid>
        <Grid item sm={8} xs={10}>
          <Feed />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
