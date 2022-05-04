// React
import React from "react";

// Active Link
import { ActiveLink } from "../ActiveLink";

// assets
import GithubSvg from "../../assets/github.svg";
import GlobeSvg from "../../assets/globe.svg";
import LinkedinSvg from "../../assets/linkedin.svg";
import MoonSvg from "../../assets/moon.svg";

// Styles
import { Container, Content, Menu, Icons } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <Menu>
          <ActiveLink href="/" activeClassName={""}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/projects" activeClassName={""}>
            <a>Projects</a>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName={""}>
            <a>Contact</a>
          </ActiveLink>
        </Menu>

        <Icons>
          <GithubSvg />
          <GlobeSvg />
          <LinkedinSvg />
          <MoonSvg />
        </Icons>
      </Content>
    </Container>
  );
};
