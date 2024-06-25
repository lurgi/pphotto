import { useState } from "react";
import Button from "../common/Button";
import S from "./style";

import { RiFolderTransferLine } from "react-icons/ri";
import PromptModal from "../common/PromptModal";
import { useImageStore } from "../../store/imagesStore";

const PhotoControls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCompressedAllImages, isLoading: isCompressLoading } = useImageStore();

  const handleDownload = async (quality: string) => {
    const compressedImages = await getCompressedAllImages(Number(quality));
    //TODO: isLoading이 true인 경우, Loading 모달을 띄우고, Loading이 끝나는 경우 getCompressedAllImages()의 값을 사용자의 컴퓨터에 다운로드 한다.

    console.log(compressedImages);
  };

  return (
    <S.Container>
      <Button onClick={() => setIsModalOpen(true)}>
        <RiFolderTransferLine size={28} />
        <S.Description>이미지 변환</S.Description>
      </Button>

      {/*<--MODAL--> */}
      <PromptModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} onConfirm={handleDownload} />
      {/*TODO: Loading 모달 띄우기 */}
    </S.Container>
  );
};

export default PhotoControls;
