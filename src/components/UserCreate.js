import React from 'react';
import { Field } from './Field';
import { MyButton } from './MyButton';

import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
// import { Box } from '@material-ui/core';

const Box = styled('div')(
  compose(
    spacing,
    palette
  )
)

export const UserCreate = () => {
  return (
    <Box color='white' bgcolor='#f5f5f5' p={2} m={1} style={{ borderRadius: '4px' }} >      
      <Field />
      <MyButton />
    </Box>
  )
}
