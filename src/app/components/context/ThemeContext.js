import React from 'react'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
        state: 'success',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
        state: 'warning',
    },
};

export const ThemeContext = React.createContext(
    themes.dark
);