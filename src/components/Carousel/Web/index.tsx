// React
import React, { useState } from "react";

// Next
import Image from "next/image";

// Carousel (lib)
import Carousel from "nuka-carousel";

// Components
import { ModalBlank } from "../../../components/Modal";
import { IconTag } from "../../IconTag";

// assets
import galinha from "../../../assets/galinha.png";
import gofinances from "../../../assets/projects/gofinances-web.png";
import toDo from "../../../assets/projects/toDo-web.png";
import ignews from "../../../assets/projects/ignews.png";
import hotel from "../../../assets/projects/hotel.png";

// Icons
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

// Styles
import { Container, Gofinances, ToDo, Ignews, HotelBudget } from "./styles";

export const CarouselWeb = () => {
  const [isModalGofinancesOpen, setIsModalGofinancesOpen] = useState(false);
  const [isModalToDoOpen, setIsModalToDoOpen] = useState(false);
  const [isModalIgnewsOpen, setIsModalIgnewsOpen] = useState(false);
  const [isModalHotelOpen, setIsModalHotelOpen] = useState(false);

  // functions to handle w/ modals
  function handleModalGofinances() {
    setIsModalGofinancesOpen(true);
  }

  function handleModalToDo() {
    setIsModalToDoOpen(true);
  }

  function handleModalIgnews() {
    setIsModalIgnewsOpen(true);
  }

  function handleModalHotel() {
    setIsModalHotelOpen(true);
  }

  function handleModalClose() {
    setIsModalGofinancesOpen(false);
    setIsModalToDoOpen(false);
    setIsModalIgnewsOpen(false);
    setIsModalHotelOpen(false);
  }

  return (
    <>
      <ModalBlank
        isOpen={isModalGofinancesOpen}
        onClosed={handleModalClose}
        title="gofinances"
      >
        <Image alt="gofinances" src={gofinances} />
      </ModalBlank>

      <ModalBlank
        isOpen={isModalToDoOpen}
        onClosed={handleModalClose}
        title="To Do"
      >
        <Image alt="To Do" src={toDo} />
      </ModalBlank>

      <ModalBlank
        isOpen={isModalIgnewsOpen}
        onClosed={handleModalClose}
        title="Ig.news"
      >
        <Image alt="ignews" src={ignews} />
      </ModalBlank>

      <ModalBlank
        isOpen={isModalHotelOpen}
        onClosed={handleModalClose}
        title="Hotel Budget"
      >
        <Image alt="hotel" src={hotel} />
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
            <IconTag IconLib={FaReact} />
            <Image src={galinha} alt="oi" />
          </Gofinances>

          <ToDo onClick={handleModalToDo}>
            <IconTag IconLib={FaReact} />
            <Image src={galinha} alt="oi" />
          </ToDo>

          <Ignews onClick={handleModalIgnews}>
            <IconTag IconLib={SiNextdotjs} />
            <Image src={galinha} alt="oi" />
          </Ignews>

          <HotelBudget onClick={handleModalHotel}>
            <IconTag IconLib={SiNextdotjs} />
            <Image src={galinha} alt="oi" />
          </HotelBudget>
        </Carousel>
      </Container>
    </>
  );
};
