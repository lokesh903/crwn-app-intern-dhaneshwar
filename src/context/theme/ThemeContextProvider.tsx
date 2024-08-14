import { createTheme, Theme } from '@mui/material';
import React, { createContext, PropsWithChildren, useContext } from 'react';
import { useColorTheme } from './use-color-theme';

type ThemeContextType = {
	mode: string;
	toggleColorMode: () => void;
	theme: Theme;
};
export const ThemeContext = createContext<ThemeContextType>({
	mode: 'dark',
	toggleColorMode: () => {},
	theme: createTheme(),
});

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const value = useColorTheme();
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	return useContext(ThemeContext);
};
