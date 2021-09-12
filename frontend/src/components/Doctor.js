import React, { useState, useContext, useEffect } from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { UserContext } from "../context/UserContext";
import useStyles from "../styles/dropdownStyles";

const Doctor = ({ dentists }) => {
  const classes = useStyles();
  const [doctor, setDoctor] = useState({});
  const { appointmentDetails, setAppointmentDetails } = useContext(UserContext)

  const handleChange = (event) => {
    setDoctor({
      ...doctor,
      id: event.target.value
    });
  };

  useEffect(()=>{
    if(doctor){
      appointmentDetails.resourceId = doctor.id
      setAppointmentDetails({...appointmentDetails})
    }
  }, [doctor])

  return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-doctor">Doctor</InputLabel>
        <Select
          native
          value={doctor.name}
          onChange={handleChange}
          inputProps={{
            id: "select-doctor",
          }}
        >
          <option aria-label="None" value="" />
          {dentists && dentists.length > 0 && dentists.map((dentist, i) => (
            <option value={dentist._id} key={dentist._id+i}>{dentist.name}</option>
          ))}
        </Select>
      </FormControl>
  );
};

export default Doctor;
