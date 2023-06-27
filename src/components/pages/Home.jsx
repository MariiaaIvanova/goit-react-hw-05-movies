import { useEffect, useState } from 'react';
import { HomeTitle } from './Home.styled';
import { getTrendingMovies } from 'components/services/apiService';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { toast } from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function getListMovies() {
      try {
        const movies = await getTrendingMovies();

        if (movies && movies.length === 0) {
          return toast('Sorry, try again later');
        }
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getListMovies();
  }, []);

  return (
    <main>
      <HomeTitle>Trending today</HomeTitle>
      {movies && <MovieList movies={movies} />}
      {loader && <Loader />}
    </main>
  );
}

export default Home;




