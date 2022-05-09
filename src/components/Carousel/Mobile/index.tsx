// React
import React, { useState } from "react";

// Next
import Image from "next/image";

// Carousel (lib)
import Carousel from "nuka-carousel";

// Components
import { ModalBlank } from "../../../components/Modal";

// assets
import galinha from "../../../assets/galinha.png";

// Styles
import { Container, Gofinances, ToDo, RentX } from "./styles";

export const CarouselMobile = () => {
  const [isModalGofinancesOpen, setIsModalGofinancesOpen] = useState(false);
  const [isModalToDoOpen, setIsModalToDoOpen] = useState(false);
  const [isModalRentxOpen, setIsModalRentxOpen] = useState(false);

  // functions to handle w/ modals
  function handleModalGofinances() {
    setIsModalGofinancesOpen(true);
  }

  function handleModalToDo() {
    setIsModalToDoOpen(true);
  }

  function handleModalRentX() {
    setIsModalRentxOpen(true);
  }

  function handleModalClose() {
    setIsModalGofinancesOpen(false);
    setIsModalToDoOpen(false);
    setIsModalRentxOpen(false);
  }

  return (
    <>
      <ModalBlank
        isOpen={isModalGofinancesOpen}
        onClosed={handleModalClose}
        title="gofinances"
      >
        <Image alt="teste" src={galinha} />
      </ModalBlank>

      <ModalBlank
        isOpen={isModalToDoOpen}
        onClosed={handleModalClose}
        title="To Do"
      >
        <Image alt="teste" src={galinha} />
      </ModalBlank>

      <ModalBlank
        isOpen={isModalRentxOpen}
        onClosed={handleModalClose}
        title="RentX"
      >
        <Image alt="teste" src={galinha} />
      </ModalBlank>

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
          <Gofinances onClick={handleModalGofinances}>
            <Image src={galinha} alt="oi" />
          </Gofinances>

          <ToDo onClick={handleModalToDo}>
            <Image src={galinha} alt="oi" />
          </ToDo>

          <RentX onClick={handleModalRentX}>
            <Image src={galinha} alt="oi" />
          </RentX>
        </Carousel>
      </Container>
    </>
  );
};
