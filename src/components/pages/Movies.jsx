import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { getSearchMovies } from 'components/services/apiService';
import { MoviesContainer } from './Movies.styled';
import MovieList from 'components/MovieList/MovieList';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }

    getSearchMovies(query)
      .then(foundedMovies => {
        setMovies(foundedMovies);
      })
      .catch(error => {
        console.error(error.message);
        setMovies([]);
      });
  }, [query]);

  const handleInputChange = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: event.target.value });
  };

  return (
    <MoviesContainer>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        type="text"
        value={query}
        placeholder="Enter movie's title..."
        onChange={handleInputChange}
      />
      {query && <h1>Found movies</h1>}
      {!!movies.length && <MovieList movies={movies} />}
    </MoviesContainer>
  );
};

export default Movies;