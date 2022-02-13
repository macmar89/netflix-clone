import { StyledMovieDetail } from "./StyledMovieDetail";
import { Navbar } from "../../global/components/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IMAGE_URL } from "../../global/constants/apiConstants";
import Loader from "../../global/components/Loader";
import { Button } from "../../global/components/Button";
import { FaPlay } from "react-icons/fa";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TitleOriginal } from "../../layout/TitleOriginal";

const key = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const [movie, setMovie] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id }: { id: string } = useParams();

  const image = `${IMAGE_URL}${movie?.backdrop_path}`;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setIsLoading(true);
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=sk`
        )
        .then((res) => setMovie(res.data))
        .then(() => setIsLoading(false))
        .catch((err) => console.log(err));
      console.log(movie);
    };
    fetchMovieDetail();
  }, [id, setMovie]);

  if (isLoading) return <Loader />;

  return (
    <StyledMovieDetail.Container>
      <Navbar />
      <StyledMovieDetail.Content>
        <header>
          <img src={image} alt="movie" />
          <div className="movie-title">
            <TitleOriginal
              title={movie?.title}
              originalTitle={movie?.original_title}
            />
            <div className="buttons">
              <Button
                className="btn-play"
                variant="light"
                label={
                  <div className="btn-label">
                    <FaPlay />
                    <span>Prehrať</span>
                  </div>
                }
              />

              <AiOutlinePlusCircle className="icon" />
              <BsHandThumbsUp className="icon" />
              <BsHandThumbsDown className="icon" />
            </div>
          </div>
        </header>
        <StyledMovieDetail.Info>.</StyledMovieDetail.Info>
      </StyledMovieDetail.Content>
    </StyledMovieDetail.Container>
  );
};

export default MovieDetail;
