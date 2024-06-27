import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import S from "./style";
import Button from "../Button";
import LoadingDots from "../LoadingDots";

interface IModalProps extends PropsWithChildren {
  bgColor?: string;
  textColor?: string;
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onCancel?: () => void;
}

const BaseModal: React.FC<IModalProps> = ({ isOpen, setIsOpen, onCancel, children }) => {
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
        if (setIsOpen) setIsOpen(false);
        if (onCancel) onCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen, onCancel]);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      if (setIsOpen) setIsOpen(false);
      if (onCancel) onCancel();
    }
  };

  return (
    <S.ModalOverlay isOpen={isOpen} onClick={handleOutsideClick}>
      <S.ModalContainer ref={dialog}>{children}</S.ModalContainer>
    </S.ModalOverlay>
  );
};

interface IPromptModalProps extends IModalProps {
  onConfirm: (input: string) => void;
}

const PromptModal: React.FC<IPromptModalProps> = (props) => {
  const { onCancel, onConfirm } = props;
  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    if (onCancel) onCancel();
    setInputValue("");
  };

  const handleConfirm = () => {
    if (onConfirm) onConfirm(inputValue);
    setInputValue("");
  };

  return (
    <BaseModal {...props} onCancel={handleCancel}>
      <S.ModalTitle>이미지의 비율을 입력하세요.</S.ModalTitle>
      <S.ModalDescription>1~99의 숫자를 입력하세요.</S.ModalDescription>
      <S.ModalInput type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <S.ModalFooter>
        <Button onClick={handleCancel}>취소</Button>
        <Button onClick={handleConfirm}>확인</Button>
      </S.ModalFooter>
    </BaseModal>
  );
};

interface ILoadingModalProps {
  isLoading: boolean;
}

const LoadingModal: React.FC<ILoadingModalProps> = (props) => {
  const { isLoading } = props;
  if (!isLoading) return;
  return (
    <BaseModal {...props} isOpen={isLoading}>
      <LoadingDots />
    </BaseModal>
  );
};

const Modal = Object.assign(BaseModal, {
  PromptModal,
  LoadingModal,
});

export default Modal;
