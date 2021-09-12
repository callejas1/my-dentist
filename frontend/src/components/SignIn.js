import React, { useEffect, useState, useContext } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container, 
  LinearProgress
} from "@material-ui/core";
import useStyles from "../styles/loginStyles";
import { UserContext } from "../context/UserContext";
import userLogin from "../utils/userLogin";
import Message from "./Message";
import { userInfoFromStorage } from "../utils/initialState";

const SignIn = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { userInfo, setUserInfo } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    userLogin({ email, password }, {
      setSuccess, 
      setLoading, 
      setUserInfo,
      setError
    })
  }

  useEffect(() => {
    if(success || userInfoFromStorage && userInfoFromStorage.email){
      history.push('/')
    }
  }, [userInfo, history, success])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && <Message severity="error">{error}</Message>}
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {loading && <LinearProgress/>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>

  );
}
export default SignIn;