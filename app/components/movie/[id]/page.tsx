'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import star from '../../../../public/images/Star.svg';
import fallbackImage from '../../../../public/images/placeholder.png';
import Link from 'next/link';
import { Container } from '@mui/material';
import { Modal } from '../../Modal';
import { apiKey, urlImages, urlMovie } from '@/constans/urls';
import { useTranslation } from 'react-i18next';

type Props = {
  params: {
    id: string;
  };
};

interface Film {
  poster_path: null | string;
  vote_average: null | number;
  original_title: null | string;
  overview: null | string;
}

async function fetchFilm(id: string, lang: string = 'en'): Promise<Film> {
  try {
    const response = await axios.get(`${urlMovie}${id}?api_key=${apiKey}&language=${lang}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default function MoviePage({ params: { id } }: Props) {
  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [film, setFilm] = useState<Film>({
    poster_path: null,
    vote_average: null,
    original_title: null,
    overview: null,
  });

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const language = id.replace(/\d+/g, '');

  useEffect(() => {
    let isMounted = true;
    i18n.changeLanguage(language);

    const fetchData = async () => {
      try {
        const filmData = await fetchFilm(id, language);

        if (isMounted) {
          setFilm(filmData);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id, language]);

  const posterUrl = film.poster_path !== null ? `${urlImages}${film.poster_path}` : fallbackImage;

  return (
    <div className="film">
      <Modal showModal={modalVisible} closeModal={closeModal} movieId={Number(id)} lng={language} />
      <Container>
        <Link className="film__link" href="/">
          <span className="arrow">
            <Image src="/images/arrow.svg" alt="arrow" width={20} height={20} />
          </span>{' '}
          {t('backToMain')}
        </Link>
        <div className="film-content">
          <Image width={444.685} height={700} src={posterUrl} alt="poster" />
          <div className="film-description">
            <div className="film-header">
              <p className="film-vote_avarage">
                <span className="star">
                  <Image src={star} alt={t('star')} width={20} height={20} />
                </span>
                {film.vote_average}
              </p>
              <h1 className="film__title">{film.original_title}</h1>
              <button className="film-raiting" onClick={openModal}>
                {t('activeModal')}
              </button>
            </div>
            <p className="film__overview">{film.overview}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
