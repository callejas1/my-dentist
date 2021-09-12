import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  Typography,
  IconButton
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "../styles/headerStyles";
import SignIn from "../components/SignIn";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContext";
import useFetch from "../utils/useFetch";

const HomeScreen = ({ history }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const classes = useStyles();
  const { userInfo } = useContext(UserContext);
  const URL = '/api/dentists'
  const { data } = useFetch(URL)

  const appointmentHandler = () => {
    if(!userInfo){
      setOpenAlert(true)
    } else {
      history.push('/appointment')
    }
  }

  useEffect(() => {
    if(userInfo){
      setOpenAlert(false)
    }
  }, [userInfo])
  
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Grid container component="main" className={classes.root}>
        <Grid item sm={12} md={!userInfo ? 8 : 12}  className={classes.image}>
          <Grid item xs={12} md={12} lg={12} className={classes.imageBox}>
            <Typography variant="h1" className={classes.imageTypo}>
              Improving the world, one smile at a time
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className={classes.imageBtn}
              onClick={appointmentHandler}
            >
              Make Appointment
            </Button>
            {openAlert && (
                <Alert severity="info"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenAlert(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }>
                    To make an appointment you first need to sign in or create an account.
                </Alert>
            )}
          </Grid>
        </Grid>
        {!userInfo && (
          <Grid item xs={12} sm={12} md={4} lg={4} component={Paper} elevation={6} square>
            <SignIn history={history}/>
          </Grid>
        )}
        <Grid item xs={12} md={12} lg={12}> 
          <Main dentists={data}/>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default HomeScreen;