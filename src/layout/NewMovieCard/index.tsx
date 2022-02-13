import React from 'react';
import {StyledMovieCard} from "./StyledMovieCard";

interface IMovieCard {
  movie: any
}

const MovieCard = ({movie} : IMovieCard) => {
  return (
    <StyledMovieCard.Container>
      {movie?.title}
    </StyledMovieCard.Container>
  );
};

export default MovieCard;
