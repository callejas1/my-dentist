import React, { useState, useContext, useEffect } from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { UserContext } from "../context/UserContext";
import useStyles from "../styles/dropdownStyles";

const treatments = [
  {
    name: "Check-up",
  },
  {
    name: "General Treatment",
  },
  {
    name: "Beauty Procedures",
  },
];

const Treatment = () => {
  const classes = useStyles();
  const [treatment, setTreatment] = useState({});

  const { appointmentDetails, setAppointmentDetails } = useContext(UserContext)

  const handleChange = (event) => {
    setTreatment({
      ...treatment,
      treatmentName: event.target.value,
    });
  };

  useEffect(()=>{
    if(treatment){
      appointmentDetails.description = treatment.treatmentName
      setAppointmentDetails({...appointmentDetails})
    }
  }, [treatment])

  return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-treatment">Treatment</InputLabel>
        <Select
          native
          value={treatment.name}
          onChange={handleChange}
          inputProps={{
            id: "select-treatment",
          }}
        >
          <option aria-label="None" value="" />
          {treatments.map((item, i) => (
            <option value={item.name} key={item.name + i}>{item.name}</option>
          ))}
        </Select>
      </FormControl>
  );
};

export default Treatment;