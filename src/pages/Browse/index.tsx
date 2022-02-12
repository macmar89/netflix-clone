import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledBrowse } from "./StyledBrowse";
import { Navbar } from "../../global/components/Navbar";

const key = process.env.REACT_APP_API_KEY;

const Browse = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await axios
        .get(`https://api.themoviedb.org/3/movie/550?api_key=${key}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };
    fetchMovies();
  }, []);

  return (
    <StyledBrowse.Container>
      <Navbar />
    </StyledBrowse.Container>
  );
};

export default Browse;
