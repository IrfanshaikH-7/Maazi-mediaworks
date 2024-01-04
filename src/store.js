import { create } from "zustand"

 export const ThemeStore = create((set)=> ({
    theme: {
        backgroundImage:'bbburst',
        bgColor: 'red-800',
        primary: 'red-100',
        secondary: 'red-300',
        tertiary: 'red-600',
        forthery:'red-800'
       
    },
    
    
    setTheme:(themeData) => set((state) => ({
        theme: {
            ...state.theme, ...themeData,
        }
    })),
}))