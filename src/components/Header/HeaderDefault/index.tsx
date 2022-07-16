// React
import React from "react";

// Active Link
import { ActiveLink } from "../../ActiveLink";

// hooks
import { useTheme } from "../../../hooks/useTheme";

// assets
import GithubSvg from "../../../assets/icons/github.svg";
import GlobeSvg from "../../../assets/icons/globe.svg";
import LinkedinSvg from "../../../assets/icons/linkedin.svg";
import MoonSvg from "../../../assets/icons/moon.svg";

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

export const HeaderDefault = () => {
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
          <Github href="https://github.com/oliveirabz" target={"_blank"}>
            <GithubSvg />
          </Github>
          {/* <GlobeSvg /> */}

          <Linkedin
            href="https://www.linkedin.com/in/bruna-oliveira-05682b229/"
            target={"_blank"}
          >
            <LinkedinSvg />
          </Linkedin>

          <Darkside onClick={() => handleTheme()}>
            <MoonSvg />
          </Darkside>
        </Icons>
      </Content>
    </Container>
  );
};
