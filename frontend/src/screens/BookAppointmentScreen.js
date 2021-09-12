import React from "react";
import Navbar from "../components/Navbar";
import Doctor from "../components/Doctor";
import Treatment from "../components/Treatment";
import FinalBook from "../components/FinalBook";
import useFetch from "../utils/useFetch";
import { Grid, LinearProgress, makeStyles } from "@material-ui/core";
import DatePicker from "../components/Calendar";
import TimePicker from "../components/TimePicker";

const useStyles = makeStyles((theme) => ({
  grid: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
}));


const BookAppointmentScreen = ({ history }) => {
  const classes = useStyles();
  const URL = "/api/dentists";
  const { isLoading, data } = useFetch(URL);

  return (
    <div>
      <Navbar />
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >  
        <Grid item xs={12}  className={classes.grid}>
          {isLoading ? <LinearProgress /> : <Doctor dentists={data} />}
          <Treatment />
          <TimePicker/>
        </Grid>
      </Grid>
      <DatePicker />
      <FinalBook history={history} />
    </div>
  );
};

export default BookAppointmentScreen;
