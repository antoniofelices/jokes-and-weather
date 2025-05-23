import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@data': path.resolve(__dirname, './src/data'),
            '@core': path.resolve(__dirname, './src/core'),
            '@services': path.resolve(__dirname, './src/services'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@ui': path.resolve(__dirname, './src/ui'),
            '@tests': path.resolve(__dirname, './src/__tests__'),
        },
    },
})
