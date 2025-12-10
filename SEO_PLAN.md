# YourBanger.com SEO Plan

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
- ~~No structured data (Schema.org)~~ ✅ FIXED: Article, BreadcrumbList, Service, FAQPage schemas added
- ~~Blog disabled but infrastructure exists~~ ✅ Blog enabled with 41 posts
- ~~No canonical URLs explicitly set~~ ✅ FIXED: Canonical URLs now always set on blog posts
- Missing page-specific OG images
- ~~No Google Analytics configured~~ ✅ GA4 configured (G-9HMNB359RY)

### ✅ Recently Implemented (Dec 2024)
- Article schema on all blog posts (headline, datePublished, dateModified, author, publisher)
- BreadcrumbList schema on blog posts, category pages, tag pages, and blog list
- Service schema on landing pages (birthday-songs, wedding-songs, etc.)
- FAQPage schema on FAQ page
- Proper meta descriptions on blog list, category, and tag pages
- `imageAlt` field support for blog post featured images
- Canonical URLs always set on blog posts

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
**Current Title:** `YourBanger.com - Turn Your Story Into a Song`  
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
  "name": "YourBanger.com Song Credits",
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

### 5.1 Blog Status ✅ ENABLED
Blog infrastructure enabled and first posts published.

**Blog Categories:**
1. **Gift Guides** - "Best Personalized Gifts for [Occasion]"
2. **Use Cases** - "How to Make the Perfect [Event] Song"
3. **Behind the Scenes** - "How AI Creates Your Song"
4. **Seasonal** - Holiday and event-specific content

### 5.2 Full Content Calendar (DataForSEO Keyword Research - Dec 2024)

#### HIGH PRIORITY - Quick Wins (Low Difficulty, High Volume)

| Priority | Title | Target Keyword | Volume | KD | Status |
|----------|-------|----------------|--------|-----|--------|
| 🔴 | "10 Unique Birthday Gift Ideas That Will Make Them Cry" | unique birthday gift | 6,600 | - | ✅ Published |
| 🔴 | "Last-Minute Gift Ideas That Don't Look Last-Minute" | last minute gift ideas | 14,800 | - | ✅ Published |
| 🔴 | "Personalized Happy Birthday Songs: The Gift They'll Never Forget" | personalized happy birthday song | 1,600 | 5 | ✅ Published |
| 🔴 | "10 Gifts for the Woman Who Has Everything" | 10 gifts woman who has everything | 9,900 | 2 | ✅ Published |
| 🔴 | "Gift Ideas for Female Friends They'll Actually Love" | gift ideas for female friend | 9,900 | 6 | ✅ Published |
| 🔴 | "Personalized Gift Ideas: The Ultimate Guide" | personalized gift | 90,500 | 3 | ✅ Published |
| 🔴 | "Unique Christmas Gifts for Adults Who Have Everything" | unique christmas gifts adults | 210 | 1 | ✅ Published |

#### WEEK 1-4: DECEMBER (Christmas Rush)

| Week | Title | Target Keyword | Volume | Type | Status |
|------|-------|----------------|--------|------|--------|
| 1 | "Personalized Christmas Gifts That Actually Mean Something" | christmas personalized gift | 9,900 | Gift Guide | ✅ Published |
| 1 | "10 Gifts for Someone Who Has Everything" | gifts for someone who has everything | 2,400 | Gift Guide | ✅ Published |
| 2 | "Last-Minute Christmas Gift Ideas (That Don't Look Last-Minute)" | last minute christmas gifts | 12,100+ | Gift Guide | 📝 Next |
| 2 | "Personalized Gift Ideas for Men: Beyond the Usual" | personalized gift ideas for men | 9,900 | Gift Guide | ✅ Published |
| 3 | "Unique Gift Ideas for Him This Holiday" | unique gift ideas for him | 8,100 | Gift Guide | ✅ Published |
| 3 | "Personalized Gift Wrapping Ideas to Make It Extra Special" | personalized gift wrapping | 8,100 | How-To |
| 4 | "How to Write a New Year's Toast (Without the Stress)" | new years toast | - | How-To |

#### WEEK 5-8: JANUARY (Valentine's Prep + New Year)

| Week | Title | Target Keyword | Volume | Type |
|------|-------|----------------|--------|------|
| 5 | "Unique Valentine's Day Gift Ideas for Her" | valentines gift for her | 40,500 | Gift Guide |
| 5 | "How to Make a Personalized Song for Your Partner" | personalized song for wife/husband | 480+ | How-To |
| 6 | "Anniversary Gift Ideas by Year (1st to 50th)" | anniversary gift ideas | 6,600 | Gift Guide |
| 6 | "The Most Romantic Gift Ideas That Aren't Flowers" | romantic gift ideas | 5,400 | Gift Guide |
| 7 | "Personalized Gifts for Him That He'll Actually Use" | personalized gifts for him | 8,100 | Gift Guide |
| 7 | "Creative Ways to Say 'I Love You' (Beyond Words)" | creative i love you | - | Thought Leadership |
| 8 | "Valentine's Day Gift Ideas for Long-Distance Relationships" | long distance valentines | 3,600 | Gift Guide |

#### WEEK 9-12: FEBRUARY-MARCH (Valentine's + Mother's Day Prep)

