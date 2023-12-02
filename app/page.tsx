'use client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Header } from './components/Header';
import { Main } from './components/Main';
import './globals.css'

export default function Home() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header />
      <Main />
    </LocalizationProvider>

  )

}
