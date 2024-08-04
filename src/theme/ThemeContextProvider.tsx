import { createTheme, Theme } from '@mui/material';
import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
} from 'react';
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

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const value = useColorTheme();
	// useEffect(() => {
	// 	localStorage.setItem('mode', value.mode);
	// }, []);
	// console.log(value.mode);
	// console.log(value);
	

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	return useContext(ThemeContext);
};
