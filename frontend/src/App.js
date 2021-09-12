import React, { useState, useMemo, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { UserContext } from "./context/UserContext";
import BookAppointmentScreen from "./screens/BookAppointmentScreen";
import AppointmentDetailsScreen from "./screens/AppointmentDetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { userInfoFromStorage } from "./utils/initialState";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    description: null,
    resourceId: null,
    userId: null,
    startDate: null,
    duration: null,
  });

  const userProviderValue = useMemo(
    () => ({
      userInfo,
      setUserInfo,
      appointmentDetails,
      setAppointmentDetails,
    }),
    [userInfo, setUserInfo, appointmentDetails, setAppointmentDetails]
  );

  useEffect(() => {
    if(userInfoFromStorage){
      setUserInfo(userInfoFromStorage)
    }
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={userProviderValue}>
        <Route path="/register" component={RegisterScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/appointment" exact component={BookAppointmentScreen} />
        <Route path="/appointment/:id" exact component={AppointmentDetailsScreen} />
        <Route path="/profile" component={ProfileScreen} />
      </UserContext.Provider>
    </div>
  );
};

export default App;
