import styled, { keyframes } from "styled-components";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export const slideUpAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(2px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const slideRightAndFade = keyframes`
     from {
        opacity: 0;
        transform: translateX(-2px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const slideDownAndFade = keyframes`
     from {
        opacity: 0;
        transform: translateY(-2px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const slideLeftAndFade = keyframes`
     from {
        opacity: 0;
        transform: translateX(2px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const StyledContent = styled(DropdownMenuPrimitive.Content)`
  min-width: 220px;

  padding: 20px;
  border-radius: 5px;
  background-color: white;

  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;
    will-change: transform opacity;
    &[data-state="open"] {
      &[data-side="top"] {
        animation-name: slideDownAndFade;
      }
      &[data-side="right"] {
        animation-name: slideLeftAndFade;
      }
      &[data-side="bottom"] {
        animation-name: slideUpAndFade;
      }
      &[data-side="left"] {
        animation-name: slideRightAndFade;
      }
    }
  }
`;

export const StyledItem = styled(DropdownMenuPrimitive.Item)`
  all: unset;

  font-size: 1rem;
  line-height: 1px;

  color: ${({ theme }) => theme.title};

  display: flex;
  align-items: center;

  border-radius: 3px;

  position: relative;
  padding: 2px 5px;
  height: 20px;
  user-select: none;

  cursor: pointer;

  &[data-disabled] {
    color: #e1e1e6;
    pointer-events: none;
  }

  &:focus {
    background-color: ${({ theme }) => theme.header};
    color: white;
    border-radius: 2px;
  }
`;

export const StyledArrow = styled(DropdownMenuPrimitive.Arrow)`
  fill: white;
`;

export const Box = styled.div``;

export const IconButton = styled.button`
  all: unset;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 30px;

  border-radius: 100%;
  box-shadow: 0 2px 5px ${({ theme }) => theme.header};

  color: ${({ theme }) => theme.header};
  background-color: white;
  font-family: inherit;

  transition: filter 0.2;

  &:hover {
    background-color: #e1e1e6;
    filter: brightness(0.9);
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.header};
  }
`;
