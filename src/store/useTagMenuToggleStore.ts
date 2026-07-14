import { create } from "zustand";

interface TagMenuToggleStore {
    isOpened: boolean;
    toggleMenu: () => void;
    openMenu: () => void;
    closeMenu: () => void;
}

export const useTagMenuToggle = create<TagMenuToggleStore>((set) => ({
    isOpened: false,

    toggleMenu: () =>
        set((state) => ({ isOpened: !state.isOpened })),

    openMenu: () =>
        set({ isOpened: true }),

    closeMenu: () =>
        set({ isOpened: false }),
}));