import {defineConfig} from 'vite'
import tailwindcss from "@tailwindcss/vite"

import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],

    // 포트지정
    server: {
        port: 6075,
    },

    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
    },
})
