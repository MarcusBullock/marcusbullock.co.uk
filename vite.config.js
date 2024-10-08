import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), eslint(), svgr()],
    css: {
        modules: {
            generateScopedName: '[name]_[local]_[hash:base64:7]',
        },
    },
});
