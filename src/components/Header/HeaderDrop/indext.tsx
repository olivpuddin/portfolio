// React
import React from "react";

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
  Icons,
  Github,
  Linkedin,
  Darkside,
} from "./styles";
import DropdownMenuDemo from "../../Dropdown";

export const HeaderDrop = () => {
  const { handleTheme } = useTheme();

  return (
    <Container>
      <Content>
        <Menu>
          <DropdownMenuDemo />
        </Menu>

        <Icons>
          <Github>
            <GithubSvg />
          </Github>

          <Linkedin>
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
