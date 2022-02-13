import React from "react";
import { StyledPreview } from "./StyledPreview";
import { IMAGE_URL } from "../../global/constants/apiConstants";
import { truncate } from "../../global/helpers/formatText";
import { getYear } from "../../global/helpers/moment";
import { Button } from "../../global/components/Button";
import { RiInformationLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Preview = ({ movie }: { movie: any }) => {
  const image = `${IMAGE_URL}${movie?.backdrop_path}`;

  return (
    <StyledPreview.Container>
      <img src={image} alt="movie" />
      <StyledPreview.Info>
        <h3>
          {movie?.title} <span className='original'>{movie?.original_title}</span>
        </h3>
        <div className="other">
          {movie?.release_date && (
            <div className="year">{movie && getYear(movie?.release_date)}</div>
          )}
          {movie?.vote_average && (
            <div className="rating">
              {movie?.vote_average} <span className="max">/ 10</span>{" "}
              <span className='count'>{movie?.vote_count} hlasov</span>
            </div>
          )}
        </div>
        <p>{truncate(movie?.overview)}</p>
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
          <Link to={`/browse/${movie?.id}`} className="link">
            <Button
              label={
                <div className="btn-label">
                  <RiInformationLine />
                  <span>Ďalšie informácie</span>
                </div>
              }
              variant="secondary"
              className="btn"
            />
          </Link>
        </div>
      </StyledPreview.Info>
    </StyledPreview.Container>
  );
};

export default Preview;
