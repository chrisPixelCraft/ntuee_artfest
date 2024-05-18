// ContactPage.tsx
import React from "react";
import styled from "styled-components";
import mainVisual_h from "../images/mainVisual_h.jpg";
import mainVisual_v from "../images/mainVisual_v.jpg";

// Styled components
const Container = styled.div`
  padding: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  // width: calc(100vw - 4rem - 1.6rem);
  // height: 40vh;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */

  display: grid;
  grid-column-gap: 1.6rem;
  grid-template-columns: 1fr 40%;
  justify-content: flex-start;
  align-content: start;
  align-items: center;
  position: relative;
  padding: 4rem;
  color: white;
  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr; // Makes it a single column layout on mobile
    justify-content: center; // Centers content horizontally
    align-items: center; // Ensure the content is centered vertically as well
    padding: 4rem 1rem; // Adjusts padding to increase gap
    grid-row-gap: 2rem; // Increases the gap between rows (i.e., between your text and photo) */
    grid-row-gap: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // border: 1px solid #000;
  .tab {
    display: inline-block;
    margin-left: 80px;
    @media (max-width: 1290px) {
      margin-left: 80px;
    }
    @media (max-width: 1130px) {
      margin-left: 80px;
    }
    @media (max-width: 970px) {
      margin-left: 40px;
    }
    @media (max-width: 860px) {
      margin-left: 30px;
    }
    @media (max-width: 445px) {
      margin-left: 15px;
    }
    @media (max-width: 383px) {
      margin-left: 10px;
    }
  }
  .word {
    width: 50vw;
    height: 70vh;
    overflow: auto;
    max-height: 37.5vh;
    overflow: hidden;
    /* border: 1px solid #000; */
    display: inline-block;
    margin-left: 10px;
    /* @media screen and (max-width: 1000px) {
      font-size: 1.5rem;
    } */
  }

  .pic {
    max-height: 37.5vh;
    border-radius: 30px;
    overflow: hidden;
    display: inline-block;
    margin-left: 10px;
    position: relative; /* Added for relative positioning of child elements */

    img {
      width: 100%;
      height: auto; /* Maintains aspect ratio */
      display: block;
      object-fit: contain; /* Ensures the whole image is displayed */
      /* overflow: hidden; */
    }

    .pic_v {
      display: block;
      @media (min-width: 500px) {
        display: none;
      }
    }

    .pic_h {
      display: none;
      @media (min-width: 500px) {
        display: block;
      }
    }
  }

  @media (max-width: 700px) {
    /* Optional additional styling for max-width 700px */
  }

  // const HeaderTitle = styled.h1
`;
//   font-size: 5rem; // Base size for larger screens
//   margin-bottom: 2rem;
//   @media (max-width: 1290px) {
//     font-size: 3rem; // Slight reduction for smaller laptops
//   }
//   @media (max-width: 970px) {
//     font-size: 3rem; // Further reduction for tablets
//   }
//   @media (max-width: 700px) {
//     font-size: 2.5rem; // Comfortable size for large phones
//   }
//   @media (max-width: 572px) {
//     font-size: 2rem; // Readable size for smaller phones
//   }
//   @media (max-width: 415px) {
//     font-size: 2rem; // Minimum size to ensure readability on very small devices
//   }
// `;

export const HeaderTitle = styled.h1`
  font-size: 3.5rem; // Base size for larger screens
  margin-bottom: 2rem;
  @media (max-width: 1290px) {
    font-size: 2.5rem; // Slight reduction for smaller laptops
  }
  @media (max-width: 970px) {
    font-size: 2.5rem; // Further reduction for tablets
  }
  @media (max-width: 700px) {
    font-size: 2.5rem; // Comfortable size for large phones
  }
  @media (max-width: 572px) {
    font-size: 2.5rem; // Readable size for smaller phones
  }
  @media (max-width: 415px) {
    font-size: 2rem; // Minimum size to ensure readability on very small devices
  }
`;

