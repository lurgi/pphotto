import styled from "@emotion/styled";
import COLOR_PALETTE from "../../constants/colorPalette";

const S = {
  ImageBox: styled.div`
    width: 100%;
    border-radius: 10px;
    aspect-ratio: 1/1;

    background-color: ${COLOR_PALETTE.HIGHLIGHT_LIGHTEST};
  `,

  Image: styled.img`
    width: 100%;
    border-radius: 10px;
    aspect-ratio: 1/1;
    object-fit: cover;
  `,
};

export default S;
