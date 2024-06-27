import { useState } from "react";
import S from "./style";

import { RiFolderTransferLine } from "react-icons/ri";
import { useImageStore } from "../../store/imagesStore";

import Button from "../common/Button";

import JSZip from "jszip";
import { saveAs } from "file-saver";
import Modal from "../common/Modal";

const PhotoControls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCompressedAllImages, resetImages, isLoading: isCompressLoading } = useImageStore();

  const handleDownload = async (quality: string) => {
    const compressedImages = await getCompressedAllImages(Number(quality));

    const zip = new JSZip();
    compressedImages.forEach((file, index) => {
      zip.file(`image-${index}.jpg`, file);
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "images.zip");

    resetImages();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (input: string) => {
    handleCancel();
    handleDownload(input);
  };

  return (
    <S.Container>
      <Button onClick={() => setIsModalOpen(true)}>
        <RiFolderTransferLine size={28} />
        <S.Description>이미지 변환</S.Description>
      </Button>

      {/*<--MODAL--> */}
      <Modal.PromptModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <Modal.LoadingModal isLoading={isCompressLoading} />
    </S.Container>
  );
};

export default PhotoControls;
