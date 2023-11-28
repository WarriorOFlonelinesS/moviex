import {Select, MenuItem} from '@mui/material';
import styled, { css } from 'styled-components';

export const Select1 = styled(Select)`
font-size:15px;
height:30px;

`
export const Option = styled(MenuItem)`
font-size:10px
margin-top:-110px;
`
export const Input1 = styled.input`
  margin-top: 2px;
  margin-left: 29px;
  border: none;
  margin-right: 10px;
  width: 187px;
  &:focus{
    outline:none;
    border-bottom: 1px solid black;
  }
`
