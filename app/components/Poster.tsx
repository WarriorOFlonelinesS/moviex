import imgSrc1 from '../img/Rectangle 24.svg';
import Image from "next/image";

export const Poster = ({ movie }) => {
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.jpg'; // Замените '/placeholder.jpg' на URL вашего запасного изображения

    return (
        <div style={{ textAlign: 'center'}}>
            <Image alt='poster' width={161.59} height={253.8} src={posterUrl}></Image>
            <p style={{ fontSize: '12px', width: '150px', fontWeight: 'bold' }}>{movie.title}</p>
            <p style={{ fontSize: '10px', width: '150px' }}>{movie.release_date
}</p>
            <p style={{ fontSize: '10px', width: '150px' }}>Horror comedian</p>
        </div>
    )
}