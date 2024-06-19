import S from "./style";

import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GrDocumentTransfer } from "react-icons/gr";
import Button from "../common/Button";
import UploadImage from "../UploadedImage";
import ScrollList from "../common/ScrollList";

import { useRef, useState } from "react";
import { useImageStore } from "../../store/imagesStore";

const PhotoListAndDrop = () => {
  const setImages = useImageStore((state) => state.addImages);
  const images = useImageStore((state) => state.images);
  const [isDragging, setIsDragging] = useState(false);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFiles = (files: File[]) => {
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages(newImages);
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
    setIsDragging(false);
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  return (
    <S.PhotoContainer>
      {images.length !== 0 && (
        <ScrollList>
          <S.PhotoImages>
            {images.map((image, index) => (
              <UploadImage key={index} image={image} />
            ))}
          </S.PhotoImages>
        </ScrollList>
      )}

      <S.PhotoDrop
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        isDragging={isDragging}
      >
        <MdOutlinePhotoLibrary size={40} />
        <p>사진을 이곳에 드래그 하세요</p>
        <Button onClick={() => fileInput.current?.click()}>
          <input onChange={handleClick} ref={fileInput} type="file" hidden />
          <GrDocumentTransfer />
          <p>이미지 업로드</p>
        </Button>
      </S.PhotoDrop>
    </S.PhotoContainer>
  );
};

export default PhotoListAndDrop;
