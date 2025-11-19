import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const baseURL = process.env.NODE_ENV === 'production' ? '/Web-Portfolio' : ''
  
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseURL}/sitemap.xml
`
  
  setHeader(event, 'Content-Type', 'text/plain')
  return robots
})
