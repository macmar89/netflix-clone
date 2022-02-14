import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MovieCard } from "../MovieCard";

import "swiper/css/pagination";
import { StyledMovieCarousel } from "./StyledMovieCarousel";
import {Movie} from "../../types/Movie";

export const MovieCarousel = ({ movies }: { movies: Movie[] }) => {
  const options = {
    autoplay: true,
    slidesPerView: 2,
    modules: [Navigation],
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <StyledMovieCarousel.Container>
      <Swiper {...options}>
        {movies?.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledMovieCarousel.Container>
  );
};
