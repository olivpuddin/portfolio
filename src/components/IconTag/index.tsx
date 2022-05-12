import React from "react";

import { Tag, Icon } from "./styles";

import { IconType } from "react-icons";

interface Props {
  IconLib: IconType;
}

export const IconTag = ({ IconLib }: Props) => {
  return (
    <Tag>
      <Icon>
        <IconLib />
      </Icon>
    </Tag>
  );
};
