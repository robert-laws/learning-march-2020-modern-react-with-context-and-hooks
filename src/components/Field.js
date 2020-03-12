import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

import { FormControl, InputLabel, Input } from '@material-ui/core'

export const Field = () => {
  const { languageData, currentLanguage } = useContext(LanguageContext);
  const labelText = languageData.find(lang => lang.language === currentLanguage)

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor='myInput'>{labelText.label}</InputLabel>
      <Input id='myInput' />
    </FormControl>
  )
}
