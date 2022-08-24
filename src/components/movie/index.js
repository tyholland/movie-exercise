import React, { useState } from "react";
import styles from "./movie.module.css";
import HeartRedIcon from "../../icon/heartRed";
import HeartWhiteIcon from "../../icon/heartWhite";
import { updateFavorites } from "../../requests";

const Movie = ({ data }) => {
  const { Title, Poster, favorite, imdbID } = data;
  const [favMovie, setFavMovie] = useState(favorite);

  const handleFavorites = async (isFav) => {
    await updateFavorites(imdbID, isFav);

    setFavMovie(isFav);
  };

  return (
    <div className={ styles.movieContainer }>
      <div className={ styles.moviePosterContainer }>
        <img src={ Poster } alt={ Title } className={ styles.moviePoster } />
        { favMovie && (
          <button className={ styles.movieHeart } onClick={ () => handleFavorites(false) }>
            <HeartRedIcon />
          </button>
        )}
        { !favMovie && (
          <button className={ styles.movieHeart } onClick={ () => handleFavorites(true) }>
            <HeartWhiteIcon />
          </button>
        )}
      </div>
      <div className={ styles.movieTitle }>
        { Title }
      </div>
    </div>
  );
};

export default Movie;
