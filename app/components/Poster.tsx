import Image from "next/image";
import star from '../../public/images/Star.svg'
import fallbackImage from '../../public/images/placeholder.png'
import tooltipImage from '../../public/images/tooltip.svg'
import Link from 'next/link';
import { urlImages, urlMoviePage } from "@/constans/urls";
import { Text } from "../styles";

export const Poster = ({ movie, lang}: any) => {
    const posterUrl = movie.poster_path !== null
        ? `${urlImages}${movie.poster_path}`
        : fallbackImage;

    return (
        <div className='poster'>
            <div className="poster-link">
                <Link href={`${urlMoviePage}${movie.id}${lang}`}>
                    <Image alt='poster' width={161.59} height={253.8} src={posterUrl}></Image>
                </Link>
                <div className="tooltip">
                    <Image src={tooltipImage} alt="" />
                    <span className="tooltiptext">{movie.overview}</span>
                    <p className='poster-vote_avarage'>
                        <span className='star'>
                            <Image className="star_poster" src={star} alt="" />
                        </span>{movie.vote_average}
                    </p>
                </div>
            </div>
            <Text>
                {movie.title}
            </Text>
            <Text>
                {movie.release_date}
            </Text>
        </div>
    )
}

