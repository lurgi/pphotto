import { create } from "zustand";
import compressImage from "../utils/compressImage";

interface IImagesStore {
  images: string[];
  addImages: (newImages: string[]) => void;
  compressAllImages: (quality: number) => string[];
}

export const useImageStore = create<IImagesStore>((set, get) => ({
  images: [],
  addImages: (newImages) => {
    set((prev) => {
      const images = [...new Set([...prev.images, ...newImages])];

      if (images.length > 20) {
        alert("이미지는 최대 20개 까지만 선택하세요!");
        return {
          images: images.slice(0, 20),
        };
      }

      return {
        images,
      };
    });
  },
  /**
   *
   * @param quality Compress할 비율을 입력합니다. 1~99 범위의 숫자.
   */
  compressAllImages: (quality: number) => {
    const images = get().images;
    return images.map((image) => image);
  },
}));
