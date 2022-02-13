import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledBrowse } from "./StyledBrowse";
import { Navbar } from "../../global/components/Navbar";
import { RANDOM_MOVIES_API_URL } from "../../global/constants/apiConstants";
import { MovieCard } from "../../layout/NewMovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

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

  const options = {
    slidesPerView: 5,
    pagination: { clickable: true },
    modules: [Pagination, Navigation],
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: true,
  };

  return (
    <StyledBrowse.Container>
      <Navbar />

      <div style={{ paddingTop: "100px", width: "100vw" }}>
        {movies?.map((movie: any) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>

      <Swiper {...options}>
        {movies?.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBrowse.Container>
  );
};

export default Browse;
