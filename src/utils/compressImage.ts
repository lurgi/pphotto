import sharp from "sharp";

interface ICompressImage {
  inputPath: string;
  outputPath: string;
  quality: number;
}

function compressImage({ inputPath, outputPath, quality }: ICompressImage) {
  sharp(inputPath)
    .jpeg({ quality: quality })
    .toFile(outputPath, (err, resizeImageInfo) => {
      if (err) {
        console.log("[ERROR]:", err);
      } else {
        console.log("Image resized and saved as", outputPath, resizeImageInfo);
      }
    });
}

export default compressImage;
