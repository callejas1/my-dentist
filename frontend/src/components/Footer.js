import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: '2rem',
    padding: '.75rem',
  },
}));


const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="md">
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          Developed by Yoselyn Callejas
        </Typography>
      <Copyright/>
    </Container>
  </AppBar>
  );
};

export default Footer;
