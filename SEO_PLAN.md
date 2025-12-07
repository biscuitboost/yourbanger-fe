# YourBanger SEO Plan

## Executive Summary

**Domain:** yourbanger.com  
**Current Status:** Foundation in place (sitemap, meta tags, OG tags)  
**Primary Goal:** Rank for personalized song gift keywords and drive app signups

---

## 1. Current SEO Audit

### ✅ Already Implemented
- Sitemap generation via `@astrojs/sitemap`
- Basic meta descriptions on all pages
- Open Graph and Twitter Card tags
- Google Site Verification (`orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M`)
- Static site generation (fast load times)
- Mobile-responsive design
- RSS feed capability

### ⚠️ Needs Improvement
- `robots.txt` is too minimal
- No structured data (Schema.org)
- Blog disabled but infrastructure exists
- No canonical URLs explicitly set
- Missing page-specific OG images
- No Google Analytics configured

---

## 2. Keyword Strategy

### Primary Keywords (High Intent) - Updated with DataForSEO Data (Dec 2024)
| Keyword | Monthly Volume | Difficulty | Competition | Priority |
|---------|---------------|------------|-------------|----------|
| ai song generator | 60,500 | 71 (Hard) | LOW | 🟡 Medium |
| personalized happy birthday song | 1,600 | 5 (Easy) | MEDIUM | 🔴 High |
| personalized birthday song | 1,000 | 2 (Very Easy) | LOW | 🔴 High |
| custom song gift | 880 | - | HIGH | � High |
| personalized song | 720 | - | LOW | 🔴 High |
| personalized song gift | 480 | 9 (Easy) | HIGH | 🔴 High |
| personalized wedding song | 140 | - | HIGH | 🟡 Medium |

**Key Insight:** "personalized birthday song" has extremely low keyword difficulty (2) - high priority target!

### Secondary Keywords (Informational)
| Keyword | Monthly Volume | Use Case |
|---------|---------------|----------|
| unique gift ideas | 12,100 | Blog content |
| personalized gifts for him/her | 8,100 | Blog content |
| creative birthday gift | 3,600 | Blog content |
| last minute gift ideas | 14,800 | Blog content |
| wedding toast ideas | 6,600 | Blog content |

### Long-Tail Keywords (Low Competition, High Conversion)
- "make a song about someone"
- "ai song with my lyrics"
- "personalized song for dad"
- "custom birthday song online"
- "create a song for my wife"
- "funny song for friend"
- "retirement song for coworker"
- "anniversary song with our story"

---

## 3. On-Page SEO Action Items

### 3.1 Homepage Optimization
**Current Title:** `YourBanger - Turn Your Story Into a Song`  
**Recommended Title:** `Personalized AI Songs | Custom Music Gifts in Minutes | YourBanger`

**Current Description:** Good, but add urgency  
**Recommended:**
```
Create personalized AI songs in 2 minutes. Perfect for birthdays, weddings & special moments. Turn your story into a professional song. $14 for 10 songs. No talent required.
```

**Add H1-H6 Structure:**
- H1: "Turn Your Story Into a Song" (only one)
- H2: "How It Works", "Real Songs, Real Stories", "What People Are Saying"
- H3: Individual feature/testimonial headings

### 3.2 Pricing Page
**Recommended Title:** `Pricing - $1.40 Per Song | Custom AI Music | YourBanger`

**Add FAQ Schema** for pricing questions (see Section 4)

### 3.3 Examples Page
**Recommended Title:** `Song Examples | Hear Real Personalized AI Songs | YourBanger`

**Add:**
- Individual song schema (MusicRecording)
- Alt text for any images
- Audio transcripts for accessibility + SEO

### 3.4 FAQ Page
**Recommended Title:** `FAQ - How AI Personalized Songs Work | YourBanger`

**Add FAQPage Schema** (high impact for featured snippets)

---

## 4. Technical SEO Action Items

