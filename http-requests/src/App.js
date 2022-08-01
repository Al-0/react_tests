import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error('Something went wrong...');
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
        };
      });
  
      setMovies(transformedMovies);
    }
    catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  let content = <p>Found no movies.</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        { content }
      </section>
    </React.Fragment>
  );
}

export default App;
