import React, { useEffect, useState } from "react";
import { StyledSearch } from "./StyledSearch";
import { Navbar } from "../../global/components/Navbar";
import { Pagination } from "../../global/components/Pagination";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { SEARCH_API_URL } from "../../global/constants/apiConstants";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedMovies, setSearchedMovies] = useState<null | any>(null);
  const { search } = useLocation();

  const query = search.slice(search.indexOf("=") + 1, search.length);

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      await axios
        .get(currentPage ===1 ? `${SEARCH_API_URL}&query=${query}` : `${SEARCH_API_URL}&query=${query}&page=${currentPage}`)
        .then((res) => setSearchedMovies(res.data))
        .then(() => console.log(searchedMovies))
        .catch((err) => console.log(err));
    };
    fetchSearchedMovies();
  }, [query, currentPage, setSearchedMovies]);

  return (
    <StyledSearch.Container>
      <Navbar />
      <StyledSearch.Content>
        {currentPage}
        {searchedMovies?.results?.map((movie: any) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
        {searchedMovies && searchedMovies?.total_pages > 1 && (
          <Pagination
            countOfPages={searchedMovies?.total_pages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </StyledSearch.Content>
    </StyledSearch.Container>
  );
};

export default Search;
