import React, { useState } from "react";
import { StyledMovieCard } from "./StyledMovieCard";

interface IMovieCard {
  movie: any;
}

export const MovieCard = ({ movie }: IMovieCard) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <StyledMovieCard.Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {movie?.poster_path ? <img src={poster} alt="poster" /> : "nem obrazok"}
          <StyledMovieCard.Text isHovered={isHovered}>{movie?.title}</StyledMovieCard.Text>
    </StyledMovieCard.Container>
  );
};
