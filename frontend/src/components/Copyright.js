import React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'


function Copyright() {
  return (
    <Typography variant="body2" align="center" color="textSecondary" >
      {'© '}
      <Link color="inherit" href="/">
        My Dentist
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright
