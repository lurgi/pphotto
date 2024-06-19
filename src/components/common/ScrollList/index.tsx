import { useRef, PropsWithChildren, useSyncExternalStore } from "react";
import S from "./style";

function ScrollList({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetNode = containerRef.current;

  const getSnapshot = () => (targetNode ? targetNode.scrollTop : 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subscribe = (callback: any) => {
    //스크롤 이벤트가 발생할 때마다, callback함수를 실행합니다.
    targetNode?.addEventListener("scroll", callback);
    return () => targetNode?.removeEventListener("scroll", callback);
  };

  const scrollPosition = useSyncExternalStore(subscribe, getSnapshot);

  const isAtBottom = () =>
    targetNode ? scrollPosition + targetNode.clientHeight >= targetNode.scrollHeight - 5 : false;
  const isAtTop = () => scrollPosition === 0;

  return (
    <S.ScrollContainer>
      <S.TopFade visible={!isAtTop()} />
      <S.ScrollContent ref={containerRef}>{children}</S.ScrollContent>
      <S.BottomFade visible={!isAtBottom()} />
    </S.ScrollContainer>
  );
}

export default ScrollList;