### 4.1 Update robots.txt
```txt
User-agent: *
Allow: /

Sitemap: https://yourbanger.com/sitemap-index.xml

# Block internal/test paths if any
Disallow: /api/
Disallow: /_astro/
```

### 4.2 Add Structured Data (Schema.org)

**Organization Schema** (site-wide):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "YourBanger",
  "url": "https://yourbanger.com",
  "logo": "https://yourbanger.com/logo.png",
  "description": "AI-powered personalized song creation service",
  "sameAs": [
    "https://twitter.com/yourbanger",
    "https://instagram.com/yourbanger"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@yourbanger.com",
    "contactType": "customer service"
  }
}
```

**Product Schema** (Pricing page):
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "YourBanger Song Credits",
  "description": "10 personalized AI-generated songs",
  "offers": {
    "@type": "Offer",
    "price": "14.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

**FAQPage Schema** (FAQ page):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to create a song?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "About 2 minutes to input your story, then ~1 minute for AI generation. Total: ~3 minutes."
      }
    }
  ]
}
```

### 4.3 Add Canonical URLs
Ensure each page has:
```html
<link rel="canonical" href="https://yourbanger.com/pricing" />
```

### 4.4 Image Optimization
- Add descriptive alt text to all images
- Use WebP format where possible
- Implement lazy loading (already have via `lazyImagesRehypePlugin`)
- Create unique OG images per page (1200x630px)

### 4.5 Core Web Vitals
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Run Lighthouse audits monthly
- Astro static generation should help significantly

---

## 5. Content Strategy

### 5.1 Enable Blog (High Priority)
The blog infrastructure exists—enable it for organic traffic.

**Recommended Blog Categories:**
1. **Gift Guides** - "Best Personalized Gifts for [Occasion]"
2. **Use Cases** - "How to Make the Perfect [Event] Song"
3. **Behind the Scenes** - "How AI Creates Your Song"
4. **Customer Stories** - "How [Name] Surprised Their [Relationship]"

### 5.2 Blog Content Calendar (First 3 Months)

| Week | Title | Target Keyword | Type |
|------|-------|---------------|------|
| 1 | "10 Unique Birthday Gift Ideas That Will Make Them Cry" | unique birthday gift | Gift Guide |
| 2 | "How to Write the Perfect Wedding Toast (Without Actually Writing)" | wedding toast ideas | How-To |
| 3 | "Personalized Gifts for Dad: Beyond Another Tie" | personalized gifts for dad | Gift Guide |
| 4 | "Last-Minute Gift Ideas That Don't Look Last-Minute" | last minute gift ideas | Gift Guide |
| 5 | "What Makes a Personalized Song Special" | personalized song | Thought Leadership |
| 6 | "Anniversary Gift Ideas by Year" | anniversary gift ideas | Gift Guide |
| 7 | "How AI Creates Music: Behind YourBanger" | ai song generator | Educational |
| 8 | "Retirement Party Ideas: Make Them Feel Like a Legend" | retirement party ideas | How-To |
| 9 | "50th Birthday Ideas That Will Go Down in History" | 50th birthday ideas | Gift Guide |
| 10 | "Graduation Gift Ideas They'll Actually Remember" | graduation gift ideas | Gift Guide |
| 11 | "Best Friend Gift Ideas: For Inside Jokes Only You Understand" | best friend gift | Gift Guide |
| 12 | "How to Personalize a Gift (Without Being Cheesy)" | how to personalize gift | How-To |

### 5.3 Landing Pages to Create

**Occasion-Specific Pages:**
- `/birthday-songs` - "Personalized Birthday Songs"
- `/wedding-songs` - "Custom Wedding & Anniversary Songs"
- `/retirement-songs` - "Retirement & Farewell Songs"
- `/funny-songs` - "Funny Personalized Songs"

Each page should:
- Target specific keywords
- Include relevant examples
- Have unique meta descriptions
- Link to the examples page
- Include strong CTAs

---

## 6. Off-Page SEO

