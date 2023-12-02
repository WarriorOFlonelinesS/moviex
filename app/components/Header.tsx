import { FormControl, InputLabel, Container, Checkbox }
  from '@mui/material';
import { SelectChangeEvent } from '@mui/material'; 
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Image from 'next/image';
import imgSrc1 from '../img/Vector.svg';
import imgSrc2 from '../img/Moviex.svg'
import { useState } from 'react';
import { Input1, Select1, Option } from '../styles'

export const Header = () => {
  const [language, setLanguage] = useState(10);
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  const [genre, setGenre] = useState(1);
  const handleChangeGenre = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
  };
  return (
    <Container>
      <div>
        <Image src={imgSrc2} style={{ marginBottom: '15px' }} alt='logo' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection:'row',}}>
 
        <FormControl sx={{

          border: '1px solid black',
          height: '23px',
          width: '238px',
          borderRadius: '20px',
          position:'relative'
        }}>
                 <Image src={imgSrc1} style={{
          position: 'absolute',
          left: '10px',
          top:'2px',
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
        <FormControl sx={{ m: 1, minWidth: 100, minHeight: 100, top: '35px'}}>
          <InputLabel sx={{ fontSize: '10px', marginTop: '5px' }} id="demo-simple-select-helper-label">Genre</InputLabel>
          <Select1
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={genre}
            label="Ganre"
            onChange={handleChangeGenre}
          >
            <Option value={1}>Horror</Option>
            <Option value={2}>Comedia</Option>
            <Option value={3}>Sci-fi</Option>
            <Option value={4}>Fantasy</Option>
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