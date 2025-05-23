import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@core': path.resolve(__dirname, './src/core'),
            '@data': path.resolve(__dirname, './src/data'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@services': path.resolve(__dirname, './src/services'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@tests': path.resolve(__dirname, './src/__tests__'),
            '@ui': path.resolve(__dirname, './src/ui'),
        },
    },
})
