import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetailsMovies } from 'components/services/apiService';
import { Loader } from 'components/Loader/Loader';
import {Container, List, ListInfo, LinkInfo, Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovieDetailsFilms = () => {
      setLoading(true);

      getDetailsMovies(movieId)
        .then(detailMovie => {
          setMovieDetails(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getMovieDetailsFilms();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieDetails || {};

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">Go back</Button>
      </Link>
      {loading && <Loader />}

      {movieDetails && (
        <Container>
          <img
            width="300px"
            src={
              poster_path? `https://image.tmdb.org/t/p/w500${poster_path}` : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </List>
          </div>
        </Container>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;