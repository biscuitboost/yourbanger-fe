# YourBanger.com Marketing Site Development Guide

## Project Overview

**Domain:** yourbanger.com  
**App Domain:** app.yourbanger.com  
**Tech Stack:** Astro (AstroWind Template)  
**Purpose:** Marketing site to drive conversions to the web app

---

## Brand Identity

### Company Name
**YourBanger.com**

### Value Proposition
Create personalized AI-generated songs in minutes. Turn inside jokes, memories, and special moments into custom songs that make people laugh, cry, and feel special.

### Target Audience
- People looking for unique, personalized gifts
- Users celebrating birthdays, anniversaries, weddings
- Anyone wanting to create memorable, shareable content
- People with inside jokes or special memories to immortalize

### Tone of Voice
- Casual, fun, and approachable
- Slightly irreverent ("What if they hate it? Then they have no sense of humor")
- Emphasize emotional connection and personalization
- Remove friction ("No musical talent needed. That's literally the whole point")

---

## Site Structure & Pages

### 1. Homepage (`/`)

**Hero Section**
- Headline: "Turn Your Story Into a Song" or "Make Someone a Legend"
- Subheadline: "Personalized AI-generated songs in minutes. No musical talent required."
- CTA Button: "Create Your Song" → `https://app.yourbanger.com/auth?tab=signup`
- Visual: Audio player with sample song or hero image

**How It Works (3 Steps)**
1. **Tell Your Story** - Share details about the person, memory, or inside joke
2. **We Make Magic** - AI creates personalized lyrics and melody (~2 minutes)
3. **Share & Celebrate** - Get a custom link to share your one-of-a-kind song

**Use Cases**
- 🎂 Birthday surprises
- 💍 Wedding toasts
- 😂 Inside jokes
- 🎓 Graduations
- 💝 Just because

**Sample Songs Section**
- Embed 3-5 audio players with different styles
- Show variety: Rock, Pop, Country, Rap, R&B
- Include brief context for each ("Made for Sarah's 30th birthday")

**Real Reactions (Testimonials - Text Message Style)**
Display as chat bubbles:
- "omg I can't stop laughing 😂" - Sarah
- "best gift I've ever received" - Mike
- "played it 10 times already" - Jessica
- "my wife cried (happy tears!)" - Tom
- "way better than a hallmark card" - Lisa
- "everyone at the party wanted to know how I made it" - Marcus

**Pricing Preview**
- $14 for 10 songs
- That's $1.40 per song
- CTA: "Get Started" → `https://app.yourbanger.com/auth?tab=signup`

**Final CTA**
- "Ready to make someone a legend?"
- Button: "Make My First Song 🎵" → `https://app.yourbanger.com/new-song`

---

### 2. Examples Page (`/examples`)

**Purpose:** Show variety and quality of AI-generated songs

**Content Structure:**
- Filter by occasion: All | Birthday | Wedding | Inside Joke | Celebration
- Filter by style: All | Rock | Pop | Country | Rap | R&B | Ballad

**Example Cards (6-12 songs):**
Each card shows:
- Song title
- Occasion tag
- Music style tag
- Audio player
- Brief context (1-2 sentences)
- "Create Yours" CTA

**Sample Examples:**
1. **"Sarah's Legendary 30th"** - Birthday Rock Song
   - "An epic rock anthem about Sarah's terrible karaoke and legendary weekend adventures"

2. **"The Office Legend"** - Retirement Ballad
   - "A heartfelt goodbye song for Dave who brought donuts every Friday for 20 years"

3. **"Remember That Time?"** - Country Inside Joke
   - "A country tune about that camping trip that shall not be spoken of"

**Bottom CTA:** "Your Story Deserves Its Own Song" → App

---

### 3. Pricing Page (`/pricing`)

**Single Tier Pricing (Keep It Simple)**

**Main Package:**
- **$14 for 10 songs**
- $1.40 per song
- Each song includes:
  - ✓ AI-generated lyrics based on your story
  - ✓ Professional-quality music production
  - ✓ Choice of music style (Rock, Pop, Country, Rap, R&B, etc.)
  - ✓ Full editing control before generation
  - ✓ Shareable link for each song
  - ✓ Unlimited replays
  - ✓ Download included

**What You Get:**
- ~2 minutes to create
- ~1 minute to generate
- Lifetime access to your songs
- Custom shareable links
- No subscription, just credits

**Comparison Section (Optional):**
| Traditional | YourBanger.com |
|------------|-----------|
| Hire musician: $100-500 | $1.40 per song |
| Wait 1-2 weeks | Ready in 3 minutes |
| Limited revisions | Full control |
| Generic greeting card: $5 | Personalized forever |

