import S from "./style";

import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GrDocumentTransfer } from "react-icons/gr";
import Button from "../common/Button";
import UploadImage from "../UploadedImage";
import ScrollList from "../common/ScrollList";

import image1 from "../../assets/images/cuteDog1.jpeg";
import image2 from "../../assets/images/cuteDog2.jpeg";

import { useState } from "react";
import XScrollList from "../XScrollList";

const PhotoListAndDrop = () => {
  const [images, setImages] = useState<string[]>(
    Array.from({ length: 20 }, (_, index) => {
      if (index % 2 === 1) {
        return image1;
      } else return image2;
    })
  );

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages(images.concat(newImages));
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

      <S.PhotoDrop onDragOver={handleDragOver} onDrop={handleDrop}>
        <MdOutlinePhotoLibrary size={40} />
        <p>사진을 이곳에 드래그 하세요</p>
        <Button>
          <GrDocumentTransfer />
          <p>이미지 업로드</p>
        </Button>
      </S.PhotoDrop>
    </S.PhotoContainer>
  );
};

export default PhotoListAndDrop;
