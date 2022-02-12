import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledBrowse } from "./StyledBrowse";
import { Navbar } from "../../global/components/Navbar";
import { MovieCard } from "../../layout/MovieCard";
import { MovieList } from "../../global/components/MovieList";

const key = process.env.REACT_APP_API_KEY;

const Browse = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`
        )
        .then((res) => setMovies(res.data?.results.slice(0, 4)))
        .catch((err) => console.log(err));
    };
    fetchMovies();
  }, []);

  return (
    <StyledBrowse.Container>
      <Navbar />
      {/*<StyledBrowse.MovieList >*/}

      {/*  {movies?.map((movie: any) => (*/}
      {/*    <MovieCard movie={movie} key={movie.id} />*/}
      {/*  ))}*/}
      {/*</StyledBrowse.MovieList>*/}

      <div style={{ paddingTop: "100px", width: "100vw" }}></div>
    </StyledBrowse.Container>
  );
};

export default Browse;
