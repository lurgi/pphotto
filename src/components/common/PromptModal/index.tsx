// PromptModal.tsx
import React, { useEffect, useRef, useState } from "react";
import S from "./style";
import Button from "../Button";

interface PromptModalProps {
  bgColor?: string;
  textColor?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCancel?: () => void;
  onConfirm?: (value: string) => void;
}

const PromptModal: React.FC<PromptModalProps> = ({ isOpen, setIsOpen, onCancel, onConfirm }) => {
  const [inputValue, setInputValue] = useState("");
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!isOpen && dialog.current) {
      dialog.current.close();
    }
    if (isOpen && dialog.current) {
      dialog.current.show();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        if (onCancel) onCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen, onCancel]);

  const handleCancel = () => {
    if (onCancel) onCancel();
    setInputValue("");
    setIsOpen(false);
  };

  const handleConfirm = () => {
    if (onConfirm) {
      //TODO: Confirm Valid
      onConfirm(inputValue);
    }
    setInputValue("");
    setIsOpen(false);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
      if (onCancel) onCancel();
    }
  };

  return (
    <S.ModalOverlay isOpen={isOpen} onClick={handleOutsideClick}>
      <S.ModalContainer ref={dialog}>
        <S.ModalInput type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <S.ModalFooter>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default PromptModal;
