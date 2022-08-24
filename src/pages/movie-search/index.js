import { useEffect, useState } from 'react';
import styles from './movie-search.module.css';
import Movie from '../../components/movie';
import Search from '../../components/search';
import { searchMovies } from '../../requests';

const MovieSearch = () => {
  const [movieList, setMovieList] = useState(null);
  const [searchWord, setSearchWord] = useState(null);

  const getSearchMovies = async () => {
    try {
      let movies = await searchMovies(searchWord);

      movies = movies.map(item => {
        return <Movie key={ item.imdbID } data={ item } />
      });

      setMovieList(movies);
    } catch {
      setMovieList([]);
    }
  };

  useEffect(() => {
    if (!!searchWord) {
      getSearchMovies();
    }
  }, [searchWord]);

  return (
    <div>
      <h1>
        Movie Search
      </h1>
      <Search setSearchWord={ setSearchWord } />
      <div className={ styles.listOfMovies }>
        { movieList?.length > 0 && movieList }
        { movieList?.length === 0 && (
          <div className={ styles.noResults }>
            There are no results matching the movie title "{ searchWord }"
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieSearch;
