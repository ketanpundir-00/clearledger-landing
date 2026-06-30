# ClearLedger Landing Page

Next.js 14 landing page for cleanledger.co.in

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Set environment variables (none needed for landing page)
4. Deploy

## Files Structure

```
src/app/
  layout.js       - Metadata, Schema markup (AEO/GEO/LLMO)
  page.js         - Main landing page component
  page.module.css - Styles (white premium theme)
  globals.css     - CSS variables & animations

public/
  robots.txt      - AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot)
  sitemap.xml     - Submit to Google Search Console
```

## After Deploy

1. Submit sitemap.xml to Google Search Console
2. Verify cleanledger.co.in in Search Console
3. Update APP_URL in page.js to your actual app URL
4. Add Privacy Policy and Terms pages
5. Set up support@cleanledger.co.in email

## AEO/GEO/LLMO Done

- FAQ Schema Markup ✅
- Organization Schema ✅  
- SoftwareApplication Schema ✅
- robots.txt AI crawlers ✅
- sitemap.xml ✅
- Answer-first FAQ content ✅
- India-specific keywords ✅
