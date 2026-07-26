import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const GOOGLE_FORM_PATH =
  '/forms/d/e/1FAIpQLSeaLT2MPWF883OFgpove-XBnF7Nur2BCvV9gqNXtW4h1-5EAA/formResponse'

const googleFormProxy = {
  '/api/form-response': {
    target: 'https://docs.google.com',
    changeOrigin: true,
    rewrite: () => GOOGLE_FORM_PATH,
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { proxy: googleFormProxy },
  preview: { proxy: googleFormProxy },
})