const HeaderSubtitle = styled.div`
  font-size: 1.3rem; // Base size for desktop
  line-height: 1.3;
  @media (max-width: 1290px) {
    font-size: 1.3rem; // Minor adjustment for smaller laptops
  }
  @media (max-width: 970px) {
    font-size: 1.3rem; // Suitable for tablets
  }
  @media (max-width: 700px) {
    font-size: 0.9rem; // Adjust for large phones
  }
  @media (max-width: 572px) {
    font-size: 0.8rem; // Minimum size for readability on smaller phones
  }
  @media (max-width: 415px) {
    font-size: 0.7rem; // Avoid going too small to maintain legibility
  }
`;

// const HeaderTitle = styled.h1`
//   font-size: 3.5rem;
//   margin-bottom: 2rem;
//   @media (max-width: 1290px) {
//     font-size: 3rem;
//   }
//   @media (max-width: 1130px) {
//     font-size: 2.5rem;
//   }
//   @media (max-width: 970px) {
//     font-size: 2.4053rem;
//   }
//   @media (max-width: 830px) {
//     font-size: 2rem;
//   }
//   @media (max-width: 700px) {
//     font-size: 1.6rem;
//   }
//   @media (max-width: 572px) {
//     font-size: 1.2rem;
//   }
//   @media (max-width: 415px) {
//     font-size: 1.1rem;
//   }
// `;

// const HeaderSubtitle = styled.div`
//   font-size: 1rem;
//   line-height: 1.3;
//   @media (max-width: 1290px) {
//     font-size: 0.9rem;
//   }
//   @media (max-width: 1130px) {
//     font-size: 0.8rem;
//   }
//   @media (max-width: 970px) {
//     font-size: 0.7rem;
//   }
//   @media (max-width: 830px) {
//     font-size: 0.6rem;
//   }
//   @media (max-width: 830px) {
//     font-size: 0.55rem;
//   }
//   @media (max-width: 415px) {
//     font-size: 0.45rem;
//   }
//   /* line-height: 1.5;
//   overflow-y: scroll; */
// `;

const BottomHeight = styled.div`
  height: 9rem;

  @media (max-width: 768px) {
    // Adjust this breakpoint as needed
    height: 4rem; // Height for mobile devices
  }
`;

const ContributerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid #000; */
  padding: 3rem;
  background-color: #ffffff;
  background: rgba(255, 255, 255, 0.16);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  background-size: cover;
  @media (max-width: 572px) {
    padding: 1rem;
  }
`;

const Contributer = styled.div`
  width: 20%;
  height: 100%;
`;

// Component
const AboutUsPage: React.FC = () => {
  return (
    <Container>
      <div style={{ height: "3rem" }}></div>

      <HeaderContainer>
        <div className="word">
          <HeaderTitle>藝術一瞬．感動永恆</HeaderTitle>

          <blockquote
            cite="http://www.worldwildlife.org/who/index.html"
            className="text-sm sm:text-lg md:text-xl lg:text-xl text-center sm:text-left leading-relaxed sm:leading-loose"
          >
            在藝術的殿堂裡，一瞬間成就永恆。畫筆輕撫畫布，描繪情感的交錯。音符飄逸在空氣中，引起靈魂的共鳴。
          </blockquote>
          <br />
          <br />
          <br />
        </div>

        <div className="pic">
          <img className="pic_h" src={mainVisual_h} alt="Art" />
          <img className="pic_v" src={mainVisual_v} alt="Art" />
        </div>
      </HeaderContainer>
      <ContributerContainer>
        <Contributer>
          <img src={"/contributors/hershey.jpg"} alt="Hershey" width="100%" />
        </Contributer>
        <Contributer>
          <img src={"/contributors/EESA.jpg"} alt="Hershey" width="100%" />
        </Contributer>
        <Contributer>
          <img
            src={"/contributors/RYB.png"}
            alt="紅然股份有限公司"
            width="100%"
          />
        </Contributer>
      </ContributerContainer>
      {/* <div style={{ height: "9rem" }}></div> */}
      <BottomHeight />
    </Container>
  );
};

export default AboutUsPage;
