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
      title: 'Laravel Specialist Portfolio',
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
          content: 'Laravel Specialist Portfolio'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  // Experimental features
  experimental: {
    payloadExtraction: false,
    renderJsonPayload: true
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
