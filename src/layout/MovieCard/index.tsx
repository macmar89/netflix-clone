import React, {useState} from "react";
import { StyledMovieCard } from "./StyledMovieCard";

interface IMovieCardProps {
  movie: any;
}

export const MovieCard = ({ movie }: IMovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <StyledMovieCard.Container>
      <StyledMovieCard.Poster
        poster={poster}
      />

    </StyledMovieCard.Container>
  );
};