### 6.1 Link Building Opportunities
- **Gift guide roundups** - Pitch to lifestyle blogs
- **Wedding blogs** - Guest posts about unique wedding toast ideas
- **Product Hunt** - Launch for backlinks + traffic
- **Podcast appearances** - AI/tech podcasts, gift/lifestyle podcasts
- **HARO (Help a Reporter Out)** - Respond to journalist queries

### 6.2 Social Signals
- Share customer reactions on social media
- Create short-form video content (TikTok/Reels) of song reactions
- Encourage customers to share their songs

### 6.3 Local SEO (Optional)
If targeting specific regions, create location pages:
- "Personalized Songs [City]"

---

## 7. Analytics & Tracking Setup

### 7.1 Google Analytics 4
Update `src/config.yaml`:
```yaml
analytics:
  vendors:
    googleAnalytics:
      id: "G-XXXXXXXXXX"  # Add your GA4 ID
```

### 7.2 Google Search Console
- Already verified ✅
- Submit sitemap: `https://yourbanger.com/sitemap-index.xml`
- Monitor: Search performance, coverage, Core Web Vitals

### 7.3 Conversion Tracking
Track these events:
- CTA clicks (to app.yourbanger.com)
- Audio plays on examples page
- FAQ expansions
- Time on site / pages per session

---

## 8. Implementation Priority

### Phase 1: Quick Wins (Week 1-2) ✅ COMPLETED
- [x] Update `robots.txt` with sitemap
- [x] Add canonical URLs to all pages (handled by Metadata.astro)
- [x] Implement Organization Schema (in StructuredData.astro)
- [ ] Set up Google Analytics (requires GA4 ID from user)
- [ ] Submit sitemap to Search Console (manual step)
- [x] Optimize meta titles/descriptions

### Phase 2: Structured Data (Week 3-4) ✅ COMPLETED
- [x] Add FAQPage Schema to FAQ page
- [x] Add Product Schema to pricing page
- [ ] Create unique OG images per page (design task)
- [ ] Add alt text to all images (ongoing)

### Phase 3: Content (Month 2-3) ✅ COMPLETED
- [x] Enable blog in config
- [x] Publish first 2 blog posts (unique-birthday-gift-ideas.md, last-minute-gift-ideas.md)
- [x] Create `/birthday-songs` landing page
- [x] Create `/wedding-songs` landing page

### Phase 4: Growth (Month 3+)
- [ ] Publish 2 blog posts per week
- [ ] Begin link building outreach
- [ ] Create remaining landing pages (/retirement-songs, /funny-songs)
- [ ] A/B test meta descriptions

---

## 9. KPIs & Goals

### 3-Month Goals
- Organic traffic: 500 → 2,000 monthly visitors
- Keyword rankings: Top 20 for 5 primary keywords
- Indexed pages: 10 → 25+
- Domain authority: Establish baseline

### 6-Month Goals
- Organic traffic: 5,000+ monthly visitors
- Keyword rankings: Top 10 for 3 primary keywords
- Featured snippets: Capture 2+ (FAQ, How-to)
- Backlinks: 20+ referring domains

### 12-Month Goals
- Organic traffic: 15,000+ monthly visitors
- Keyword rankings: Top 5 for "personalized song" cluster
- Blog traffic: 40% of organic sessions
- Conversion rate: 3%+ from organic

---

## 10. Tools Recommended

| Tool | Purpose | Cost |
|------|---------|------|
| Google Search Console | Monitoring | Free |
| Google Analytics 4 | Analytics | Free |
| Ahrefs / SEMrush | Keyword research, backlinks | $99+/mo |
| Screaming Frog | Technical audits | Free tier |
| PageSpeed Insights | Performance | Free |
| Schema Markup Validator | Structured data testing | Free |

---

## Next Steps

1. **Immediate:** I can implement Phase 1 technical fixes (robots.txt, schemas, canonical URLs)
2. **This week:** Set up analytics and verify Search Console
3. **Next week:** Start first blog posts

Would you like me to implement any of these changes now?
