import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// checker({eslint:{lintCommand :'eslint"./src/**/*.{js,jsx,ts,tsx}"'}})
		// npm i  vite plugin  checker + eslint
	],
	build: {
		outDir: 'dist', // tells vite to output the build to a folder called docs
	},	
	base: '/' ,
	optimizeDeps: {
		include: ['@mui/material/Box'],
	},
});
