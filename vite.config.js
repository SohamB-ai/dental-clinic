import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: './index.html',
        treatments: './treatments.html',
        doctors: './doctors.html',
        gallery: './gallery.html',
        appointment: './appointment.html'
      },
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    middlewareMode: false
  }
})
