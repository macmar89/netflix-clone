import React, { useState } from "react";
import { StyledMovieCard } from "./StyledMovieCard";
import {IMAGE_URL} from "../../global/constants/apiConstants";

interface IMovieCard {
  movie: any;
}

export const MovieCard = ({ movie }: IMovieCard) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const poster = `${IMAGE_URL}${movie?.backdrop_path}`

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
