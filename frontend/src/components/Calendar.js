import { useState, useEffect, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../context/UserContext';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = new Date();

  const onChange = (val) => {
    // change results based on calendar date click
    setSelectedDate(val)
  }

  const { appointmentDetails, setAppointmentDetails } = useContext(UserContext);

  useEffect(() => {
    if(selectedDate) {
      appointmentDetails.startDate = selectedDate.toLocaleDateString();
      setAppointmentDetails({ ...appointmentDetails });
    }

  }, [selectedDate]);

  return (
    <Calendar
      onChange={onChange}
      value={selectedDate}
      minDate={date}
    />

  );
}
export default DatePicker;
