// React
import React from "react";

// Active Link
import { ActiveLink } from "../ActiveLink";

// hooks
import { useTheme } from "../../hooks/useTheme";

// Components
import { DarkMode } from "../DarkMode";

// assets
import GithubSvg from "../../assets/github.svg";
import GlobeSvg from "../../assets/globe.svg";
import LinkedinSvg from "../../assets/linkedin.svg";

// Styles
import { Container, Content, Menu, Icons, Link } from "./styles";

export const Header = () => {
  const { handleTheme } = useTheme();

  return (
    <Container>
      <Content>
        <Menu>
          <ActiveLink href="/" activeClassName={""}>
            <Link>Home</Link>
          </ActiveLink>
          <ActiveLink href="/projects" activeClassName={""}>
            <Link>Projects</Link>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName={""}>
            <Link>Contact</Link>
          </ActiveLink>
        </Menu>

        <Icons>
          <GithubSvg />
          <GlobeSvg />
          <LinkedinSvg />
          <DarkMode onClick={() => handleTheme()} />
        </Icons>
      </Content>
    </Container>
  );
};
