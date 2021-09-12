import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  LinearProgress,
  TableContainer,
  Paper
} from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import Navbar from "../components/Navbar";
import Message from "../components/Message";
import CancelAppointmentAlert from "../components/CancelAppointmentAlert";

const useStyles = makeStyles((theme) => ({ header: { margin: "1rem" } }));

const ProfileScreen = ({ history }) => {
  const classes = useStyles();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [trigger, setTrigger] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const updateInfo = async (url, userInfo) => {
    setIsLoading(true);
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    const data = await response.json();
    setMessage(data.message);
    setIsLoading(false);
  }  
  
  const updateUserInfo = async (e) => {
    e.preventDefault();
    updateInfo(`/api/users/${userInfo._id}`, userInfo);
  };

  const cancelAppointment = async (id) => {
    setTrigger(true)
    await updateInfo(`/api/appointment/cancel/${id}`, userInfo);
    setTrigger(false)
  };

  useEffect(() => {
    (async () => {
      if (userInfo) {
        const response = await fetch(`/api/appointment/user/${userInfo._id}`);
        const data = await response.json();
        setAppointments(data);
      }  
    })();  
  }, [userInfo, trigger]);  

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);  
  }, [message]);  

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" align="center" className={classes.header}>
          Welcome, {userInfo?.name}!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography component="h1" variant="h5">
              Name
            </Typography>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label={userInfo?.name}
                onChange={(e) =>
                  setUserInfo((current) => ({
                    ...current,
                    name: e.target.value,
                  }))
                }
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label={userInfo?.email}
                onChange={(e) =>
                  setUserInfo((current) => ({
                    ...current,
                    email: e.target.value,
                  }))
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={updateUserInfo}
              >
                Update Info
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Procedure</TableCell>
                    <TableCell>Date</TableCell>  
                    <TableCell>Time</TableCell>  
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
              {appointments ?
                appointments.map((app) => (
                    <TableRow key={app._id}>
                      <TableCell>{app.description}</TableCell>
                      <TableCell>{app.startDate}</TableCell>
                      <TableCell>
                      {app.timeRange}
                      </TableCell>
                      <TableCell>
                        {app.cancelled ? <CancelIcon color="secondary"/> : (
                          <CancelAppointmentAlert id={app._id} cancelAppointment={cancelAppointment}/>
                        )}
                      </TableCell>
                    </TableRow>
                )) : (
                  <TableRow>
                    <TableCell>No appointments to show</TableCell>
                  </TableRow>
                )}
                </TableBody>
              </Table>   
            </TableContainer>         
          </Grid>
        </Grid>  
        {isLoading ? <LinearProgress  style={{marginTop: 30}}/> : message && <Message severity="info">{message}</Message>}
      </Container>
    </>
  );
};

export default ProfileScreen;
