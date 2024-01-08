'use client'
import arrow from '../../../img/arrow.svg'
import { Container } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import star from '../../../Star.svg'
import fallbackImage from '../../../placeholder.png'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from '../../Modal';

type Props = {
    params: {
        id: number,
    }
}

async function fetchFilm(id:number) {
  
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=88850dae741dd06839de667d163566d7`);
        return response
    } catch (error) {
        console.error('Error:', error);
    }
}

export default function MoviePage({ params: { id } }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const [film, setFilm] = useState({})

    useEffect(() => {
        fetchFilm(id).then((resp: any) => setFilm(resp.data))
    }, [])

    const posterUrl = film.poster_path !== null
    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
    : fallbackImage;
return (  
    <div className="film">
    <Modal showModal={modalVisible} closeModal={closeModal} movieId = {id} />
    <Container>
        <Link className="film__link" href='/'>
            <span className='arrow'><Image src={arrow} alt='arrow' /></span>  Back to main
        </Link>
        <div className="film-content">
            <Image width={444.685} height={700} src={posterUrl} alt='poster' />
            <div className='film-description'>
                <div className='film-header'>
                    <p className='film-vote_avarage'>
                    <span className='star'>
                        <Image src={star} alt="" />
                    </span>{film.vote_average}</p>
                    <h1 className='film__title'>{film.original_title}</h1>
                    <button className='film-raiting' onClick={openModal}>Leave raiting</button>
                </div>
                <p className='film__overview'>
                    {film.overview}
                </p>
            </div>
        </div>
    </Container>
</div>

)
}