import Compressor from "compressorjs";

interface ICompressImage {
  image: File;
  quality: number;
}

async function compressImage({ image, quality }: ICompressImage): Promise<File> {
  return new Promise((resolve, reject) => {
    new Compressor(image, {
      quality: quality / 100, // quality는 0에서 1 사이의 값이어야 하므로 100으로 나눕니다.
      convertSize: Infinity, // 이미지 변환을 강제하지 않기 위해 convertSize를 무한대로 설정
      success(result: File) {
        resolve(result);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

export default compressImage;
