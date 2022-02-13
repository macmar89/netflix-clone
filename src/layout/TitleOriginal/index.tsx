import React from 'react';
import {StyledTitleOriginal} from "./StyledTitleOriginal";

interface ITitleOriginal {
  title: string
  originalTitle? : string
}

export const TitleOriginal = ({title, originalTitle}: ITitleOriginal) => {
  return (
    <StyledTitleOriginal>
      <h1>

      {title}
      </h1>
      {originalTitle && <span className='original'>{originalTitle}</span>}
    </StyledTitleOriginal>
  );
};

