export default defineNuxtPlugin((nuxtApp) => {
  // Smooth scroll behavior
  if (process.client) {
    document.documentElement.style.scrollBehavior = 'smooth'
  }
})
