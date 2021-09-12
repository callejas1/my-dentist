import { useState, useEffect, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Grid, makeStyles } from '@material-ui/core';
import { UserContext } from '../context/UserContext';
import timeSlots from '../data/timeSlots';


const useStyles = makeStyles((theme) => ({
  textField: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: "auto",
    width: "8rem",
    fontSize: "1.2rem",
    fontFamily: 'Arial'

  },
}));

const DateTimePicker = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('08:00');
  const date = new Date();

  const onChange = (val) => {
    // change results based on calendar date click
    setSelectedDate(val)
  }

  const handleChange = (e) => {
    setSelectedTime(e.target.value)
  }

  const { appointmentDetails, setAppointmentDetails } = useContext(UserContext);

  useEffect(() => {
    if(selectedDate) {
      appointmentDetails.startDate = selectedDate.toLocaleDateString();
      setAppointmentDetails({ ...appointmentDetails });
    }
    if (selectedTime) {
      appointmentDetails.timeRange = selectedTime;
      setAppointmentDetails({ ...appointmentDetails });
    }

  }, [selectedDate, selectedTime, appointmentDetails]);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <Calendar
            onChange={onChange}
            value={selectedDate}
            minDate={date}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <select className={classes.textField} onChange={handleChange}>
            {timeSlots.map((time, i) => {
              return <option value={time} key={time + i}>{time}</option>
            })}
          </select>
        </Grid>
      </Grid>
    </div>
  );
}
export default DateTimePicker;
