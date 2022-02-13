import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledBrowse } from "./StyledBrowse";
import { Navbar } from "../../global/components/Navbar";


const key = process.env.REACT_APP_API_KEY;

const Browse = () => {
  const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`
        )
        .then((res) => setMovies(res.data?.results.slice(0, 4)))
        .catch((err) => console.log(err));
    };
  useEffect(() => {

    fetchMovies();

  }, []);

  console.log(movies)

  return (
    <StyledBrowse.Container>
      <Navbar />

      <div style={{ paddingTop: "100px", width: "100vw" }}>

        ahoj
      </div>
    </StyledBrowse.Container>
  );
};

export default Browse;
