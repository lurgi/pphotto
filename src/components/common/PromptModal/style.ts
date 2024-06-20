import styled from "@emotion/styled";
import COLOR_PALETTE from "../../../constants/colorPalette";

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.dialog`
  background-color: ${COLOR_PALETTE.HIGHLIGHT_LIGHTEST};
  color: ${COLOR_PALETTE.GRAY_DARK};
  border-radius: 8px;
  padding: 20px;
  width: fit-content;
  height: fit-content;
`;

const ModalInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid ${COLOR_PALETTE.GRAY_DARK};
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${COLOR_PALETTE.HIGHLIGHT_MEDIUM};
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const S = {
  ModalOverlay,
  ModalContainer,
  ModalInput,
  ModalFooter,
};

export default S;