**FAQ on Pricing:**
- "Do credits expire?" - No, use them whenever
- "Can I buy more?" - Yes, anytime
- "Refund policy?" - If you're not happy, we'll make it right

**CTA:** "Get Started with 10 Songs" → App

---

### 4. FAQ Page (`/faq`)

**Categories:**

**Getting Started**
- **How long does it take?**  
  ~2 minutes to create, ~1 minute to generate. Total time: about 3 minutes from start to shareable song.

- **Do I need musical talent?**  
  Nope. That's literally the whole point. Just tell us the story, we handle the music.

- **How does it work?**  
  You share details about the person or moment, our AI writes personalized lyrics, sets them to music in your chosen style, and creates a professional-quality song.

**Customization**
- **Can I edit the lyrics?**  
  Yep, full control before we make it. Edit, revise, or regenerate until it's perfect.

- **What music styles are available?**  
  Rock, pop, country, rap, R&B, ballad, indie, electronic, jazz... we got you.

- **Can I choose the vibe?**  
  Absolutely. Pick from upbeat, emotional, funny, romantic, epic, and more.

**Sharing & Quality**
- **Can I share my song?**  
  Yep, every song gets a custom link. Share via text, social media, email, whatever.

- **Can I download the song?**  
  Yes, full download included with every song.

- **What format are songs?**  
  High-quality MP3, playable anywhere.

**Issues & Support**
- **What if they hate it?**  
  Then they have no sense of humor (but yes, you can remake it or edit it).

- **What if I'm not happy?**  
  We'll make it right. Remake it, get a refund, we're flexible.

- **How do I get help?**  
  Contact us at support@yourbanger.com or through the app.

**Technical**
- **Do songs expire?**  
  Nope. Lifetime access to every song you create.

- **How many revisions can I make?**  
  Unlimited before generation. After generation, you can remake with the same credit.

- **Is my data private?**  
  Yes. See our Privacy Policy for details.

**CTA:** "Still have questions? Just try it" → App

---

### 5. About Page (`/about`) [Optional]

**The Story**
- Why we built YourBanger.com
- The problem: Greeting cards are boring, hiring musicians is expensive
- The solution: AI-powered personalization at scale
- The mission: Make everyone feel like a legend

**How It Works (Technical Overview)**
- AI analyzes your story
- Generates personalized, contextual lyrics
- Professional music production
- Quality assurance

**CTA:** "See what we can create for you" → App

---

### 6. Legal Pages

**Privacy Policy** (`/privacy`)
- Standard privacy policy
- Data collection practices
- How user data is used
- GDPR compliance

**Terms of Service** (`/terms`)
- Usage terms
- Content ownership (user owns their created songs)
- Prohibited uses
- Refund policy

**Refund Policy** (`/refund-policy`)
- 30-day satisfaction guarantee
- Process for requesting refunds
- Contact information

---

## Technical Implementation

### Navigation Structure

**Header Navigation:**
- Logo (links to homepage)
- Examples
- Pricing  
- FAQ
- About (optional)
- **CTA Button:** "Get Started" → `https://app.yourbanger.com/auth?tab=signup`
- **Secondary CTA:** "Sign In" → `https://app.yourbanger.com/auth`

**Footer Navigation:**
- Product: Examples, Pricing, FAQ
- Company: About, Blog (future)
- Legal: Privacy Policy, Terms of Service, Refund Policy
- Social: Twitter, Instagram, TikTok (if applicable)
- Contact: support@yourbanger.com

### Key CTAs Throughout Site

**Primary Actions:**
1. "Create Your Song" / "Get Started" → `https://app.yourbanger.com/auth?tab=signup`
2. "Make My First Song" → `https://app.yourbanger.com/new-song`
3. "Try It Free" (if offering trial) → App signup

**Secondary Actions:**
1. "Sign In" → `https://app.yourbanger.com/auth`
2. "See Examples" → `/examples`
3. "View Pricing" → `/pricing`

### Template Updates Needed

**1. Configuration Files**
- `astro.config.mjs`: Update site URL to `https://yourbanger.com`
- `src/config.yaml` or similar: Update site metadata
- Update social preview images
- Configure SEO defaults

**2. Component Customizations**
- Header: Add CTAs pointing to app subdomain
- Footer: Update links and social media
- Hero component: Customize for YourBanger.com brand
- Testimonial component: Text message style UI
- Audio player component: For sample songs

**3. Styling**
- Brand colors: Purple/Pink gradient theme (adjust to match app)
- Typography: Modern, approachable fonts
- Consistent with app.yourbanger.com design system

**4. Assets to Create**
- Logo (SVG)
- Favicon
- Social preview images (Open Graph)
- Sample song audio files (3-5 examples)
- Hero image or video
- Icon set (if not using Lucide)

