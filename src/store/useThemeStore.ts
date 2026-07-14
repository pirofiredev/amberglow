import { create } from "zustand";

interface Theme {
    isDark: boolean;
    toggleTheme: () => void;
}

export const useStoreTheme = create<Theme>((set) => ({
    isDark: true,
    toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}))