// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-11-18',
  devtools: { enabled: true },
  
  // SSR and rendering - disable SSR for GitHub Pages SPA
  ssr: false,
  
  // Generate static site with index.html
  routeRules: {
    '/**': { prerender: true }
  },
  
  // Modules
  modules: ['@nuxtjs/tailwindcss'],
  
  // Tailwind configuration
  tailwindcss: {
    configPath: './tailwind.config.js',
  },

  // PostCSS configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // CSS
  css: ['~/assets/css/main.css'],
  
  // Nitro configuration untuk static generation
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt', '/404.html'],
      ignore: ['/admin']
    },
    output: {
      publicDir: '.output/public'
    }
  },

  // App configuration
  app: {
    baseURL: '/',
    head: {
      title: 'Yourin Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Laravel specialist portfolio showcasing fullstack development projects and expertise in Laravel ecosystem'
        },
        { 
          hid: 'og-type', 
          property: 'og:type', 
          content: 'website'
        },
        { 
          hid: 'og-title', 
          property: 'og:title', 
          content: 'Yourin Portfolio'
        }
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/svg+xml',
          href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ef4444" width="100" height="100"/><text x="50" y="65" font-size="60" font-weight="bold" text-anchor="middle" fill="white" font-family="Arial">Y</text></svg>'
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&family=Outfit:wght@400;500;600;700&display=swap' 
        }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  // Experimental features
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true
  },

  // Build configuration
  build: {
    transpile: ['flowbite']
  },

  // Vite configuration
  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  }
})
