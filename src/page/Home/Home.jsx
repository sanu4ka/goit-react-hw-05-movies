import css from './Home.module.css';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/Api/Api';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      setMoviesList(res.results);
    });
  }, []);

  return (
    <section className={css.trending}>
      <h1>Trending today</h1>
      {moviesList.length > 0 && <MoviesList moviesList={moviesList} />}
    </section>
  );
};

export default Home;
