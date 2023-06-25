import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCreditsMovies } from 'components/services/apiService';
import { Loader } from 'components/Loader/Loader';
import { List, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = () => {
      setLoading(true);

      getCreditsMovies(movieId)
        .then(cast => {
          setCast(cast);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <List>
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={
                profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}`: `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};
export default Cast;