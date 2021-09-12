import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, LinearProgress } from "@material-ui/core";
import { UserContext } from "../context/UserContext";
import bookAppointment from "../utils/bookAppointment";
import { userInfoFromStorage } from "../utils/initialState";
import Message from './Message'

const FinalBook = ({ history }) => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { appointmentDetails, userInfo, setUserInfo, setAppointmentDetails } = useContext(UserContext)
  
  useEffect(()=>{
    // get user info from local storage
    if(userInfoFromStorage){
    setUserInfo(userInfoFromStorage)
    }
    // set the userId to the one from userInfo to send email notification to user
    if(userInfo){
      appointmentDetails.userId = userInfo._id
      setAppointmentDetails({...appointmentDetails})
    }
    // if fetch call is successful >> push appt ID to URL to send appt notification email
    if(success && appointmentDetails._id){
      history.push(`/appointment/${appointmentDetails._id}`)
    }

  }, [userInfo, history, success])

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2000);  
  }, [error]);  

  
  const bookHandler = () => {
    // create new appointment -> fetch API >> method: POST
    bookAppointment(appointmentDetails, userInfo, { 
      setAppointmentDetails, 
      setError, 
      setSuccess,
      setLoading
    })
  }

  const cancelHandler = () => { 
    history.push('/')
  }

  return (
    <>
      <div className="appointment-group">
        <Button onClick={cancelHandler} variant="contained" color="secondary">
          Cancel
        </Button>
        <Button onClick={bookHandler} variant="outlined" color="primary">
          Book
        </Button>
      </div>
      {error && <Message severity="error">{error}</Message>}
      {loading && <LinearProgress/>}
    </>
  );
};

export default FinalBook;