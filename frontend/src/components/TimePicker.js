import React, { useContext, useEffect, useState } from 'react'
import timeSlots from '../data/timeSlots';
import { InputLabel, FormControl, Select } from "@material-ui/core";
import useStyles from "../styles/dropdownStyles";
import { UserContext } from '../context/UserContext';

const TimePicker = ({ setTime }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const classes = useStyles();
  const { appointmentDetails, setAppointmentDetails } = useContext(UserContext);

  const handleChange = (e) => {
    setSelectedTime(e.target.value)
  }

  useEffect(() => {
    if (selectedTime) {
      appointmentDetails.timeRange = selectedTime;
      setAppointmentDetails({ ...appointmentDetails });
    }
    // eslint-disable-next-line
  }, [selectedTime]);


  return (
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="select-time">Select time</InputLabel>
    <Select
      native
      value={selectedTime}
      onChange={handleChange}
      inputProps={{
        id: "select-time",
      }}
    >
      <option aria-label="None" value="" />
      {timeSlots.map((time, i) => {
        return <option value={time} key={time + i}>{time}</option>
      })}
    </Select>
  </FormControl>
  )
}

export default TimePicker
