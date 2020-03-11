import React from 'react'
import { Button } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export const MyButton = () => {
  return (
    <Button variant='outlined' color='primary' startIcon={<PlayCircleFilledIcon />} style={{ marginTop: '10px'}}>Submit</Button>
  )
}
