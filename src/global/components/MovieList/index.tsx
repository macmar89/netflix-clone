import React from "react";
import { StyledMovieList } from "./StyledMovieList";
import Slider from "react-slick";

export const MovieList = () => {
  const options = {
    infinite: true,
    autoPlay: true,
    slidesToShow: 5,
    arrows: false,
  };

  return (
    <StyledMovieList.Container>
      <Slider {...options}>
        <div className="card">
          <div className="content">
            <div className="background">
              <div className="left">left</div>
              <div className="right">right</div>
            </div>
            <div className="content-container">content 1 here...</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="background">
              <div className="left">left</div>
              <div className="right">right</div>
            </div>
            <div className="content-container">content 2 here...</div>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="content">
            <div className="background">
              <div className="left">left</div>
              <div className="right">right</div>
            </div>
            <div className="content-container">content 3 here...</div>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="content">
            <div className="background">
              <div className="left">left</div>
              <div className="right">right</div>
            </div>
            <div className="content-container">content 4 here...</div>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="content">
            <div className="background">
              <div className="left">left</div>
              <div className="right">right</div>
            </div>
            <div className="content-container">content 5 here...</div>
          </div>
        </div>
        {/*<div className='card'>123</div>*/}
        {/*<div className='card'>456</div>*/}
        {/*<div className='card'>789</div>*/}
        {/*<div className='card'>147</div>*/}
        {/*<div className='card'>258</div>*/}
        {/*<div className='card'>3369</div>*/}
      </Slider>
    </StyledMovieList.Container>
  );
};

// <div className="card">
//   <div className="content">
//     <div className="background">
//       <div className="left">left</div>
//       <div className="right">right</div>
//     </div>
//     <div className="content-container">content here...</div>
//   </div>
// </div>
// <div className="card">          <div className="content">
//   <div className="background">
//     <div className="left">left</div>
//     <div className="right">right</div>
//   </div>
//   <div className="content-container">content here...</div>
// </div></div>
// <div className="card">          <div className="content">
//   <div className="background">
//     <div className="left">left</div>
//     <div className="right">right</div>
//   </div>
//   <div className="content-container">content here...</div>
// </div></div>
// <div className="card">          <div className="content">
//   <div className="background">
//     <div className="left">left</div>
//     <div className="right">right</div>
//   </div>
//   <div className="content-container">content here...</div>
// </div></div>
// <div className="card">          <div className="content">
//   <div className="background">
//     <div className="left">left</div>
//     <div className="right">right</div>
//   </div>
//   <div className="content-container">content here...</div>
// </div></div>
