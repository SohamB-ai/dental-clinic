import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        treatments: './treatments.html',
        doctors: './doctors.html',
        gallery: './gallery.html',
        appointment: './appointment.html'
      }
    }
  }
})
