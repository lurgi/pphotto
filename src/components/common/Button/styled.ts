import styled from "@emotion/styled";
import COLOR_PALETTE from "../../../constants/colorPalette";

const S = {
  Button: styled.button`
    font-weight: 500;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 4px;

    border: 2.5px solid ${COLOR_PALETTE.HIGHLIGHT_MEDIUM};
    border-radius: 100px;
    padding: 5px 10px;

    transition: all 0.2s;
    &:hover {
      border-color: ${COLOR_PALETTE.HIGHLIGHT_DARK};
    }
  `,
};

export default S;
