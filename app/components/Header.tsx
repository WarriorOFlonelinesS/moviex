import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, Container, Checkbox } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import imgSrc1 from '../../public/images/Vector.svg';
import { InputSearch, Option, Content, FormControlSearch, ImageSearch, FormControlLanguage, Select, FormControlDate, FormControlGenre, FormControlAdult } from '../styles';
import { useDispatch } from 'react-redux';
import { getMoviesByFilter, getMoviesByLanguage, getMoviesBySearch } from '../redux/actions';

interface HeaderProps {
  changeOutLanguage: Function;
}

interface State {
  value: string;
  language: string;
  genre: string;
  selectedDate: null | string | Date;
  adult: boolean;
}

export const Header: React.FC<HeaderProps> = ({ changeOutLanguage }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [state, setState] = useState<State>({
    value: '',
    language: '',
    genre: '',
    selectedDate: null,
    adult: false,
  });

  const handleChange = (field: keyof State, newValue: string | SelectChangeEvent | Date | boolean) => {
    setState((prevState) => ({
      ...prevState,
      [field]: field === 'selectedDate' ? (newValue as Date).toISOString().split('T')[0] : newValue,
    }));
  };

  const handleChangeValue = () => {
    dispatch(getMoviesBySearch({ searchValue: state.value, language: state.language }));
  };

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    handleChange('language', event.target.value);
    changeOutLanguage(event.target.value);
    changeLanguage(event.target.value);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (state.genre !== '' && state.selectedDate !== null) {
        dispatch(
          getMoviesByFilter({
            genreId: state.genre,
            selectedDate: state.selectedDate,
            includeAdult: state.adult,
            value: '',
            language: state.language,
          })
        );
      }
      if (state.language !== '') {
        dispatch(getMoviesByLanguage({ language: state.language }));
      }
    };

    fetchData();
  }, [state.genre, state.selectedDate, state.adult, state.language, dispatch]);

  return (
    <Container>
      <Content>
        <FormControlSearch>
          <ImageSearch src={imgSrc1} alt="где картинка?" onClick={handleChangeValue} />
          <InputSearch onChange={(e) => handleChange('value', e.target.value)} />
        </FormControlSearch>
        <FormControlLanguage>
          <InputLabel id="demo-simple-select-helper-label">{t('language')}</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={state.language}
            label="language"
            onChange={handleChangeLanguage}
          >
            <Option value={'en'}>English</Option>
            <Option value={'ru'}>Русский</Option>
            <Option value={'uk'}>Українська</Option>
          </Select>
        </FormControlLanguage>
        <FormControlDate>
          <DatePicker label={t('datapicker')} onChange={(date) => handleChange('selectedDate', date)} />
        </FormControlDate>
        <FormControlGenre>
          <InputLabel sx={{ fontSize: '10px', marginTop: '5px' }} id="demo-simple-select-helper-label">
            {t('genre')}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={state.genre}
            label="Ganre"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange('genre', event.target.value)}
          >
            <Option value={27}>Horror</Option>
            <Option value={35}>Comedia</Option>
            <Option value={878}>Sci-fi</Option>
            <Option value={14}>Fantasy</Option>
            <Option value={16}>Animation</Option>
            <Option value={28}>Action</Option>
          </Select>
        </FormControlGenre>
        <FormControlAdult>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            18+<Checkbox onClick={() => handleChange('adult', true)} />
          </div>
        </FormControlAdult>
      </Content>
    </Container>
  );
};
