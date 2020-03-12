import React, { useState, createContext } from 'react';
import { languageData } from '../data/languageData';

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const changeLanguage = lang => {
    setCurrentLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{currentLanguage, languageData, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}