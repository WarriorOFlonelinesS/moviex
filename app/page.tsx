'use client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Header } from './components/Header';
import { Main } from './components/Main';
import './globals.css'
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState(''); // установите начальное значение language

  // внутри функции для изменения языка
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* передайте language и функцию изменения языка в Header */}
      <Header changeOutLanguage={changeLanguage} />
      <Main language={language} />
    </LocalizationProvider>
  );
}

