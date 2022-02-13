import { StyledMovieDetail } from "./StyledMovieDetail";
import { Navbar } from "../../global/components/Navbar";

const MovieDetail = () => {
  return (
    <StyledMovieDetail.Container>
      <Navbar />
      <StyledMovieDetail.Content>
        content
      </StyledMovieDetail.Content>
    </StyledMovieDetail.Container>
  );
};

export default MovieDetail;
