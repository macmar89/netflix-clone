import React, { Dispatch, SetStateAction } from "react";
import { StyledMovieList } from "./StyledMovieList";
import { Pagination } from "../../global/components/Pagination";
import { MovieCard } from "../../global/components/MovieCard";
import {Movie, SearchedMovie} from "../../global/types/Movie";

interface IMovieList {
  movies: SearchedMovie;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const MovieList = ({ movies, setCurrentPage }: IMovieList) => {
  return (
    <StyledMovieList.Container>
      <StyledMovieList.Main>
        {movies?.results?.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} showTitle />
        ))}
      </StyledMovieList.Main>
      {movies && movies?.total_pages > 1 && (
        <Pagination
          countOfPages={movies?.total_pages}
          setCurrentPage={(e) => setCurrentPage(e)}
        />
      )}
    </StyledMovieList.Container>
  );
};

export default MovieList;
