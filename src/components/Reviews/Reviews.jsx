import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getReviewsMovies } from 'components/services/apiService';
import { toast } from 'react-hot-toast';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);

    async function fetchReviews() {
      try {
        const reviews = await getReviewsMovies(movieId);
        if (reviews.length === 0) {
          setError(true);
          return toast('Sorry, there are no reviews');
        }
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      {error && <p>We don't have reviews for this movie</p>}
      {loader && <Loader />}
    </>
  );
};
export default Reviews;





