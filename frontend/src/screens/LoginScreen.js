import React, { useState } from 'react'
import SignIn from "../components/SignIn";
import Navbar from "../components/Navbar";
import { Container } from '@material-ui/core';
import Footer from '../components/Footer';

const LoginScreen = ({ history }) => {

    return (
    <>
      <Navbar/>
      <Container component="main" maxWidth="xs">
        <SignIn history={history} />
      </Container>
    </>
  )
}

export default LoginScreen;