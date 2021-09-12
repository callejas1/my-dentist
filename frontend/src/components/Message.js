import React from 'react'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      margin: theme.spacing(0),
    },
    margin: theme.spacing(3)
  },
}));

const Message = ({ severity, title, children }) => {
  const classes = useStyles();

  return (
    <Alert severity={severity} className={classes.root} variant="outlined">
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  severity: 'info',
}

export default Message
