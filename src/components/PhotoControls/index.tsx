import Button from "../common/Button";
import S from "./style";

import { RiFolderTransferLine } from "react-icons/ri";

const PhotoControls = () => {
  return (
    <S.Container>
      <Button>
        <RiFolderTransferLine size={28} />
        <S.Description>이미지 변환</S.Description>
      </Button>
    </S.Container>
  );
};

export default PhotoControls;
