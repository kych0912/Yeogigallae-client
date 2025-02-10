import { create } from "zustand";

interface ImageState {
  selectedImage: string | null;
  setSelectedImage: (imageUrl: string) => void;
}

export const useImageStore = create<ImageState>((set) => ({
  selectedImage: null,
  setSelectedImage: (imageUrl) => set({ selectedImage: imageUrl }),
}));
