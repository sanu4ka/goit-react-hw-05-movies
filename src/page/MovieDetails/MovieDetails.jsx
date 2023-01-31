import css from './MovieDetails.module.css';
import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/Api/Api';
import { ButtonBack } from '../../components/ButtonBack/ButtonBack';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => {
        if (res.status === 'Released') {
          setMovieDetails(res);
          return;
        }

        alert(res.status_message);
      })
      .catch();
  }, [movieId]);
  if (!movieDetails) {
    return (
      <section className={css.details}>
        <ButtonBack />
      </section>
    );
  }

  const {
    name,
    title,
    release_date,
    overview,
    genres,
    poster_path,
    vote_average,
  } = movieDetails;
  const releaseYaer = new Date(release_date);
  let poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  if (!poster_path) {
    poster =
      'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
  }

  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <section className={css.details}>
        <ButtonBack />
        <div className={css.informaton}>
          <img src={poster} alt={title || name} width="240" height="320" />
          <div>
            <h2>
              {title || name} ({releaseYaer.getFullYear()})
            </h2>
            <p>User score: {Math.round(vote_average * 10)} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>
              {genres &&
                genres.length > 0 &&
                genres.map(genr => genr.name).join(', ')}
            </p>
          </div>
        </div>
      </section>
      <section className={css.details}>
        <p>Addination information</p>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Outlet />
        </section>
      </Suspense>
    </>
  );
};

export default MovieDetails;
