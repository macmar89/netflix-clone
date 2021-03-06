import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { StyledMovieDetail } from "./StyledMovieDetail";
import { IMAGE_URL } from "../../global/constants/apiConstants";
import {Loader} from "../../global/components/Loader";
import { Button } from "../../global/components/Button";
import { Navbar } from "../../global/components/Navbar";
import { TitleOriginal } from "../../global/components/TitleOriginal";
import { convertMinutesToTime, getYear } from "../../global/helpers/formatDate";
import {Genre} from "../../global/types/Movie";

const key = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const [movie, setMovie] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id }: { id: string } = useParams();

  const image = `${IMAGE_URL}${movie?.backdrop_path}`;

  console.log(movie)

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
                    <span>Prehra??</span>
                  </div>
                }
              />

              <AiOutlinePlusCircle className="icon" />
              <BsHandThumbsUp className="icon" />
              <BsHandThumbsDown className="icon" />
            </div>
          </div>
        </header>

        <StyledMovieDetail.Info>
          <div className="left">
            <div className="basic">
              <div className="rating">
                {movie?.vote_average} <span className="max"> /10</span>
                <div className="vote-count">({movie?.vote_count} hlasov)</div>
              </div>
              <div>{getYear(movie?.release_date)}</div>
              <div className="runtime">
                {convertMinutesToTime(movie?.runtime)}
              </div>
              {movie?.adult === true && <div className="adult">18+</div>}
            </div>

            <div className="desc">{movie?.overview}</div>
          </div>

          <div className="right">
            <div className="genres">
              <div className="label">????ner: </div>
              {movie?.genres?.map(
                (genre: Genre, index: number) => (
                  <div className="genre" key={genre.id}>
                    {genre.name}
                    {movie?.genres?.length !== index + 1 && ","}
                  </div>
                )
              )}
            </div>
          </div>
        </StyledMovieDetail.Info>
      </StyledMovieDetail.Content>
    </StyledMovieDetail.Container>
  );
};

export default MovieDetail;
