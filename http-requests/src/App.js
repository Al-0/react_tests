import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("https://react-http-55272-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error('Something went wrong...');
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      // const transformedMovies = data.results.map((movie) => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     openingText: movie.opening_crawl,
      //   };
      // });
  
      setMovies(loadedMovies);
    }
    catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-55272-default-rtdb.firebaseio.com/movies.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
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
