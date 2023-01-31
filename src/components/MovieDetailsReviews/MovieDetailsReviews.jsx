import css from './MovieDetailsReviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsReviews } from '../../services/Api/Api';

const MovieDetailsReviews = () => {
  const { movieId } = useParams();
  const [movieDetailsReviews, setMovieDetailsReviews] = useState(null);

  useEffect(() => {
    getMovieDetailsReviews(movieId)
      .then(res => {
        if (res.total_results) {
          setMovieDetailsReviews(res.results);
        }
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movieDetailsReviews) {
    return;
  }

  return (
    <>
      <ul className={css.reviews}>
        {movieDetailsReviews.map(item => {
          const { id, author, content } = item;

          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieDetailsReviews;
