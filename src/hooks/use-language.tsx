import { create } from "zustand";

type Language = {
  language: { id: number; name: string };
  setLanguage: (id: number, name: string) => void;
};

const useLanguageStore = create<Language>()((set) => ({
  language: { id: 1, name: "French" },
  setLanguage(id, name) {
    set({ language: { id, name } });
  },
}));

export default useLanguageStore;
