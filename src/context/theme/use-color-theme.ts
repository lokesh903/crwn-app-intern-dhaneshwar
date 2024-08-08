import { createTheme, PaletteMode } from '@mui/material';
import React, { useEffect } from 'react';
import { getDesignTokens } from './theme';

export const useColorTheme = () => {
	const [mode, setMode] = React.useState<PaletteMode>(() => {
		// Initialize mode from localStorage or default to 'dark'
		const storedTheme = localStorage.getItem('theme') as PaletteMode;
		return storedTheme || 'dark';
	});
	const toggleColorMode = () => {
		setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
	};

	useEffect(() => {
		// Set localStorage when mode changes
		localStorage.setItem('theme', mode);
	}, [mode]);

	const modifiedTheme = React.useMemo(
		() => createTheme(getDesignTokens(mode)),
		[mode]
	);

	return {
		theme: modifiedTheme,
		mode,
		toggleColorMode,
	};
};
