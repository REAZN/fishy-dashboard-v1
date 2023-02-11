import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import reactPlugin from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        WindiCSS(),
        reactPlugin(),
    ],
});
