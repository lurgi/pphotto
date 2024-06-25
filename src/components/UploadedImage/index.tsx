import S from "./style";
import useImage from "../../hooks/useImage";
import LoadingDots from "../common/LoadingDots";

interface IUploadImage {
  image: string;
}

const UploadImage = ({ image }: IUploadImage) => {
  const { isLoading } = useImage(image);

  return (
    <S.ImageBox>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <S.Image
          src={image}
          loading="lazy"
          alt="uploadedImage"
          sizes="(max-width: 900px) 17.5vw, (max-width: 600px) 23vw, 35vw"
        />
      )}
    </S.ImageBox>
  );
};

export default UploadImage;
