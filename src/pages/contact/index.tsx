// React
import React from "react";

// Rectstrap
import { Row, Col, Container } from "reactstrap";

// Next
import Head from "next/head";

// Components
import { Header } from "../../components/Header";

// Theme
import { useTheme } from "../../hooks/useTheme";

// assets
import BackgroundDark from "../../assets/background-dark.svg";
import BackgroundLight from "../../assets/background-light.svg";

// Icons
import { FiMail } from "react-icons/fi";

// Styles
import { Wrapper, Title, Button, Email, Me, More } from "./styles";

const Contact = () => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Header />

      <Wrapper>
        <Container
          fluid
          style={{
            width: "80%",
          }}
        >
          <Row
            md={12}
            style={{
              alignItems: "center",
            }}
          >
            {isDarkTheme ? (
              <BackgroundDark
                style={{
                  position: "fixed",
                  left: "0",
                  right: "0",
                  margin: "0 auto",
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <BackgroundLight
                style={{
                  position: "fixed",
                  left: "0",
                  right: "0",
                  margin: "0 auto",
                  width: "100%",
                  height: "100%",
                }}
              />
            )}

            <Col md={6}>
              <Title>
                Have any <span>project</span> in your mind?
              </Title>

              <Col>
                <Button>Start talking :)</Button>
              </Col>

              <More>
                <FiMail />
                <Email>brunabzoliv@gmail.com</Email>
              </More>
            </Col>

            <Col
              md={6}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Me src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFISNM0rnQAId54geyGA6_xOSqi5VergCNEHtdVz9wNa9u6aXS1FIWkYm_xTmYLQX_BQ&usqp=CAU" />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export default Contact;
