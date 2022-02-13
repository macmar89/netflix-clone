import React, { Dispatch, SetStateAction } from "react";
import { StyledMovieList } from "./StyledMovieList";
import { Pagination } from "../../global/components/Pagination";
import { MovieCard } from "../../layout/NewMovieCard";

interface IMovieList {
  movies: any;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const MovieList = ({ movies, setCurrentPage }: IMovieList) => {
  return (
    <StyledMovieList.Container>
      <StyledMovieList.Main>
        {movies?.results?.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
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
