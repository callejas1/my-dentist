import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: '100%',
    marginTop: '2rem',
    padding: '.5rem',
    background: '#3f51b5',
    color: '#fff'
  },
}));


const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.appBar}>
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
    </footer>
  );
};

export default Footer;
