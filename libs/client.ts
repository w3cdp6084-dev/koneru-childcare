import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'koneru-childcare',
  apiKey: process.env.API_KEY || 'b29e586a55984f3bbcdd9cb232bda0585955',
})