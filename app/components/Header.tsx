'use client'
import { useEffect } from 'react';
import { FormControl, InputLabel, Container, Checkbox }
  from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Image from 'next/image';
import imgSrc1 from '../img/Vector.svg';

import { useState } from 'react';
import { Input1, Select1, Option } from '../styles'

import { useDispatch } from 'react-redux';
import { getMoviesByFilter } from '../redux/features/movies-slice';
import { getMoviesBySearch } from '../redux/features/movies-slice';

// Ваш компонент Header
export const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('');
  const [genre, setGenre] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [adult, setAdult] = useState(false);
  
  const handleChangeValue = () =>{
    dispatch(getMoviesBySearch({searchValue: value}))

  } 

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const handleChangeGenre = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (genre !== '' && selectedDate !== null) {
        dispatch(getMoviesByFilter({ genreId: genre, selectedDate: selectedDate.toISOString().split('T')[0], includeAdult: adult }));
      }
    };

    fetchData();
  }, [genre, selectedDate, adult, dispatch]);
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>

        <FormControl sx={{
          border: '1px solid black',
          height: '23px',
          width: '238px',
          borderRadius: '20px',
          position: 'relative'
        }}>
          <Image src={imgSrc1} style={{
            position: 'absolute',
            left: '10px',
            top: '2px',
            cursor: 'pointer'
          }} alt="где картинка?" onClick={handleChangeValue}/>
          <Input1 onChange={(e)=>{setValue(e.target.value)}}></Input1>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel sx={{ fontSize: '10px', marginTop: '4px' }} id="demo-simple-select-helper-label">Languange</InputLabel>
          <Select1
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={language}
            label="Language"
            onChange={handleChange}
          >
            <Option selected value={10}>English</Option>
            <Option value={20}>Russian</Option>
            <Option value={30}>Ukrainian</Option>
          </Select1>
        </FormControl>
        <FormControl sx={{ height: '20px' }}>
          <DatePicker label="Basic date picker" onChange={handleDateChange} />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100, minHeight: 100, top: '35px' }}>
          <InputLabel sx={{ fontSize: '10px', marginTop: '5px' }} id="demo-simple-select-helper-label">Genre</InputLabel>
          <Select1
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={genre}
            label="Ganre"
            onChange={handleChangeGenre}
          >
            <Option value={27}>Horror</Option>
            <Option value={35}>Comedia</Option>
            <Option value={878}>Sci-fi</Option>
            <Option value={14}>Fantasy</Option>
            <Option value={16}>Animation</Option>
            <Option value={28}>Action</Option>
          </Select1>
        </FormControl>
        <FormControl>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            18+<Checkbox onClick={() => { setAdult(!adult) }} />
          </div>
        </FormControl>
      </div>
    </Container>
  )
}
