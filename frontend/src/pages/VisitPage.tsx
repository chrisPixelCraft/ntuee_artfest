// VisitPage.tsx
import React, { useRef } from "react";
import styled from "styled-components";
import visit from "../images/visit0.jpg";
import info from "../images/info.png";
import intro from "../images/intro.png";
import fakeVideo_2 from "../images/fakeVideo_2.png";
import fakeVideo from "../images/fakeVideo.png";
import fakeVideo2 from "../images/fakeVideo2.png";
import fakeVideo2_2 from "../images/fakeVideo2_2.png";
import placeholder from "../images/placeholder.png";
import idea from "../images/idea.png";
import { Gallery } from "../components/VisitPage/Gallery";

// Styled components
const Container = styled.div`
  padding: 1rem; // Default padding for mobile and smaller devices

  @media (min-width: 641px) {
    // Applies when the screen size is larger than 640px
    padding: 6rem;
  }
`;

const StyledImg = styled.img`
  filter: brightness(0) invert(1);
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.7rem;
  }
  @media screen and (max-width: 768px) {
    height: 7vh;
  }
`;

const SubtitleContainer = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.7rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const VideoBlockContainer = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid white; */
  margin-bottom: 2rem;

  .singleVideoBlock {
    width: 100%;
    height: 500px;
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.3); // Semi-transparent background
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    border-radius: 8px; // Rounded corners
    overflow: hidden; // Ensures nothing spills out
    transition: all 0.3s ease; // Smooth transition for hover effects
    &:hover {
      background-color: rgba(0, 0, 0, 0.5); // Darker on hover for interactivity
      transform: translateY(-2px); // Lift effect on hover
    }
    .videoIntroWord {
      /* width: 40%;
      height: 85%;
      // border: 1px solid black;
      margin: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 1rem; */
      width: 40%;
      height: 85%;
      margin: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start; /* Align content towards the top */
      align-items: flex-start;
      padding: 3.9rem;
      box-sizing: border-box; /* Ensure padding is included in the height */
    }

    .videoIntroVideo {
      width: 60%;
      height: 100%;
      padding: 2%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    @media screen and (max-width: 1100px) {
      .videoIntroWord {
        width: 25%;
      }
      .videoIntroVideo {
        width: 75%;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: 730px;
      .videoIntroWord {
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 20%;
        padding: 1rem;
      }
      .videoIntroVideo {
        width: 100%;
      }
    }
    @media screen and (max-width: 480px) {
      flex-direction: column;
      height: 730px;
      .videoIntroWord {
        width: 100%;
        height: 20%;
      }
      .videoIntroVideo {
        width: 100%;
      }
    }
  }
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-family: "Futura", sans-serif;
  font-size: 1.5rem;
  color: white;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
`;

const ParagraphContainer = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  /* .block {
    width: 100%;
    height: 50%;
    // border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
  } */
  .block {
    width: 100%; // Reducing width to provide padding effect
    height: 50%;
    padding: 10px; // Adds some internal space
    border: 1px solid rgba(255, 255, 255, 0.2); // Slightly visible border
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.3); // Semi-transparent background
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    border-radius: 8px; // Rounded corners
    overflow: hidden; // Ensures nothing spills out
    transition: all 0.3s ease; // Smooth transition for hover effects

    &:hover {
      background-color: rgba(0, 0, 0, 0.5); // Darker on hover for interactivity
      transform: translateY(-2px); // Lift effect on hover
    }
  }
`;

const VideoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 90%;
  margin: 2rem 5%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-drag: none;
    -webkit-user-drag: none;
    z-index: 1;
    @media (max-width: 768px) {
      width: 100%;
      height: 360px;
    }
    @media (max-width: 480px) {
      width: 100%;
      height: 310px;
    }
  }
