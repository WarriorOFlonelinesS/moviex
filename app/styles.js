import {
  Select,
  MenuItem,
  Container,
  FormControl,
  InputLabel,
} from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { Poster } from "./components/Poster";

export const Select = styled(Select)`
  font-size: 15px;
  height: 30px;
`;

export const Option = styled(MenuItem)`
  font-size:10px
  margin-top:-110px;
  width:100px
`;

export const InputSearch = styled.input`
  margin-top: 2px;
  margin-left: 29px;
  border: none;
  margin-right: 10px;
  width: 187px;
  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;
export const MainContent = styled(Container)`
  background-color: #ffe08f;
  position: relative;
`;

export const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const FormControlSearch = styled(FormControl)`
  border: 1px solid black;
  height: 23px;
  width: 238px;
  border-radius: 20px;
  position: relative;
`;

export const ImageSearch = styled(Image)`
  position: absolute;
  left: 10px;
  top: 2px;
  cursor: pointer;
`;

export const FormControlLanguage = styled(FormControl)`
  min-width: 140px;
  & select {
    font-size: 15px;
    height: 30px;
  }
`;

export const FormControlDate = styled(FormControl)`
  height: 20px;
`;

export const FormControlGenre = styled(FormControl)`
  min-width: 100px;
  min-height: 100px;
  top: 35px;
`;

export const FormControlAdult = styled(FormControl)`
  display: flex;
  align-items: center;
`;

export const InputLabel = styled(InputLabel)`
  font-size: 10px;
  margin-top: 4px;
`;

export const Title = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.25);
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Poster = styled(Poster)`
  padding-left: 146px;

`;