| Week | Title | Target Keyword | Volume | Type |
|------|-------|----------------|--------|------|
| 9 | "Personalized Mother's Day Gifts She'll Treasure Forever" | personalized mother's day gift | 9,900 | Gift Guide |
| 9 | "Gift Ideas for Mom Who Has Everything" | gift for mom who has everything | 6,600 | Gift Guide |
| 10 | "How to Write the Perfect Wedding Toast (Song Edition)" | wedding toast ideas | 6,600 | How-To |
| 10 | "Best Friend Gift Ideas: For Inside Jokes Only You Get" | best friend gift ideas | 5,400 | Gift Guide |
| 11 | "Retirement Gift Ideas That Honor Their Legacy" | retirement gift ideas | 4,400 | Gift Guide |
| 11 | "Personalized Gifts for Mom: Beyond Flowers and Chocolates" | personalized gift for mum | 12,100 | Gift Guide |
| 12 | "Graduation Gift Ideas They'll Actually Remember" | graduation gift ideas | 4,400 | Gift Guide |

#### WEEK 13-16: APRIL-MAY (Mother's Day + Father's Day Prep)

| Week | Title | Target Keyword | Volume | Type |
|------|-------|----------------|--------|------|
| 13 | "Personalized Father's Day Gifts That Aren't Another Tie" | personalized gift for father's day | 14,800 | Gift Guide |
| 13 | "50th Birthday Ideas That Will Go Down in History" | 50th birthday ideas | 3,600 | Gift Guide |
| 14 | "What Makes a Personalized Gift Special" | personalized gift meaning | - | Thought Leadership |
| 14 | "Personalized Gifts for Dad: Show Him You Get It" | personalized gifts for dad | 8,100 | Gift Guide |
| 15 | "How AI Creates Music: Behind YourBanger's Technology" | ai song generator | 60,500 | Educational |
| 15 | "Creative Wedding Gift Ideas the Couple Will Love" | creative wedding gift | 2,900 | Gift Guide |
| 16 | "Useful Gifts for Men They'll Actually Appreciate" | useful gifts for men | 9,900 | Gift Guide |

#### WEEK 17-20: JUNE-JULY (Father's Day + Summer Weddings)

| Week | Title | Target Keyword | Volume | Type |
|------|-------|----------------|--------|------|
| 17 | "First Dance Songs: Why Your Story Deserves Original Music" | first dance songs | 4,400 | How-To |
| 17 | "Personalized Wedding Songs for Every Moment" | personalized wedding song | 140 | Use Case |
| 18 | "Summer Birthday Party Ideas Worth Celebrating" | summer birthday ideas | 2,900 | Gift Guide |
| 18 | "Gift Ideas for the Man Who Has Everything" | gift man who has everything | 5,400 | Gift Guide |
| 19 | "How to Give a Speech at a Wedding (Without Panicking)" | wedding speech tips | 1,900 | How-To |
| 19 | "Personalized Gifts for Couples: Beyond the Photo Frame" | personalized gifts for couples | 3,600 | Gift Guide |
| 20 | "Funny Retirement Songs and Speech Ideas" | funny retirement ideas | 1,600 | How-To |

#### EVERGREEN CONTENT (Publish Anytime)

| Title | Target Keyword | Volume | Type |
|-------|----------------|--------|------|
| "What to Write in a Birthday Card (When You're Stuck)" | what to write in birthday card | 14,800 | How-To |
| "Sentimental Gift Ideas That Create Real Emotions" | sentimental gift ideas | 2,900 | Gift Guide |
| "Gifts That Keep Giving: Experiential vs. Physical" | experiential gifts | 1,600 | Thought Leadership |
| "How to Surprise Someone Who Hates Surprises" | surprise gift ideas | 1,900 | How-To |
| "Personalized Songs for Every Occasion: A Complete Guide" | personalized songs | 720 | Pillar Page |
| "The Art of the Inside Joke: Why Personal Gifts Win" | meaningful gift ideas | 1,900 | Thought Leadership |

### 5.3 Landing Pages

**Status:**
- ✅ `/birthday-songs` - Personalized Birthday Songs (LIVE)
- ✅ `/wedding-songs` - Custom Wedding & Anniversary Songs (LIVE)
- 📝 `/retirement-songs` - Retirement & Farewell Songs (TO CREATE)
- 📝 `/funny-songs` - Funny Personalized Songs (TO CREATE)
- 📝 `/anniversary-songs` - Anniversary Song Ideas (TO CREATE)
- 📝 `/fathers-day-songs` - Father's Day Songs (SEASONAL - May)
- 📝 `/mothers-day-songs` - Mother's Day Songs (SEASONAL - April)

### 5.4 Content Production Guidelines

**Target Output:** 2-3 posts per week minimum for aggressive growth

**Post Structure:**
1. Hook/Problem statement (SEO-optimized H1)
2. Quick solution preview (answer featured snippet queries)
3. Detailed solutions (H2 sections for each idea)
4. YourBanger.com integration (natural CTA placement)
5. Related internal links (other posts + landing pages)

**Word Count Targets:**
- Gift Guides: 1,500-2,500 words
- How-To Posts: 1,200-2,000 words
- Thought Leadership: 800-1,500 words

**Internal Linking Strategy:**
- Every post links to at least 2 landing pages
- Every post links to /examples and /pricing
- Create topic clusters around main keywords

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

### 7.1 Google Analytics 4 ✅ CONFIGURED
```yaml
analytics:
  vendors:
    googleAnalytics:
      id: "G-9HMNB359RY"  # Active
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
