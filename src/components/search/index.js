import React, { useState } from "react";
import styles from "./search.module.css"

const Search = ({ setSearchWord }) => {
  const [search, setSearch] = useState(null);

  const handleMovieSearch = () => {
    setSearchWord(search);
  };

  const updateSearchWord = (e) => {
    setSearch(e.target.value);
  };

  const enterSearchMovie = (e) => {
    if(e.keyCode === 13){
      handleMovieSearch();
    }
  }

  return (
    <div className={ styles.searchContainer }>
      <input type="text" placeholder="Enter movie title" onChange={ updateSearchWord } onKeyDown={ enterSearchMovie } className={ styles.searchInput } />
      <button onClick={ handleMovieSearch } className={ styles.searchButton }>
        Search
      </button>
    </div>
  )
};

export default Search;