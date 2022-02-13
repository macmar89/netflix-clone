import axios from "axios";
import React, { useEffect, useState } from "react";

import { StyledBrowse } from "./StyledBrowse";

import { MovieCarousel } from "../../global/components/MovieCarousel";
import { Navbar } from "../../global/components/Navbar";

import { RANDOM_MOVIES_API_URL } from "../../global/constants/apiConstants";
import Preview from "../../layout/Preview";

const Browse = () => {
  const [movies, setMovies] = useState<null | any>(null);

  const getRandomYear = () => {
    const date = new Date();
    return Math.round(Math.random() * (date.getFullYear() - 1980) + 1980);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      await axios
        .get(`${RANDOM_MOVIES_API_URL}${getRandomYear()}`)
        .then((res) => setMovies(res.data?.results.slice(0, 10)))
        .catch((err) => console.log(err));
    };

    fetchMovies();
  }, []);

  return (
    <StyledBrowse.Container>
      <Navbar />

      {/*<div style={{ paddingTop: "100px", width: "100vw" }}>*/}
      {/*  {movies?.map((movie: any) => (*/}
      {/*    <div key={movie.id}>{movie.title}</div>*/}
      {/*  ))}*/}
      {/*</div>*/}

      <Preview movie={movies && movies[0]} />

      <MovieCarousel movies={movies} />
    </StyledBrowse.Container>
  );
};

export default Browse;
