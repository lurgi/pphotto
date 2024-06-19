import S from "./style";

import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GrDocumentTransfer } from "react-icons/gr";
import Button from "../common/Button";
import UploadImage from "../UploadedImage";
import ScrollList from "../common/ScrollList";

import image1 from "../../assets/images/cuteDog1.jpeg";
import image2 from "../../assets/images/cuteDog2.jpeg";

import { useEffect, useState } from "react";

const PhotoListAndDrop = () => {
  const [images, setImages] = useState<string[]>(
    Array.from({ length: 20 }, (_, index) => {
      if (index % 2 === 1) {
        return image1;
      } else return image2;
    })
  );
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    console.log(isDragging);
  }, [isDragging]);

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages(images.concat(newImages));
    setIsDragging(false);
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
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        isDragging={isDragging}
      >
        <MdOutlinePhotoLibrary size={40} />
        <p>사진을 이곳에 드래그 하세요</p>
        <Button
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <GrDocumentTransfer />
          <p>이미지 업로드</p>
        </Button>
      </S.PhotoDrop>
    </S.PhotoContainer>
  );
};

export default PhotoListAndDrop;
