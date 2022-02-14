import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { StyledSearch } from "./StyledSearch";
import { SEARCH_API_URL } from "../../global/constants/apiConstants";
import { Loader } from "../../global/components/Loader";
import { Navbar } from "../../global/components/Navbar";
import { SearchedMovie } from "../../global/types/Movie";
import MovieList from "../../layout/MovieList";

const Search = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchedMovies, setSearchedMovies] = useState<SearchedMovie | any>(
    null
  );
  const { search } = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const query = search.slice(search.indexOf("=") + 1, search.length);
  const history = useHistory();

  useEffect(() => {
    if (!query) history.push("/browse");
    const fetchSearchedMovies = async () => {
      setIsLoading(true);
      await axios
        .get(
          currentPage === 1
            ? `${SEARCH_API_URL}&query=${query}`
            : `${SEARCH_API_URL}&query=${query}&page=${currentPage}`
        )
        .then((res) => {
          setSearchedMovies(res.data);
          setCurrentPage(res?.data?.page);
        })
        .then(() => setIsLoading(false))
        .catch((err) => console.log(err));
    };
    fetchSearchedMovies();
  }, [query, currentPage, setSearchedMovies, history]);

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
