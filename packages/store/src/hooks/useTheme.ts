import { create } from "zustand";

interface ThemeState {
    dark: boolean
}

interface ThemeAction {
    updateDark: (dark: ThemeState['dark']) => void
}

export const useTheme = create<ThemeState & ThemeAction>((set) => ({
    dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
    updateDark: (dark) => set(() => ({dark: dark}))
}))