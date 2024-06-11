import styled from "@emotion/styled";
import COLOR_PALETTE from "../../constants/colorPalette";

const S = {
  Main: styled.main`
    width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  MainBackground: styled.div`
    position: absolute;
    height: 70%;
    width: 100%;
    top: 0;

    z-index: -1;

    background-color: ${COLOR_PALETTE.HIGHLIGHT_LIGHTEST};
  `,

  PhotoContainer: styled.div`
    display: flex;

    width: 80vw;
    height: 70vh;
    background-color: ${COLOR_PALETTE.HIGHLIGHT_LIGHT};
    color: ${COLOR_PALETTE.GRAY_DARK};

    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `,
};

export default S;
