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
import gofinances from "../../../assets/projects/gofinances-mob.png";
import toDo from "../../../assets/projects/toDo-mob.png";
import rentX from "../../../assets/projects/rentx.png";

// Icons
import { FaReact } from "react-icons/fa";

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
      {/* inside */}
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
        isOpen={isModalRentxOpen}
        onClosed={handleModalClose}
        title="RentX"
      >
        <Image alt="RentX" src={rentX} />
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
          {/* outside */}
          <Gofinances onClick={handleModalGofinances}>
            <IconTag IconLib={FaReact} />
            <Image src={galinha} alt="oi" layout="responsive" />
          </Gofinances>

          <ToDo onClick={handleModalToDo}>
            <IconTag IconLib={FaReact} />
            <Image src={galinha} alt="oi" layout="responsive" />
          </ToDo>

          <RentX onClick={handleModalRentX}>
            <IconTag IconLib={FaReact} />
            <Image src={galinha} alt="oi" layout="responsive" />
          </RentX>
        </Carousel>
      </Container>
    </>
  );
};
