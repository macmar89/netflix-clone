import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledBrowse } from "./StyledBrowse";
import { Navbar } from "../../global/components/Navbar";
import {MovieCard} from '../../layout/MovieCard'

const key = process.env.REACT_APP_API_KEY;

const Browse = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await axios
        .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`)
        .then((res) => setMovies(res.data?.results.slice(0,10)))
        .catch((err) => console.log(err));
    };
    fetchMovies();
  }, []);

  return (
    <StyledBrowse.Container>
      <Navbar />
      <StyledBrowse.MovieList >

        {movies?.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </StyledBrowse.MovieList>
    </StyledBrowse.Container>
  );
};

export default Browse;
