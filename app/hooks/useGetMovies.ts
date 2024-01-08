import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { getMovies } from "../redux/actions";

export const useGetMovies = () =>{
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
}