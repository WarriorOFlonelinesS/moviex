'use client'
import arrow from '../../../../public/images/arrow.svg'
import { Container } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import star from '../../../../public/images/Star.svg'
import fallbackImage from '../../../../public/images/placeholder.png'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from '../../Modal';
import { apiKey, urlImages, urlMovie } from '@/constans/urls';

type Props = {
    params: {
        id: string,
        lang: string
    }
}

async function fetchFilm(id: string, lang: string = 'en') {

    try {
        const response = await axios.get(`${urlMovie}${id}?api_key=${apiKey}&language=${lang}`);
        return response
    } catch (error) {
        console.error('Error:', error);
    }
}

export default function MoviePage({ params: { id,lang } }: Props) {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const [film, setFilm] = useState({
        poster_path: null,
        vote_average: null,
        original_title: null,
        overview: null
    })
    const language = id.replace(/\d+/g, '');

        useEffect(() => {
            fetchFilm(id, language).then((resp: any) => setFilm(resp.data))
        }, [])

    const posterUrl = film.poster_path !== null
        ? `${urlImages}${film.poster_path}`
        : fallbackImage
    return (
        <div className="film">
            <Modal showModal={modalVisible} closeModal={closeModal} movieId={Number(id)} />
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
                                </span>
                                {film.vote_average}
                            </p>
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