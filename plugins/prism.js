import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook('app:mounted', () => {
    Prism.highlightAll()
  })

  if (process.client) {
    nuxtApp.hooks.hook('page:finish', () => {
      Prism.highlightAll()
    })
  }
})