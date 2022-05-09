// React
import React from "react";

// Active Link
import { ActiveLink } from "../ActiveLink";

// hooks
import { useTheme } from "../../hooks/useTheme";

// Components
import { DarkModeIcon } from "../DarkModeIcon";

// assets
import GithubSvg from "../../assets/github.svg";
import GlobeSvg from "../../assets/globe.svg";
import LinkedinSvg from "../../assets/linkedin.svg";

// Styles
import {
  Container,
  Content,
  Menu,
  Link,
  Icons,
  Github,
  Linkedin,
  Darkside,
} from "./styles";

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
          <Github>
            <GithubSvg />
          </Github>
          {/* <GlobeSvg /> */}

          <Linkedin>
            <LinkedinSvg />
          </Linkedin>

          <Darkside>
            <DarkModeIcon onClick={() => handleTheme()} />
          </Darkside>
        </Icons>
      </Content>
    </Container>
  );
};
