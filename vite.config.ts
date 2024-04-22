import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({ APP_VERSION: 'local' }, { defineOn: 'import.meta.env' })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
