import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledBrowse } from "./StyledBrowse";
import { Navbar } from "../../global/components/Navbar";
import { RANDOM_MOVIES_API_URL } from "../../global/constants/apiConstants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MovieCard} from "../../layout/NewMovieCard";

const Browse = () => {
  const [movies, setMovies] = useState<null | any>(null);

  const getRandomYear = () => {
    const date = new Date();
    return Math.round(Math.random() * (date.getFullYear() - 1980) + 1980);
  };

  const fetchMovies = async () => {
    await axios
      .get(`${RANDOM_MOVIES_API_URL}${getRandomYear()}`)
      .then((res) => setMovies(res.data?.results.slice(0, 10)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const options = {
    slidesToShow: 5,
    infinite: true,
    arrows: false
  }

  return (
    <StyledBrowse.Container>
      <Navbar />

      <div style={{ paddingTop: "100px", width: "100vw" }}>
        {movies?.map((movie: any) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>

      <div className='slider'>
        <Slider {...options}>
          {movies?.map((movie: any) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    </StyledBrowse.Container>
  );
};

export default Browse;
