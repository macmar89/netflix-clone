import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledMovieCard } from "./StyledMovieCard";
import { IMAGE_URL } from "../../constants/apiConstants";
import {Movie} from "../../types/Movie";

interface IMovieCard {
  movie: Movie;
  showTitle?: boolean;
}

export const MovieCard = ({ movie, showTitle }: IMovieCard) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const poster = `${IMAGE_URL}${movie?.backdrop_path}`;

  return (
    <Link to={`/browse/${movie?.id}`}>
      <StyledMovieCard.Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {movie?.backdrop_path && movie?.backdrop_path !== null? (
          <img src={poster} alt="poster" />
        ) : (
          <img src="/images/movie.jpg" alt="movie" />
        )}
        <StyledMovieCard.Text isHovered={showTitle || isHovered}>
          {movie?.title}
        </StyledMovieCard.Text>
      </StyledMovieCard.Container>
    </Link>
  );
};
