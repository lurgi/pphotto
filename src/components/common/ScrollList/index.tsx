import { useRef, PropsWithChildren, useSyncExternalStore } from "react";
import styled from "@emotion/styled";
import COLOR_PALETTE from "../../../constants/colorPalette";

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
  height: 30px;
  background: linear-gradient(to top, ${COLOR_PALETTE.HIGHLIGHT_LIGHT}, transparent);
  pointer-events: none;

  transition: opacity 0.2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

function ScrollList({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getSnapshot = () => (containerRef.current ? containerRef.current.scrollTop : 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subscribe = (callback: any) => {
    //스크롤 이벤트가 발생할 때마다, callback함수를 실행합니다.
    containerRef.current?.addEventListener("scroll", callback);
    return () => containerRef.current?.removeEventListener("scroll", callback);
  };

  const scrollPosition = useSyncExternalStore(subscribe, getSnapshot);

  const isAtBottom = () => {
    const node = containerRef.current;
    return node ? scrollPosition + node.clientHeight >= node.scrollHeight - 5 : false;
  };

  return (
    <ScrollContainer ref={containerRef}>
      {children}
      <BottomFade visible={!isAtBottom()} scrollTop={scrollPosition} />
    </ScrollContainer>
  );
}

export default ScrollList;
