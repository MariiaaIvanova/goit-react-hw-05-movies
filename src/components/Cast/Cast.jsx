import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCreditsMovies } from 'components/services/apiService';
import { Loader } from 'components/Loader/Loader';
import { List } from './Cast.styled';
import { toast } from 'react-hot-toast';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCasts() {
      try {
        const casts = await getCreditsMovies(movieId);
        if (casts.length === 0) {
          setError(true);
          return toast('There are no cast! Please, try again later');
        }
        setCasts(casts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchCasts();
  }, [movieId]);

  return (
    <>
      {casts && (
        <List>
          {casts.map(cast => (
            <li key={cast.cast_id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : 'https://via.placeholder.com/100x150?text=Photo+Not+Found'
                }
                alt={cast.name}
                width="200"
              />
              <h4>{cast.name}</h4>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </List>
      )}
      {error && <p>We don't have cast for this movie </p>}
      {loader && <Loader />}
    </>
  );
};
export default Cast;




