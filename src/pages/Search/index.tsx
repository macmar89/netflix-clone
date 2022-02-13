import React, { useEffect, useState } from "react";
import { StyledSearch } from "./StyledSearch";
import { Navbar } from "../../global/components/Navbar";
import { Pagination } from "../../global/components/Pagination";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { SEARCH_API_URL } from "../../global/constants/apiConstants";
import MovieList from "../../layout/MovieList";
import Loader from "../../global/components/Loader";

const Search = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchedMovies, setSearchedMovies] = useState<null | any>(null);
  const { search } = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const query = search.slice(search.indexOf("=") + 1, search.length);

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      setIsLoading(true);
      await axios
        .get(
          currentPage === 1
            ? `${SEARCH_API_URL}&query=${query}`
            : `${SEARCH_API_URL}&query=${query}&page=${currentPage}`
        )
        .then((res) => setSearchedMovies(res.data))
        .then(() => setIsLoading(false))
        .catch((err) => console.log(err));
    };
    fetchSearchedMovies();
  }, [query, currentPage, setSearchedMovies]);

  if (isLoading) return <Loader />;

  return (
    <StyledSearch.Container>
      <Navbar />
      <StyledSearch.Content>
        <h1>Výsledky pre hľadaný výraz : {query.replaceAll("+", " ")}</h1>
        <MovieList movies={searchedMovies} setCurrentPage={setCurrentPage} />
      </StyledSearch.Content>
    </StyledSearch.Container>
  );
};

export default Search;
