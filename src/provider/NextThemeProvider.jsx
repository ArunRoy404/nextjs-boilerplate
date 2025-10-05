import { ThemeProvider } from 'next-themes';
import React from 'react';

const NextThemeProvider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default NextThemeProvider;