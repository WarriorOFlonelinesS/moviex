'use client'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, Container, Checkbox }
  from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Image from 'next/image';
import imgSrc1 from '../img/Vector.svg';
import { useState } from 'react';
import { Input1, Select1, Option } from '../styles'
import { useDispatch } from 'react-redux';
import { getMoviesByFilter, getMoviesByLanguage, getMoviesBySearch } from '../redux/actions';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('');
  const [genre, setGenre] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [adult, setAdult] = useState(false);

  const handleChangeValue = () => {
    dispatch(getMoviesBySearch({ searchValue: value }))

  }

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    changeLanguage(event.target.value)

  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
      if (language !== '') {
        dispatch(getMoviesByLanguage({ language: language }))
      }
    };

    fetchData();
  }, [genre, selectedDate, adult, language, dispatch]);

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
          }} alt="где картинка?" onClick={handleChangeValue} />
          <Input1 onChange={(e) => { setValue(e.target.value) }}></Input1>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel sx={{ fontSize: '10px', marginTop: '4px' }} id="demo-simple-select-helper-label">{t("language")}</InputLabel>
          <Select1
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={language}
            label='language'
            onChange={handleChange}
          >
            <Option value={'en'}>English</Option>
            <Option value={'ru'}>Русский</Option>
            <Option value={'uk'}>Українська</Option>
          </Select1>
        </FormControl>
        <FormControl sx={{ height: '20px' }}>
          <DatePicker label={t("datapicker")} onChange={handleDateChange} />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100, minHeight: 100, top: '35px' }}>
          <InputLabel sx={{ fontSize: '10px', marginTop: '5px' }} id="demo-simple-select-helper-label">{t("genre")}</InputLabel>
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
