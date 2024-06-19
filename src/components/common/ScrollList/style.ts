import styled from "@emotion/styled";
import COLOR_PALETTE from "../../../constants/colorPalette";

const Fade = styled.div<{ visible: boolean }>`
  position: absolute;

  left: 0;
  width: 100%;
  height: 20px;

  pointer-events: none;
  z-index: 1;

  transition: opacity 0.2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

const S = {
  ScrollContainer: styled.div`
    position: relative;
    box-sizing: border-box;
  `,

  ScrollContent: styled.div`
    max-height: 300px;
    overflow-y: scroll;
  `,

  TopFade: styled(Fade)`
    top: 0;
    background: linear-gradient(to bottom, ${COLOR_PALETTE.HIGHLIGHT_LIGHT}, transparent);
  `,

  BottomFade: styled(Fade)`
    bottom: 0;
    background: linear-gradient(to top, ${COLOR_PALETTE.HIGHLIGHT_LIGHT}, transparent);
  `,
};

export default S;
