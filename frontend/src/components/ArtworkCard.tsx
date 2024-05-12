import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ArtworkCardContainer = styled.div`
  max-width: 100%;
  min-width: 20%;
  height: 550px;
  /* background: linear-gradient(
      to top,
      rgba(23, 42, 58, 0.6),
      rgba(23, 42, 58, 0.6)
    ),
    url("/path-to-your-background-image.jpg"); // Adjust the path to your background image */
  background: rgba(255, 255, 255, 0.16);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2); // Subtle shadow for depth
  backdrop-filter: blur(10px);
  background-size: cover;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Subtle shadow for depth

  // Applying the glass effect
  backdrop-filter: blur(8px); // This blurs the content behind the container
  -webkit-backdrop-filter: blur(8px); // Ensure Safari compatibility
  border: 1px solid rgba(255, 255, 255, 0.2); // Light border for the frosted glass effect

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease-out, box-shadow 0.3s;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    opacity: 0.9;
    transform: scale(0.99);
  }

  @media (max-width: 1100px) {
    min-width: 33%;
  }
  @media (max-width: 780px) {
    min-width: 50%;
  }
  @media (max-width: 450px) {
    min-width: 90%;
  }
  .pic {
    max-width: 85%;
    height: 60%;
    max-height: 300px;
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }
  }
  .card-header {
    margin: 0.5em;
    color: white;
    border-bottom: none;
    background-color: transparent;
  }
  .card-body {
    margin: 1em;

    border-bottom: none;
    background-color: transparent;
  }
  .title {
    color: white;
  }
  .text {
    color: white;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
  .card-footer {
    border-top: none !important;
    background-color: transparent !important;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.2s;
  }
  &:active {
    transform: scale(1);
    opacity: 0.8;
    background-color: #f0f0f0;
  }

  @media (max-width: 1100px) {
    min-width: 33%;
  }
  @media (max-width: 780px) {
    min-width: 50%;
  }
  @media (max-width: 450px) {
    min-width: 90%;
  }
`;

interface ArtworkCardProps {
  image: string;
  type: string;
  index: number;
  introduction: string;
  title: string;
  author: string;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  image,
  type,
  title,
  author,
  index,
  introduction,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Card Clicked");
    navigate(`/artwork/${type}/${index}`);
  };
  return (
    <ArtworkCardContainer onClick={handleClick}>
      <div className="pic">
        <img src={image} alt="artwork_image" />
      </div>
      {/* <div className="card-header">
                {type} #{index+1}
            </div> */}
      <div className="card-body">
        <h3 className="title">{title}</h3>
      </div>
      <div className="card-header">{author}</div>
      <div className="card-footer">
        <p className="text">{introduction}</p>
      </div>
    </ArtworkCardContainer>
  );
};