---

## Content Assets Needed

### Audio Files
- 3-5 sample songs demonstrating variety
- Different genres and occasions
- High-quality MP3 format
- Hosted on CDN or Astro public folder

### Images
- Hero image: Happy person listening/celebrating
- Use case illustrations or photos
- Customer testimonial photos (if available)
- Social proof logos (if any media coverage)

### Copy Variations
Provide 2-3 variations of:
- Hero headlines
- CTA button text
- Value propositions

---

## SEO & Marketing Requirements

### Meta Tags (Each Page)
```html
<title>YourBanger.com - AI-Powered Personalized Songs</title>
<meta name="description" content="Create personalized AI-generated songs in minutes. Turn memories into music. No talent required. $14 for 10 songs.">
<meta property="og:title" content="YourBanger.com - Turn Your Story Into a Song">
<meta property="og:description" content="...">
<meta property="og:image" content="https://yourbanger.com/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### Target Keywords
- Personalized songs
- AI-generated music
- Custom song gift
- Birthday song maker
- Personalized gift ideas

### Analytics
- Google Analytics or Plausible
- Conversion tracking for CTA clicks
- Heatmap tools (Hotjar) for optimization

---

## Integration with App

### Links from Marketing Site → App
All CTAs should point to:
- Signup: `https://app.yourbanger.com/auth?tab=signup`
- Login: `https://app.yourbanger.com/auth`
- Direct to creation: `https://app.yourbanger.com/new-song`
- Dashboard: `https://app.yourbanger.com/dashboard`

### Consistent Branding
- Use same color scheme
- Match button styles
- Consistent typography
- Shared design system components (if possible)

### Cross-Domain Considerations
- Ensure proper CORS configuration
- Cookie/session management (if needed for tracking)
- UTM parameters for campaign tracking

---

## Launch Checklist

### Pre-Launch
- [ ] All pages content complete
- [ ] Audio samples embedded and working
- [ ] All CTAs link correctly to app.yourbanger.com
- [ ] Mobile responsive on all pages
- [ ] Fast load times (<3s)
- [ ] SEO meta tags on all pages
- [ ] Legal pages complete
- [ ] Contact email set up (support@yourbanger.com)

### Testing
- [ ] Test all CTAs (click-through to app)
- [ ] Test on mobile devices
- [ ] Test audio players on different browsers
- [ ] Verify analytics tracking
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

### Deployment
- [ ] Deploy to production (Vercel/Netlify recommended)
- [ ] Configure DNS for yourbanger.com
- [ ] SSL certificate active
- [ ] Redirect www.yourbanger.com → yourbanger.com
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring/uptime checks

### Post-Launch
- [ ] Monitor analytics for conversion rates
- [ ] A/B test different CTA copy
- [ ] Collect real customer testimonials
- [ ] Replace sample songs with real customer examples
- [ ] Set up email capture for marketing

---

## Files to Create/Modify in AstroWind

### Create New Files
```
src/pages/
  ├── index.astro (Homepage)
  ├── examples.astro
  ├── pricing.astro
  ├── faq.astro
  ├── about.astro (optional)
  ├── privacy.astro
  ├── terms.astro
  └── refund-policy.astro

src/components/
  ├── Hero.astro (customize)
  ├── AudioPlayer.astro (new)
  ├── TestimonialChat.astro (new - text message style)
  ├── PricingCard.astro (customize)
  └── ExampleCard.astro (new)

public/
  ├── audio/ (sample songs)
  ├── og-image.jpg
  └── favicon.svg
```

### Modify Existing Files
- `src/layouts/Layout.astro` - Update header/footer
- `src/config.yaml` - Site configuration
- `astro.config.mjs` - Site URL and settings
- `src/components/Header.astro` - Add app CTAs
- `src/components/Footer.astro` - Update links

---

## Success Metrics

### Key Performance Indicators
- Click-through rate on "Get Started" CTA
- Time on site
- Pages per session
- Bounce rate (target <40%)
- Conversion rate (visitors → app signups)

### Optimization Opportunities
- A/B test hero headlines
- Test CTA button colors/text
- Optimize audio player placement
- Test social proof placement
- Experiment with pricing page layout

---

## Contact & Support

**Technical Issues:** Development team  
**Content Questions:** Marketing team  
**Brand Assets:** Design team  

---

## Notes for AI Developer

- Focus on conversion optimization - every page should drive users to app
- Mobile-first design (70%+ traffic likely mobile)
- Fast loading is critical for conversion
- Make audio samples easy to play and engaging
- Keep copy concise and benefit-focused
- Use social proof liberally (testimonials)
- Make CTAs prominent and action-oriented
- Maintain consistent brand voice (fun, approachable, slightly irreverent)
