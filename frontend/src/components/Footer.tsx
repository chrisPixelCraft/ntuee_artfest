import React from "react";
import styled from "styled-components";

const LeftFooter = styled.div`
  width: 15%;
  border-radius: 50%;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* width: 100%; */
  /* background: rgba(255, 255, 255, 0.16);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2); // Subtle shadow for depth
  backdrop-filter: blur(10px);
  background-size: cover; */
  /* padding: 3rem; */
  text-align: center;
  position: relative;
  bottom: 0;
  /* width: calc(96%); */
  /* footer {
    p {
      margin: 0;
    }
  } */
`;

const MiddleFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .footer_logo_word {
    font-size: 1.5rem;
    @media (max-width: 850px) {
      font-size: 1rem;
    }
    @media (max-width: 610px) {
      font-size: 0.7rem;
    }
    @media (max-width: 466px) {
      font-size: 0.6rem;
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  width: 60%;
  padding: 0 20%;
  justify-content: space-between;
`;

const SingleImageContainer = styled.div`
  width: 15%;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s;
    cursor: pointer;
  }

  &:active {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const RightFooter = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1.5rem;
    @media (max-width: 850px) {
      font-size: 1rem;
    }
    @media (max-width: 610px) {
      font-size: 0.8rem;
    }
    @media (max-width: 466px) {
      font-size: 0.6rem;
    }
  }
`;

const ContributerGrid = styled.div`
  display: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Contributer = styled.div`
  display: inline-block;
  p {
    font-size: 1.3rem;
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
    @media (max-width: 850px) {
      font-size: 0.8rem;
    }
    @media (max-width: 610px) {
      font-size: 0.6rem;
    }
    @media (max-width: 466px) {
      font-size: 0.5rem;
    }
  }
`;

interface FProps {
  ref: React.RefObject<HTMLDivElement>;
}
const Footer: React.FC<FProps> = ({ ref }) => {
  return (
    <FooterContainer className="bg-yellow-306 text-white p-2 font-futura bg-opacity-20 backdrop-blur-md w-full ">
      <footer className="text-white w-full flex justify-evenly">
        <LeftFooter>
          <IconImage
            src="/mainIcon.png"
            alt="mainIcon"
            width="20%"
            height="20%"
          />
        </LeftFooter>
        {/* <div className=" text-white text-sm sm:text-lg ">
          copyright ©️ NTUEE Artfest
        </div> */}

        <RightFooter>
          <div style={{ width: "100%" }}>
            <p>Contributors </p>
          </div>
          <ContributerGrid>
            <Contributer>
              <p>© Walker Hsu</p>
            </Contributer>
            <Contributer>
              <p>© Oscar Fu</p>
            </Contributer>
            <Contributer>
              <p>© Cheng Hsi Wu</p>
            </Contributer>
            <Contributer>
              <p>© Chris Hsieh</p>
            </Contributer>
          </ContributerGrid>
        </RightFooter>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
