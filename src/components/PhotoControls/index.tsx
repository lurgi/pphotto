import { useState } from "react";
import Button from "../common/Button";
import S from "./style";

import { RiFolderTransferLine } from "react-icons/ri";
import PromptModal from "../common/PromptModal";
import { useImageStore } from "../../store/imagesStore";

import JSZip from "jszip";
import { saveAs } from "file-saver";

const PhotoControls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCompressedAllImages, isLoading: isCompressLoading } = useImageStore();

  const handleDownload = async (quality: string) => {
    const compressedImages = await getCompressedAllImages(Number(quality));

    const zip = new JSZip();
    compressedImages.forEach((file, index) => {
      zip.file(`image-${index}.jpg`, file);
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "images.zip");
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
