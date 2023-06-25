import { useEffect, useState } from 'react';
import { HomeContainer, HomeTitle } from './Home.styled';
import { getTrendingMovies } from 'components/services/apiService';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        setMovies(response);
      })
      .catch(error => console.error(error.message));
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending movies</HomeTitle>
      {!!movies.length && <MovieList movies={movies} />}
    </HomeContainer>
  );
};

export default Home;