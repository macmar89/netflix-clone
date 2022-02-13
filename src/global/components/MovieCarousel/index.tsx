import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MovieCard } from "../../../layout/NewMovieCard";

import "swiper/css/pagination";
import { StyledMovieCarousel } from "./StyledMovieCarousel";

export const MovieCarousel = ({ movies }: { movies: any }) => {
  const options = {
    slidesPerView: 5,
    modules: [Navigation],
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: true,
  };

  return (
    <StyledMovieCarousel.Container>
      <Swiper {...options}>
        {movies?.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledMovieCarousel.Container>
  );
};