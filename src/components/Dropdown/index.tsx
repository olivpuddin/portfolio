import React, { useState } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import GlobeSvg from '../../assets/globe.svg'
import {
  StyledArrow,
  StyledCheckboxItem,
  StyledContent,
  StyledItem,
  StyledItemIndicator,
  StyledLabel,
  StyledRadioItem,
  StyledSeparator,
  StyledTriggerItem,
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
  Box,
  IconButton,
  RightSlot,
} from "./styles";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuTriggerItem = StyledTriggerItem;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

export const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <Box>
      <DropdownMenuPrimitive.DropdownMenu>
        <DropdownMenuPrimitive.DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            <GlobeSvg />
          </IconButton>
        </DropdownMenuPrimitive.DropdownMenuTrigger>

        <DropdownMenuPrimitive.DropdownMenuContent sideOffset={5} style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 5
        }}>
          <DropdownMenuPrimitive.DropdownMenuItem>
            New Tab <RightSlot>⌘+T</RightSlot>
          </DropdownMenuPrimitive.DropdownMenuItem>
          <DropdownMenuPrimitive.DropdownMenuItem>
            New Window <RightSlot>⌘+N</RightSlot>
          </DropdownMenuPrimitive.DropdownMenuItem>
          <DropdownMenuPrimitive.DropdownMenuItem disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownMenuPrimitive.DropdownMenuItem>
          <DropdownMenuPrimitive.DropdownMenu>
            <DropdownMenuPrimitive.DropdownMenuContent
              sideOffset={2}
              alignOffset={-5}
            >
              <DropdownMenuPrimitive.DropdownMenuItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownMenuPrimitive.DropdownMenuItem>
              <DropdownMenuPrimitive.DropdownMenuItem>
                Create Shortcut…
              </DropdownMenuPrimitive.DropdownMenuItem>
              <DropdownMenuPrimitive.DropdownMenuItem>
                Name Window…
              </DropdownMenuPrimitive.DropdownMenuItem>
              <DropdownMenuPrimitive.DropdownMenuSeparator />
              <DropdownMenuPrimitive.DropdownMenuItem>
                Developer Tools
              </DropdownMenuPrimitive.DropdownMenuItem>
            </DropdownMenuPrimitive.DropdownMenuContent>
          </DropdownMenuPrimitive.DropdownMenu>
          <DropdownMenuPrimitive.DropdownMenuSeparator />
          <DropdownMenuPrimitive.DropdownMenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </DropdownMenuPrimitive.DropdownMenuCheckboxItem>
          <DropdownMenuPrimitive.DropdownMenuCheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          ></DropdownMenuPrimitive.DropdownMenuCheckboxItem>
          <DropdownMenuPrimitive.DropdownMenuSeparator />
          <DropdownMenuPrimitive.DropdownMenuLabel>
            People
          </DropdownMenuPrimitive.DropdownMenuLabel>
          <DropdownMenuPrimitive.DropdownMenuRadioGroup
            value={person}
            onValueChange={setPerson}
          >
            <DropdownMenuPrimitive.DropdownMenuRadioItem value="pedro">
              Pedro Duarte
            </DropdownMenuPrimitive.DropdownMenuRadioItem>
          </DropdownMenuPrimitive.DropdownMenuRadioGroup>
          <DropdownMenuPrimitive.DropdownMenuArrow offset={12} />
        </DropdownMenuPrimitive.DropdownMenuContent>
      </DropdownMenuPrimitive.DropdownMenu>
    </Box>
  );
};

export default DropdownMenuDemo;
