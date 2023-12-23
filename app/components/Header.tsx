'use client'
import { useEffect } from 'react';
import { FormControl, InputLabel, Container, Checkbox }
  from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Image from 'next/image';
import imgSrc1 from '../img/Vector.svg';
import imgSrc2 from '../img/Moviex.svg'
import { useState } from 'react';
import { Input1, Select1, Option } from '../styles'

import { useDispatch, useSelector } from 'react-redux';
import { GET_MOVIES, getMovies } from '../redux/features/movies-slice';
import { Main } from './Main';
import { getMoviesSaga } from '../redux/features/saga/movie.saga';


export const Header = () => {

const dispatch = useDispatch()
const [language, setLanguage] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
 const [genre, setGenre] = useState('');
  const handleChangeGenre = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
    dispatch(getMovies(genre))
    console.log(genre)
  };
  useEffect(() => {
    const fetchData = async () => {
      if (genre !== '') {
        await dispatch(getMovies(genre));
        console.log(genre);
      }
    };

    fetchData();
  }, [genre, dispatch]);
  return (
    <Container>
      <div>
        <Image src={imgSrc2} style={{ marginBottom: '15px' }} alt='logo' />
      </div>
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
          }} alt="где картинка?" />
          <Input1 ></Input1>
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
          <DatePicker label="Basic date picker" />
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
            18+<Checkbox />
          </div>
        </FormControl>
      </div>
    </Container>
  )
}
