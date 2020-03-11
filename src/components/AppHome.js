import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import { UserCreate } from './UserCreate';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2)
  },
  button: {
    marginLeft: theme.spacing(2)
  }
}))

export const AppHome = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState('english')

  return (
    <Paper elevation={4} className={classes.paper}>
      <Typography>
        Select a language:
        <Button onClick={e => setLanguage('english')} variant='contained' color='primary' className={classes.button} startIcon={<FlagIcon />}>English</Button>
        <Button onClick={e => setLanguage('dutch')} variant='contained' color='secondary' className={classes.button} startIcon={<FlagIcon />}>Dutch</Button>
      </Typography>
      <Typography variant='h5' component='h5' color='textPrimary'>
        {language}
      </Typography>
      <UserCreate />
    </Paper>
  )
}
