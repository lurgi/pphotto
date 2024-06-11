import S from "./style";

import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GrDocumentTransfer } from "react-icons/gr";
import Button from "../common/Button";

const PhotoDrop = () => {
  return (
    <S.PhotoDrop>
      <MdOutlinePhotoLibrary size={40} />
      <p>사진을 이곳에 드래그 하세요</p>
      <Button>
        <GrDocumentTransfer />
        <p>이미지 업로드</p>
      </Button>
    </S.PhotoDrop>
  );
};

export default PhotoDrop;
