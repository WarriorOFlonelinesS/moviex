import Image from "next/image";
import star from '../../public/images/Star.svg'
import fallbackImage from '../../public/images/placeholder.png'
import tooltipImage from '../../public/images/tooltip.svg'
import Link from 'next/link';
import { urlImages, urlMoviePage } from "@/constans/urls";
import { Text, Title } from "../styles";
import { t } from "i18next";

interface Props {
    movie: {
        title?: string;
        poster_path?: string | null;
        vote_average?: number;
        overview?: string;
        id: number;
        release_date: string
    },
    lang:string
}

export const Poster = ({ movie, lang}: Props) => {
    const posterUrl = movie.poster_path !== null
        ? `${urlImages}${movie.poster_path}`
        : fallbackImage;
    return (
        <div className='poster'>
            <div className="poster-link">
                <Link href={`${urlMoviePage}${movie.id}${lang}`}>
                    <Image alt={t('poster')} width={161.59} height={253.8} src={posterUrl}/>
                </Link>
                <div className="tooltip">
                    <Image src={tooltipImage} alt={t('information')} />
                    <span className="tooltiptext">{movie.overview}</span>
                    <p className='poster-vote_avarage'>
                        <span className='star'>
                            <Image className="star_poster" src={star} alt={t('star')} />
                        </span>{movie.vote_average}
                    </p>
                </div>
            </div>
            <Title>
                {movie.title}
            </Title>
            <Text>
                {movie.release_date}
            </Text>
        </div>
    )
}

