// Next
import type { NextPage } from "next";
import Head from "next/head";

import {
  Container,
  Content,
  Section,
  Title,
  Subtitle,
  About,
  Me,
} from "./home";

// Components
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Portfólio | Bruna Oliveira</title>
      </Head>
      <Header />

      <Content>
        <Section>
          <Title>Bruna Oliveira</Title>
          <Subtitle>
            <i>&lt;Front-end dev /&gt;</i>
          </Subtitle>
          <About>gosto de dormir e comer</About>
        </Section>

        <Me src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFISNM0rnQAId54geyGA6_xOSqi5VergCNEHtdVz9wNa9u6aXS1FIWkYm_xTmYLQX_BQ&usqp=CAU" />
      </Content>
    </Container>
  );
};

export default Home;
