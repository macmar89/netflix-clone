import React, { useState } from "react";
import { StyledMovieCard } from "./StyledMovieCard";

interface IMovieCardProps {
  movie: any;
  index?: number
}

export const MovieCard = ({ movie , index = 1}: IMovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <StyledMovieCard.Container
      // style={{ left: }}
      left={isHovered && index * 225 - 50 + index * 2.5 }
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <img src={poster} alt="poster" />
      {isHovered && (
        <>
          {/*<video src={trailer} autoPlay={true} loop />*/}

          <div className="itemInfo">
            <div className="icons"></div>
            <div className="itemInfoTop">
              <span>{movie?.runtime || "unknown"}</span>
              <span className="limit">+16</span>
              <span>{movie?.release_date}</span>
            </div>
            <div className="desc">{movie?.overview}</div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </StyledMovieCard.Container>
  );
};
