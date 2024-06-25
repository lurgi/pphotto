import { create } from "zustand";
import compressImage from "../utils/compressImage";

interface IImagesStore {
  images: File[];
  addImages: (newImages: File[]) => void;
  getCompressedAllImages: (quality: number) => Promise<File[]>;
  isLoading: boolean;
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
  getCompressedAllImages: async (quality: number) => {
    const images = get().images;
    set(() => ({ isLoading: true }));

    const compressedImages: File[] = [];
    for await (const image of images) {
      try {
        const compressedImage = await compressImage({ image, quality });
        compressedImages.push(compressedImage);
      } catch (e) {
        //TODO: Error핸들링
      }
    }

    set(() => ({ isLoading: false }));
    return compressedImages;
  },

  isLoading: false,
}));
