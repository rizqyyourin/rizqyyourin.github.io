import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const baseURL = process.env.NODE_ENV === 'production' ? 'https://yourdomain.com/Web-Portfolio' : 'http://localhost:3000'
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseURL}/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseURL}/#about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseURL}/#projects</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseURL}/#skills</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseURL}/#contact</loc>
    <priority>0.8</priority>
  </url>
</urlset>`
  
  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})
