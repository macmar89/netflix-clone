import React, {useState} from "react";
import { StyledSearch } from "./StyledSearch";
import { Navbar } from "../../global/components/Navbar";
import { useRecoilValue } from "recoil";
import { SearchMovieAtom } from "../../global/recoil/SearchMovieAtom";
import ReactPaginate from "react-paginate";
import {Pagination} from "../../global/components/Pagination";

const Search = () => {
  const movies = useRecoilValue(SearchMovieAtom);
  const [currentPage, setCurrentPage] = useState(1);

  const paginateOptions = {
    pageRangeDisplayed: 5
  };



  console.log(movies);
  return (
    <StyledSearch.Container>
      <Navbar />
      <StyledSearch.Content>
        {currentPage}
        {movies?.results?.map((movie: any) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
        {movies?.total_pages > 1 && (
          <Pagination countOfPages={movies?.total_pages} setCurrentPage={setCurrentPage} />
        )}
      </StyledSearch.Content>
    </StyledSearch.Container>
  );
};

export default Search;
