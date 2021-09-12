import React from "react";
import Navbar from "../components/Navbar";
import Doctor from "../components/Doctor";
import Treatment from "../components/Treatment";
import FinalBook from "../components/FinalBook";
import Footer from "../components/Footer";
import useFetch from "../utils/useFetch";
import { LinearProgress } from "@material-ui/core";
import DateTimePicker from "../components/Calendar";
import TimePicker from "../components/TimePicker";

const BookAppointmentScreen = ({ history }) => {
  const URL = "/api/dentists";
  const { isLoading, data } = useFetch(URL);

  return (
    <div>
      <Navbar />
      {isLoading ? <LinearProgress /> : <Doctor dentists={data} />}
      <Treatment />
      <TimePicker/>
      <DateTimePicker/>
      <FinalBook history={history} />
      <Footer />
    </div>
  );
};

export default BookAppointmentScreen;
