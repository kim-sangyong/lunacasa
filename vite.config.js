// vite.config.js
import autoprefixer from 'autoprefixer'

export default {
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  }
}