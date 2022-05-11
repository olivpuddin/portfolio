// React
import React from "react";

// Next
import Link from "next/link";

// Dropdown
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

// Icons
import { FaBars } from "react-icons/fa";

// Styles
import {
  StyledArrow,
  StyledContent,
  StyledItem,
  Box,
  IconButton,
} from "./styles";

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuArrow = StyledArrow;

export const DropdownMenuDemo = () => {
  return (
    <Box>
      <DropdownMenuPrimitive.DropdownMenu>
        <DropdownMenuPrimitive.DropdownMenuTrigger asChild>
          <IconButton>
            <FaBars />
          </IconButton>
        </DropdownMenuPrimitive.DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>

          <Link href="/projects">
            <DropdownMenuItem>Projects</DropdownMenuItem>
          </Link>

          <Link href="/contact">
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </Link>
          <DropdownMenuArrow offset={12} />
        </DropdownMenuContent>
      </DropdownMenuPrimitive.DropdownMenu>
    </Box>
  );
};

export default DropdownMenuDemo;
