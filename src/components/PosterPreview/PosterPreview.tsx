import React, {FC} from 'react';
import styles from './PosterPreview.module.css'

type IProps={
    posterPath: string,
    movieTitle: string
}

const PosterPreview:FC<IProps> = ({posterPath, movieTitle}) => {
    const posterBaseURL = `https://image.tmdb.org/t/p/w300${posterPath}`
    const title = movieTitle

    return (
        <div className={styles.posterDiv}>
            <img src={posterBaseURL} alt={title} className={styles.posterImg}/>
        </div>
    );
};

export default PosterPreview;