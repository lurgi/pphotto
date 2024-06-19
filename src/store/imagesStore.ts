import { create } from "zustand";

interface IImagesStore {
  images: string[];
  addImages: (newImages: string[]) => void;
}

export const useImageStore = create<IImagesStore>((set) => ({
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
}));
