import React from "react";
import "./react-carousel.css";

enum TYPE {
  PREVIOUS = "previous",
  NEXT = "next",
}

const carouselData = [
  {
    id: 0,
    imageUrl:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    title: "Mountain Lake",
  },
  {
    id: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    title: "Taj Mahal",
  },
  {
    id: 2,
    imageUrl:
      "https://img.freepik.com/free-photo/panoramic-view-landscape-mountains_23-2148635734.jpg",
    title: "Mountain Landscape",
  },
];

export const ReactCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const currentCarouselData = carouselData[currentImageIndex];

  const handleCarousel = (type: TYPE) => {
    if (type === TYPE.PREVIOUS) {
      return setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
      );
    }
    return setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button type="button" onClick={() => handleCarousel(TYPE.PREVIOUS)}>
        Previous
      </button>
      <div className="carousel-container">
        <img
          src={currentCarouselData.imageUrl}
          alt={currentCarouselData.title}
          className="carousel-image"
        />
        <div className="carousel-title">{currentCarouselData.title}</div>
      </div>
      <button type="button" onClick={() => handleCarousel(TYPE.NEXT)}>
        Next
      </button>
    </div>
  );
};
