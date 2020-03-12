import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

import { Button } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export const MyButton = () => {
  const { languageData, currentLanguage } = useContext(LanguageContext);
  const buttonText = languageData.find(lang => lang.language === currentLanguage)

  return (
    <Button variant='outlined' color='primary' startIcon={<PlayCircleFilledIcon />} style={{ marginTop: '10px'}}>{buttonText.button}</Button>
  )
}
