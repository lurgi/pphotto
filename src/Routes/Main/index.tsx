import S from "./style";

import PhotoListAndDrop from "../../components/PhotoListAndDrop";
import PhotoControls from "../../components/PhotoControls";

const Main = () => {
  return (
    <S.Main>
      <S.MainBackground />
      <S.PhotoContainer>
        <PhotoListAndDrop />
        <PhotoControls />
      </S.PhotoContainer>
    </S.Main>
  );
};

export default Main;
