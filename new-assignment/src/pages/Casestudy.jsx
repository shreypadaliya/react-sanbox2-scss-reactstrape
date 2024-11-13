import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "reactstrap";
import sliderimg1 from "../assets/Link  b4.jpg.png";
import sliderimg2 from "../assets/Figure.png";
import sliderimg3 from "../assets/Link → b6.jpg.png";

const Carousel = () => {
  const slides = [
    {
      image: sliderimg1,
      title: "Ligula tristique quis risus",
      date: "14 Apr 2022",
      category: "Coding",
    },
    {
      image: sliderimg2,
      title: "Nullam id dolor elit id nibh",
      date: "29 Mar 2022",
      category: "Workspace",
    },
    {
      image: sliderimg3,
      title: "Ultricies fusce porta elit",
      date: "26 Feb 2022",
      category: "Meeting",
    },
    {
      image: sliderimg1,
      title: "Dui faucibus in ornare",
      date: "18 Jan 2022",
      category: "Design",
    },
    {
      image: sliderimg2,
      title: "Consectetur sit amet quam",
      date: "5 Dec 2021",
      category: "Development",
    },
    {
      image: sliderimg3,
      title: "Consectetur sit amet quam",
      date: "5 Dec 2021",
      category: "Development",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="casemainwrap">
        <h6 className="casemainwrahead">Case Studies</h6>
        <h2 className="casemainwrapara">
          Check out some of our awesome projects with creative ideas and great
          design.
        </h2>
      </div>
      <Container>
        <div className="carousel-container" style={{ backgroundColor: "red" }}>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="carousel-image"
                />
                <h3 className="carousel-title">{slide.title}</h3>
                <div className="carousel-meta">
                  <span>{slide.date}</span>
                  <span className="dot"> • </span>
                  <span>{slide.category}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Carousel;
