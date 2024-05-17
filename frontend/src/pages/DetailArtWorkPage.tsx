import { useParams } from "react-router-dom";
import { IMAGE_INFO } from "../images/exhibits_info";
import "../CSS/DetailArtWorkPage.css";
import ErrorPage from "./ErrorPage";
import styled from "styled-components";

const Styledp = styled.p`
  text-align: center;
  padding: 2rem;
  /* margin: 0 0 2rem 0; */
  color: white;
`;

const DetailArtWorkPage: React.FC = () => {
  const { type, index } = useParams();
  console.log(type, index);
  if (!type || !index) {
    return <ErrorPage />;
  }
  const image = IMAGE_INFO.find((image_classes) => image_classes.type === type)
    ?.images[parseInt(index)];
  if (!image) {
    return <ErrorPage />;
  }
  console.log(image);

  return (
    <>
      {/* Wrapper */}
      <div id="wrapper">
        {/* Image */}
        <header id="header">
          {/* <a href="index.html" className="logo">
            Back to Gallery
          </a> */}
        </header>
        {/* Main */}
        <div id="main">
          {/* Post */}
          <section className="post">
            <header className="major">
              <span className="date">{type}</span>
              <h1>{image["title"]}</h1>
              <Styledp>作者：{image["author"]}</Styledp>
            </header>
            <div className="image main">
              <img src={image["image"]} alt="" />
            </div>
            <Styledp>{image["introduction"]}</Styledp>
          </section>
        </div>
        <div style={{ height: "15rem" }}></div>
      </div>
    </>
  );
};

export default DetailArtWorkPage;
