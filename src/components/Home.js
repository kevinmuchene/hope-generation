import { useState } from "react";

import Logo from "./hopeLogo.jpeg";
import { UpComingEvent } from "./UpComingEvent";
import { Carousel } from "react-bootstrap";
import Pic from "./pic.jpg";
import Pic2 from "./pic2.jpg";

import MissionVision from "./MissionVision";

export const Home = () => {
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }; //end handleSelect

  let datx = [
    ["first slide", "second slide"],
    ["First Image", "Second Image"],
  ];

  //let pictures = [Pic, Pic2];
  // const captions = ["first slide", "second slide"];
  // const captionsDetails = ["First Image", "Second Image"];

  return (
    <div id="home">
      <section id="seck1">
        <MissionVision />
      </section>

      <section id="seck2">
        <h3>Mission: Touch every kid's life</h3>
        <h4>Vision: See that every kid's life is touched</h4>
      </section>

      <section>
        <h1>Section ya tatu</h1>
        section three
      </section>
      {/* <div style={{ border: "dotted" }} id="">
        <div id="logo-section">
          <img src={Logo} style={{ width: "100%" }} />
          <div>We believe in giving hope to less fortunate.</div>
          <div>Want to join?</div>
          <button>Join</button>
          <button>Donate</button>
        </div>
        <Carousel
          id="carousel-section"
          activeIndex={index}
          onSelect={handleSelect}
          interval={4000}
          fade
          style={{ border: "double", margin: "15px" }}
        >
          {datx.map((y) => (
            <Carousel.Item>
              <img style={{ width: "100%", maxHeight: "700px" }} src={Pic} />;
              <Carousel.Caption>
                <h3>{y[0]}</h3>
                <p>{y[1]}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div> */}
    </div>
  );
};
