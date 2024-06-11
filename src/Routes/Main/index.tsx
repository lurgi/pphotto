import S from "./style";

import PhotoDrop from "../../components/PhotoDrop";
import PhotoControls from "../../components/PhotoControls";

const Main = () => {
  return (
    <S.Main>
      <S.MainBackground />
      <S.PhotoContainer>
        <PhotoDrop />
        <PhotoControls />
      </S.PhotoContainer>
    </S.Main>
  );
};

export default Main;
