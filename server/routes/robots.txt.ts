import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const robots = `User-agent: *
Allow: /
Disallow: /.nuxt/
Disallow: /.output/
Disallow: /node_modules/

Sitemap: https://yourin.my.id/sitemap.xml

# Allow faster crawling
User-agent: Googlebot
Crawl-delay: 0

User-agent: Bingbot
Crawl-delay: 1
`
  
  setHeader(event, 'Content-Type', 'text/plain')
  return robots
})
