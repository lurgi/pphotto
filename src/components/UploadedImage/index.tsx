import S from "./style";

interface IUploadImage {
  image: string;
}

const UploadImage = ({ image }: IUploadImage) => {
  return (
    <S.ImageBox>
      <S.Image src={image} />
    </S.ImageBox>
  );
};

export default UploadImage;
