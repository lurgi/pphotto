import styled from "@emotion/styled";
import COLOR_PALETTE from "../../../constants/colorPalette";

const S = {
  Button: styled.button`
    margin-top: 4px;
    display: flex;
    gap: 4px;

    justify-content: center;
    align-items: center;

    border: 3px solid ${COLOR_PALETTE.HIGHLIGHT_MEDIUM};
    border-radius: 100px;
    padding: 5px 10px;

    transition: all 0.2s;
    &:hover {
      border-color: ${COLOR_PALETTE.HIGHLIGHT_DARK};
    }
  `,
};

export default S;
