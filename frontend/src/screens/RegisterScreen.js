import React, { useState, useEffect, useContext } from 'react'
import { 
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  LinearProgress
} from '@material-ui/core'
import Message from '../components/Message'
import useStyles from '../styles/registerScreenStyle'
import userSignUp from '../utils/userSignUp';
import { UserContext } from '../context/UserContext';
import { userInfoFromStorage } from '../utils/initialState';
import Navbar from '../components/Navbar';

function RegisterScreen({ history, location }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [insurance, setInsurance] = useState(null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const classes = useStyles()

  const { userInfo, setUserInfo } = useContext(UserContext)
  
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {  
    // retrieves userInfo from localStorage if any
    if(userInfoFromStorage){
      setUserInfo(userInfoFromStorage)
    }
    // if there's data in userInfo obj in local storage redirect to '/'
    if (userInfo && userInfo.email) {
      history.push(redirect)
    } 
  }, [history, userInfo, setUserInfo, redirect])
  
  const registerHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else if(!name || !email || !insurance || !password){
      setMessage('Please fill in all the required fields')
    } else {
      const user = { name, insurance, email, password } 
      userSignUp(user, setLoading, setError, setUserInfo)
    }
  }

    return (
    <>
      <Navbar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="insurance"
                  label="Insurance Number"
                  type="number"
                  id="insurance"
                  onChange={(e) => setInsurance(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirm password"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={registerHandler}
            >
              Sign Up
            </Button>
            {loading && <LinearProgress/>}
            {message && <Message severity="info">{message}</Message>} 
            {error && <Message severity="error">{error}</Message>}
            <Grid container justify="flex-end">
              <Grid item>
                <Link href={redirect ? `/login?redirect=${redirect}` : '/login'} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  )
}

export default RegisterScreen
