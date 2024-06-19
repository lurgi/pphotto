import { create } from "zustand";

interface IImagesStore {
  images: string[];
  addImages: (newImages: string[]) => void;
}

export const useImageStore = create<IImagesStore>((set) => ({
  images: [],
  addImages: (newImages) => {
    set(({ images }) => ({
      images: images.concat(newImages),
    }));
  },
}));
