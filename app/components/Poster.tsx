import Image from "next/image";
import fallbackImage from '../placeholder.png'
import tooltipImage from '../tooltip.svg'
import Link from "next/link";
export const Poster = ({ movie,index }: any) => {
    const posterUrl = movie.poster_path !== null
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : fallbackImage;

    return (
        <div className='poster' style={{ }}>
            <div className="poster-link">
            <Link href={`/components/movie/${movie.id}`}>
                <Image alt='poster' width={161.59} height={253.8} src={posterUrl}></Image>
            </Link>
                <div className="tooltip">
                    <Image src={tooltipImage} alt="" />
                    <span className="tooltiptext">{movie.overview}</span>
                </div>
            </div>
            <p style={{ fontSize: '12px', width: '150px', fontWeight: 'bold' }}>{movie.title}</p>
            <p style={{ fontWeight: 'bold', fontSize: '10px', width: '150px' }}>{movie.release_date
            }</p>
        </div>
    )
}