import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@data': path.resolve(__dirname, './src/data'),
            '@config': path.resolve(__dirname, './src/config'),
            '@core': path.resolve(__dirname, './src/core'),
            '@services': path.resolve(__dirname, './src/services'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@ui': path.resolve(__dirname, './src/ui'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@tests': path.resolve(__dirname, './src/__tests__'),
        },
    },
})
