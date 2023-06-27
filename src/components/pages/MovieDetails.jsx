import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { getDetailsMovies } from 'components/services/apiService';
import { Loader } from 'components/Loader/Loader';
import { ListInfo, LinkInfo, Title, Button } from './MovieDetails.styled';
import  MovieCard  from 'components/MovieCard/MovieCard';
import { toast } from 'react-hot-toast';

const MovieDetails = () => {
  const [loader, setLoader] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [previousRoute, setPreviousRoute] = useState('/');
  const [movieDetails, setMovieDetails] = useState({
    backdrop_path: '',
    genres: [],
    overview: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: '',
  });

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await getDetailsMovies(movieId);

        if (Object.keys(movieDetails).length === 0) {
          return toast('Sorry, movie not found! Please try again');
        }
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }

    fetchMovieDetails();

    if (location.state && location.state.from) {
      setPreviousRoute(location.state.from);
    }
  }, [movieId, location.state]);

  const onGoBack = () => {
    navigate(previousRoute);
  };

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/200x300?text=Poster+Not+Found';
  const year = release_date.slice(0, 4);
  const vote = Math.floor(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <main>
        <Button type="button" onClick={onGoBack}>
            Go back
        </Button>
        {movieDetails && (
          <MovieCard
            title={title}
            year={year}
            poster={poster}
            vote={vote}
            overview={overview}
            genres={movieGenres}
          />
        )}

        <Title>Additional information</Title>
        <ListInfo>
          <LinkInfo to="cast">Cast</LinkInfo>
          <LinkInfo to="reviews">Reviews</LinkInfo>
        </ListInfo>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {loader && <Loader />}
    </>
  );
};

export default MovieDetails;




