import React from "react";
import { StyledStoryCard } from "./StyledStoryCard";

interface IStoryCard {
  title: string;
  subtitle: string;
  image: string;
  imageSide: "left" | "right";
}

export const StoryCard = ({
  title,
  subtitle,
  image,
  imageSide = "left",
}: IStoryCard) => {
  return (
    <StyledStoryCard imageSide={imageSide}>
      <div className="container">
        <div className="image">
          <img src={image} alt="kids" />
        </div>
        <div className="text">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </StyledStoryCard>
  );
};
