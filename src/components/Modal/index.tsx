// React
import React, { ReactNode } from "react";

// Reactstrap
import { Modal, ModalBody, ModalHeader } from "reactstrap";

// Icon
import { FiX } from "react-icons/fi";

// Styles
import { Title, Button } from "./styles";
import { theme } from "../../styles/theme";
import { useTheme } from "../../hooks/useTheme";

interface Props {
  title: string;
  isOpen: boolean;
  onClosed: () => void;
  children: ReactNode;
}

export const ModalBlank = ({ title, isOpen, onClosed, children }: Props) => {
  const { isDarkTheme } = useTheme();

  return (
    <Modal
      title={title}
      size="xl"
      centered
      isOpen={isOpen}
      toggle={onClosed}
      keyboard={true}
      fade={true}
      scrollable
    >
      <ModalHeader
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: `${
            isDarkTheme ? theme.darkTheme.header : theme.lightTheme.header
          }`,
        }}
      >
        <Button type="button" onClick={onClosed}>
          <FiX />
        </Button>
        <Title>{title}</Title>
      </ModalHeader>

      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};
