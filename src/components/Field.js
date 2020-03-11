import React from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core'

export const Field = () => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor='myInput'>Name</InputLabel>
      <Input id='myInput' />
    </FormControl>
  )
}
