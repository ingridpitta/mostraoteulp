import React from "react";
import { Carousel } from "antd";
import "antd/lib/carousel/style/css";
import "./home.styles.scss";

const data = [
  {
    name: "image_1",
    src: require("../../assets/images/cards/1.png"),
  },
  {
    name: "image_2",
    src: require("../../assets/images/cards/2.png"),
  },
  {
    name: "image_3",
    src: require("../../assets/images/cards/3.png"),
  },
  {
    name: "image_4",
    src: require("../../assets/images/cards/4.png"),
  },
  {
    name: "image_5",
    src: require("../../assets/images/cards/5.png"),
  },
  {
    name: "image_6",
    src: require("../../assets/images/cards/6.png"),
  },
  {
    name: "image_7",
    src: require("../../assets/images/cards/7.png"),
  },
  {
    name: "image_8",
    src: require("../../assets/images/cards/8.png"),
  },
  {
    name: "image_9",
    src: require("../../assets/images/cards/9.png"),
  },
];

const Home = () => {
  return (
    <main className="home--container">
      <section>
        <Carousel
          infinite
          useTransform
          speed={4500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          cssEase='fade'
          dotPosition="bottom"
          dots={{
            className: "carousel--dots",
          }}
        >
          {data.map((el, index) => {
            return (
              <div key={`${index}--carousel`}>
                <img src={el.src} alt={el.name} />
              </div>
            );
          })}
        </Carousel>
      </section>
    </main>
  );
};

export default Home;
