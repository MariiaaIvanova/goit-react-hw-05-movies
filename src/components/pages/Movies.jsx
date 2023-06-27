import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  MovieList  from 'components/MovieList/MovieList';
import { SearchContainer } from 'components/SearchContainer/SearchContainer';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { getSearchMovies } from 'components/services/apiService';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fechMovies() {
      try {
        const movies = await getSearchMovies(searchQuery);
        if (movies.length === 0) {
          return toast.error('Movie Not Found');
        }
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    setLoader(true);
    fechMovies();
  }, [searchQuery]);

  return (
    <>
      <main>
        <SearchContainer onSubmit={updateQueryString} />
        {movies && <MovieList movies={movies} />}
      </main>
      {loader && <Loader />}
    </>
  );
}