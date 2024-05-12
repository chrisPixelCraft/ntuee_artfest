import React, { useState } from "react";
import "./Slideshow.css"; // Assuming you save your CSS in this file

const Slideshow: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
    { imageUrl: "../../images/slideshow1.JPG", caption: "Caption Text" },
    { imageUrl: "img2.jpg", caption: "Caption Two" },
    { imageUrl: "img3.jpg", caption: "Caption Three" },
    { imageUrl: "img4.jpg", caption: "Caption Four" },
  ];

  console.log(slides);
  return (
    <div>
      {slides.map((item, idx) => {
        return <img src={item.imageUrl} alt={item.caption} key={idx} />;
      })}
    </div>
  );
};

export default Slideshow;