`;

const VisitPage: React.FC = () => {
  const openingIframeRef = useRef<HTMLIFrameElement>(null);
  const closingIframeRef = useRef<HTMLIFrameElement>(null);
  const playVideo = (idx: number) => () => {
    //  set the overlay image display to none
    const videoContainer =
      document.getElementsByClassName("videoIntroVideo")[idx];
    const overlayImage = videoContainer?.querySelector("img");
    if (overlayImage) {
      overlayImage.style.display = "none";
    }
    // play the video
    if (idx === 0) {
      if (openingIframeRef.current) {
        openingIframeRef.current.style.display = "block";
        console.log(openingIframeRef.current);
        openingIframeRef.current.src += "?autoplay=1";
      }
    } else {
      if (closingIframeRef.current) {
        closingIframeRef.current.style.display = "block";
        console.log(closingIframeRef.current);
        closingIframeRef.current.src += "?autoplay=1";
      }
    }
  };
  return (
    <Container>
      <Section>
        <TitleContainer>
          <StyledImg src={info} alt="info"></StyledImg>
          <Title>展覽資訊</Title>
        </TitleContainer>

        <ParagraphContainer>
          {/* Add exhibition highlights */}
          <div className="block text-2xl">主題: 瞬感 (Momentary)</div>
          <div className="block p-6">
            本次展出的作品約30件，內容包含3D遊戲、互動網頁、攝影、書法、電繪、燈光、平面設計、模型、水墨、雕塑等類別的藝術品，種類多元。
          </div>
        </ParagraphContainer>

        <ParagraphContainer>
          <div className="block">日期：2024/04/22 ~ 2024/05/03</div>
          <div className="block">開放參觀時間：10:00 ~ 16:00</div>
          <div className="block">地點：臺大電機博理藝廊 B1</div>
        </ParagraphContainer>
        {/* <ImgContainer>
          <img src={visit} alt="Visit" />
        </ImgContainer> */}
        <VideoBlockContainer>
          <div className="singleVideoBlock">
            <div className="videoIntroWord">
              <Subtitle className="p-3 text-2xl">開幕影片</Subtitle>
              <p className="p-3">
                展覽共有五大展區: 攝影區、書法區、觀影區、互動藝術區、畫作區
              </p>
              <p className="p-4">歡迎蒞臨觀展！</p>
              <p className="p-3">Credit：謝銘倫、林昀萱</p>
            </div>
            <br />
            <br />
            <br />

            <div className="videoIntroVideo">
              <VideoContainer>
                {/* Add opening video */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/1PhKv0umB_w"
                  // src="https://www.youtube.com/watch?v=1PhKv0umB_w"
                  title="Opening Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ref={openingIframeRef}
                  style={{ display: "none" }}
                ></iframe>
                <picture>
                  <source srcSet={fakeVideo_2} media="(max-width: 600px)" />
                  <source srcSet={fakeVideo} media="(min-width: 601px)" />
                  <img
                    src={fakeVideo_2}
                    alt="iframeImage"
                    onClick={playVideo(0)}
                  />
                </picture>
                {/* <img src={fakeVideo} alt="iframeImage" onClick={playVideo(0)} /> */}
              </VideoContainer>
            </div>
          </div>
          <div className="singleVideoBlock">
            <div className="videoIntroWord">
              <Subtitle className="p-3 text-2xl">採訪片合集</Subtitle>
              <p className="p-3 leading-relaxed">
                特別感謝： 陳竣瑋、楊詠翔、王瑋、楊珩、 吳柏均、張庭梧、謝銘倫
              </p>
              <p className="p-3">Credit： 蘇絹淇、謝銘倫、 董家愷、林育正</p>
            </div>
            <br />
            <div className="videoIntroVideo">
              <VideoContainer>
                {/* Add opening video */}
                <iframe
                  width="100%"
                  height="100%"
                  // src="https://www.youtube.com/watch?v=EjeQQEiuHyI"
                  src="https://www.youtube.com/embed/EjeQQEiuHyI"
                  title="Opening Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ref={closingIframeRef}
                  style={{ display: "none" }}
                ></iframe>
                <picture>
                  <source srcSet={fakeVideo2_2} media="(max-width: 600px)" />
                  <source srcSet={fakeVideo2} media="(min-width: 601px)" />
                  <img
                    src={fakeVideo2_2}
                    alt="iframeImage"
                    onClick={playVideo(1)}
                  />
                </picture>
                {/* <img
                  src={fakeVideo2}
                  alt="iframeImage"
                  onClick={playVideo(1)}
                /> */}
              </VideoContainer>
            </div>
          </div>
        </VideoBlockContainer>

        {/* <SubtitleContainer>
          <img src={placeholder} alt="info"></img>
          <Subtitle>展覽時間地點</Subtitle>
        </SubtitleContainer> */}

        {/* <SubtitleContainer>
          <img src={idea} alt="info"></img>
          <Subtitle>展覽重點</Subtitle>
        </SubtitleContainer> */}

        <SubtitleContainer>
          {/* <img src={intro} alt="info"></img> */}
          <StyledImg src={info} alt="info"></StyledImg>
          <Subtitle className="text-white text-2xl">展區介紹</Subtitle>
        </SubtitleContainer>

        <Gallery />
      </Section>
    </Container>
  );
};

export default VisitPage;
