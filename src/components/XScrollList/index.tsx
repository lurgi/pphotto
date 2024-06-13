import { useState, useRef, PropsWithChildren, useEffect } from "react";
import styled from "@emotion/styled";
import COLOR_PALETTE from "../../constants/colorPalette";

const ScrollContainer = styled.div`
  height: 400px;
  overflow-y: scroll;
  position: relative;
`;

const BottomFade = styled.div<{ visible: boolean; scrollTop?: number }>`
  position: absolute;
  bottom: ${(props) => -(props.scrollTop || 0) + "px"};
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(to top, ${COLOR_PALETTE.HIGHLIGHT_LIGHT}, transparent);
  pointer-events: none;

  transition: opacity 0.2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

function XScrollList({ children }: PropsWithChildren) {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState<number | undefined>(undefined);

  const checkIfScrolledToBottom = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    setScrollTop(scrollTop);
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", checkIfScrolledToBottom);

    return () => {
      container.removeEventListener("scroll", checkIfScrolledToBottom);
    };
  }, []);

  return (
    <ScrollContainer ref={containerRef}>
      {children}
      <BottomFade visible={!isAtBottom} scrollTop={scrollTop} />
    </ScrollContainer>
  );
}

export default XScrollList;
