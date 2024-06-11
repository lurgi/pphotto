import styled from "@emotion/styled";
import COLOR_PALETTE from "../../constants/colorPalette";

const S = {
  PhotoDrop: styled.div`
    height: 100%;
    width: 80%;
    border-right: 2px solid ${COLOR_PALETTE.HIGHLIGHT_LIGHTEST};

    font-weight: 700;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 8px;
  `,
};

export default S;
