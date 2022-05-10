import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import styled, { keyframes } from "styled-components";

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
  min-width: 220;
  background-color: white;
  border-radius: 6;
  padding: 5;
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
  font-size: 13;
  line-height: 1;
  color: violet;
  border-radius: 3;
  display: flex;
  align-items: center;
  height: 25;
  padding: 0 5px;
  position: relative;
  padding-left: 25;
  user-select: none;

  &[data-disabled] {
    color: blue;
    pointer-events: none;
  }

  &:focus {
    background-color: white;
    color: violet;
  }
`;

export const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem)`
  all: unset;
  font-size: 13;
  line-height: 1;
  color: violet;
  border-radius: 3;
  display: flex;
  align-items: center;
  height: 25;
  padding: 0 5px;
  position: relative;
  padding-left: 25;
  user-select: none;

  &[data-disabled] {
    color: blue;
    pointer-events: none;
  }

  &:focus {
    background-color: white;
    color: violet;
  }
`;

export const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem)`
  all: unset;
  font-size: 13;
  line-height: 1;
  color: violet;
  border-radius: 3;
  display: flex;
  align-items: center;
  height: 25;
  padding: 0 5px;
  position: relative;
  padding-left: 25;
  user-select: none;

  &[data-disabled] {
    color: blue;
    pointer-events: none;
  }

  &:focus {
    background-color: white;
    color: violet;
  }
`;

export const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem)`
  all: unset;
  font-size: 13;
  line-height: 1;
  color: violet;
  border-radius: 3;
  display: flex;
  align-items: center;
  height: 25;
  padding: 0 5px;
  position: relative;
  padding-left: 25;
  user-select: none;

  &[data-disabled] {
    color: blue;
    pointer-events: none;
  }

  &[data-state="open"] {
    background-color: violet;
    color: violet;
  }

  &:focus {
    background-color: white;
    color: violet;
  }
`;

export const StyledLabel = styled(DropdownMenuPrimitive.Label)`
  padding-left: 25;
  font-size: 12;
  line-height: 25px;
  color: gold;
`;

export const StyledSeparator = styled(DropdownMenuPrimitive.Separator)`
  height: 1;
  background-color: violet;
  margin: 5;
`;

export const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StyledArrow = styled(DropdownMenuPrimitive.Arrow)`
  fill: white;
`;

export const Box = styled.div``;

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20;
  color: white;

  :focus > & {
    color: white;
  }

  [data-disabled] & {
    color: yellow;
  }
`;

export const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 35;
  width: 35;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: violet;
  background-color: white;
  box-shadow: 0 2px 10px white;
  &:hover {
    background-color: violet;
  }
  &:focus {
    box-shadow: 0 0 0 2px white;
  }
`;
