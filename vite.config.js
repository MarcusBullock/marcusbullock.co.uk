import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    css: {
        modules: {
            generateScopedName: '[name]_[local]_[hash:base64:5]', // Customize class naming
            localsConvention: '', // Use camelCase for class names
        },
    },
});
