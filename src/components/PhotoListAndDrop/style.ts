import styled from "@emotion/styled";
import COLOR_PALETTE from "../../constants/colorPalette";

const S = {
  PhotoContainer: styled.div`
    height: 100%;
    width: 80%;
    border-right: 2px solid ${COLOR_PALETTE.HIGHLIGHT_LIGHTEST};
    box-sizing: border-box;

    font-weight: 700;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 12px;
    padding: 20px;
  `,

  PhotoImages: styled.div`
    height: 70%;

    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(4, 1fr);
    }

    border-radius: 15px;
  `,

  PhotoDrop: styled.div<{ isDragging: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    box-sizing: border-box;

    padding: 10px;
    width: 100%;

    background-color: ${(props) => props.isDragging && COLOR_PALETTE.HIGHLIGHT_MEDIUM};

    border: 2px dashed ${COLOR_PALETTE.HIGHLIGHT_DARK};
    border-radius: 10px;

    flex: 1;
  `,
};

export default S;
