import React, { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext";
import { 
  CssBaseline, 
  Paper, 
  Button, 
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core/";
import useStyles from "../styles/appointmentDetailsStyles";
import appointmentDetailsEmail from "../utils/appointmentDetailsEmail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppointmentDetailsScreen = ({ history, match }) => {
  const classes = useStyles();
  const { appointmentDetails, userInfo } = useContext(UserContext);

  useEffect(() => {
    appointmentDetailsEmail(match.params.id, userInfo)
  }, [match.params.id])
  
  const handleChange = (e) => {
    e.preventDefault();
    history.push("/")
  }
  
  return (
    <>
      <Navbar/>
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Your appointment has been scheduled!
            </Typography>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Patient Name:</TableCell>
                    <TableCell>{userInfo.name}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Date:</TableCell>
                    <TableCell>{appointmentDetails.startDate}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Time:</TableCell>
                    <TableCell>{appointmentDetails.timeRange} hrs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Description:</TableCell>
                    <TableCell>{appointmentDetails.description}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            <Typography variant="subtitle2" className={classes.typography}>
              The details of your appointment will be sent to the email address on file. If you wish to cancel your appointment please follow the instructions in your email or simply contact our clinic.
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleChange}
              >
                Go Home
              </Button>
            </div>
          </Paper>
        </main>
      </React.Fragment>
      <Footer/>
    </>
  );
}

export default AppointmentDetailsScreen;
