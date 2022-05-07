// React
import React from "react";

// Next
import Image from "next/image";

// Carousel (lib)
import Carousel from "nuka-carousel";

// assets
import galinha from "../../../assets/galinha.png";

// Styles
import { Container, Gofinances, ToDo, Ignews, HotelBudget } from "./styles";

export const CarouselWeb = () => {
  return (
    <Container>
      <Carousel
        // autoplay and interval
        autoplay={true}
        autoplayInterval={3000}
        // slide's margin and height
        cellSpacing={100}
        cellAlign="center"
        adaptiveHeight={true}
        // carousel controls
        enableKeyboardControls={true}
        // pause at hover and dragging to slider with mouse
        pauseOnHover={true}
        dragging={true}
        // styles
        style={{
          maxHeight: "30vh",
          backgroundColor: "black",
          borderRadius: "1rem",
        }}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "#E4B7E5",
            width: "2rem",
            position: "relative",
            top: "40px",
            left: "0",
            right: "0",
          },
          prevButtonText: "00",
          prevButtonStyle: {
            color: "transparent",
            position: "absolute",
            padding: "8px",
            boxShadow: "1px -1px 0 1px #E4B7E5 inset",
            border: "solid transparent",
            borderWidth: "0 0 2px 2px",
            transform: "rotate(45deg)",
            backgroundColor: "transparent",
            marginLeft: "-2.5rem",
            marginTop: "-1rem",
          },
          nextButtonText: "00",
          nextButtonStyle: {
            color: "transparent",
            position: "absolute",
            padding: "8px",
            boxShadow: "1px -1px 0 1px #E4B7E5 inset",
            border: "solid transparent",
            borderWidth: "0 0 2px 2px",
            transform: "rotate(225deg)",
            backgroundColor: "transparent",
            marginRight: "-2.5rem",
            marginTop: "-1rem",
          },
        }}
        wrapAround={true}
      >
        <Gofinances onClick={() => alert("teste 1")}>
          <Image src={galinha} alt="oi" />
        </Gofinances>

        <ToDo onClick={() => alert("teste 2")}>
          <Image src={galinha} alt="oi" />
        </ToDo>

        <Ignews onClick={() => alert("teste 3")}>
          <Image src={galinha} alt="oi" />
        </Ignews>

        <HotelBudget onClick={() => alert("teste 3")}>
          <Image src={galinha} alt="oi" />
        </HotelBudget>
      </Carousel>
    </Container>
  );
};
