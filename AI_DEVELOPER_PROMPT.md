# AI Developer Prompt: YourBanger Marketing Site

## Your Mission

Build a high-converting marketing website for **YourBanger** (yourbanger.com) using the AstroWind template. This site will drive user acquisition for the web app at app.yourbanger.com.

---

## Project Context

**What is YourBanger?**  
An AI-powered platform that creates personalized songs in minutes. Users share a story, memory, or inside joke, and get a custom song with AI-generated lyrics and professional music production.

**Business Model:**  
$10 for 5 songs ($2 per song). One-time purchase, no subscription.

**Target Audience:**  
People looking for unique, personalized gifts for birthdays, weddings, anniversaries, or just to make someone feel special.

---

## Your Task

You have access to the **AstroWind template** (already installed). Your job is to:

1. **Customize the template** with YourBanger branding
2. **Build the following pages:**
   - Homepage (hero, how it works, samples, testimonials, pricing preview)
   - Examples page (showcase variety of songs with audio players)
   - Pricing page (simple one-tier pricing: $14 for 10 songs)
   - FAQ page (answer common questions)
   - Legal pages (Privacy, Terms, Refund Policy - templates are fine)

3. **Optimize for conversion:**
   - All CTAs should point to `https://app.yourbanger.com/auth?tab=signup`
   - Prominent "Get Started" buttons throughout
   - Mobile-first design
   - Fast loading times

4. **Key features to implement:**
   - Audio player component for sample songs (3-5 examples)
   - Text-message-style testimonials (chat bubble UI)
   - Clean, modern design with purple/pink gradient theme
   - Responsive across all devices

---

## Brand Guidelines

**Name:** YourBanger  
**Tone:** Fun, casual, slightly irreverent, emotionally resonant  
**Colors:** Purple/pink gradient (match the app's design - use purple-600, pink-600 as base)  
**Vibe:** Modern, approachable, removes friction ("No musical talent needed")

**Sample Headlines:**
- "Turn Your Story Into a Song"
- "Make Someone a Legend"
- "Personalized AI Songs in Minutes"

---

## Critical Content

### Pricing
**$14 for 10 songs** ($1.40 per song)
- No subscription
- Credits don't expire
- Includes: AI lyrics, professional production, shareable links, downloads

### How It Works (3 Steps)
1. **Tell Your Story** - Share details about the person or moment
2. **We Make Magic** - AI creates lyrics & music (~2 min)
3. **Share & Celebrate** - Get a custom shareable link

### Music Styles Available
Rock, Pop, Country, Rap, R&B, Ballad, Indie, Electronic, Jazz

### Use Cases
- 🎂 Birthday surprises
- 💍 Wedding toasts  
- 😂 Inside jokes
- 🎓 Graduations
- 💝 Just because

### Real Customer Reactions (Testimonials)
Display as chat bubbles:
- "omg I can't stop laughing 😂" - Sarah
- "best gift I've ever received" - Mike
- "played it 10 times already" - Jessica
- "my wife cried (happy tears!)" - Tom
- "way better than a hallmark card" - Lisa
- "everyone at the party wanted to know how I made it" - Marcus

### FAQ Content
**Q: How long does it take?**  
A: ~2 minutes to create, ~1 minute to generate

**Q: Can I edit the lyrics?**  
A: Yep, full control before we make it

**Q: What if they hate it?**  
A: Then they have no sense of humor (but yes, you can remake it)

**Q: What music styles?**  
A: Rock, pop, country, rap, R&B... we got you

**Q: Can I share it?**  
A: Yep, every song gets a custom link

**Q: Do I need musical talent?**  
A: Nope. That's literally the whole point

---

## Technical Requirements

### All CTAs Must Link To:
- **Primary CTA (Get Started):** `https://app.yourbanger.com/auth?tab=signup`
- **Sign In:** `https://app.yourbanger.com/auth`
- **Dashboard (for logged-in users):** `https://app.yourbanger.com/dashboard`

### Site Configuration
- Domain: `https://yourbanger.com`
- SEO optimized for keywords: "personalized songs", "AI-generated music", "custom song gift"
- Fast loading (<3 seconds)
- Mobile responsive
- Accessible (WCAG AA)

### Components to Build/Customize

**Audio Player Component:**
- Play/pause functionality
- Progress bar
- Volume control
- Clean, modern UI
- Mobile-friendly

**Testimonial Chat Component:**
- Text message bubble style (like iMessage)
- Alternating left/right alignment
- Sender names below bubbles
- Modern chat UI aesthetic

**Example Card Component:**
- Song title
- Occasion tag (Birthday, Wedding, etc.)
- Music style tag (Rock, Pop, etc.)
- Audio player
- Brief context text
- "Create Yours" CTA button

---

## File Structure to Create

```
src/pages/
├── index.astro              (Homepage)
├── examples.astro           (Examples showcase)
├── pricing.astro            (Pricing page)
├── faq.astro               (FAQ page)
├── privacy.astro           (Privacy policy)
├── terms.astro             (Terms of service)
└── refund-policy.astro     (Refund policy)

src/components/
├── AudioPlayer.astro        (Audio player for samples)
├── TestimonialChat.astro   (Chat bubble testimonials)
├── ExampleCard.astro       (Song example cards)
└── CTAButton.astro         (Reusable CTA to app)

public/
├── audio/                  (Sample song MP3 files)
├── og-image.jpg           (Social preview image)
└── favicon.svg            (Brand favicon)
```

---

## Design Specifications

### Typography
- Headings: Bold, modern sans-serif (e.g., Inter, Poppins)
- Body: Clean, readable (16px base)
- CTAs: Prominent, easy to tap (min 44px height)

### Color Palette
- Primary: Purple-600 (#9333ea)
- Secondary: Pink-600 (#db2777)
- Accent: Gradient purple → pink
- Background: White/light gray
- Text: Dark gray (#1f2937)

### Spacing
- Generous whitespace
- Clear visual hierarchy
- Mobile-first breakpoints

### Buttons
- Primary CTA: Gradient purple/pink, white text, rounded-lg
- Secondary: Outline style
- Hover states with subtle animations

---

## Sample Audio Files Needed

Create placeholders or use sample audio for:
1. **Birthday Rock Song** - "Sarah's Legendary 30th"
2. **Wedding Ballad** - "Forever Starts Today"
3. **Inside Joke Country** - "Remember That Time?"
4. **Retirement Pop** - "The Office Legend"
5. **Anniversary R&B** - "Ten Years of You"

(User will replace with real examples later)

---

## SEO Requirements

### Homepage Meta Tags
```html
<title>YourBanger - Create Personalized AI Songs in Minutes</title>
<meta name="description" content="Turn your story into a custom song. AI-powered personalized music for birthdays, weddings, and special moments. $14 for 10 songs. No musical talent required.">
```

### Open Graph Tags
```html
<meta property="og:title" content="YourBanger - Turn Your Story Into a Song">
<meta property="og:description" content="Create personalized AI-generated songs in minutes. Perfect for birthdays, weddings, and making someone feel special.">
<meta property="og:image" content="https://yourbanger.com/og-image.jpg">
<meta property="og:url" content="https://yourbanger.com">
```

### Structured Data (JSON-LD)
Add schema.org markup for:
- Organization
- Product (pricing info)
- FAQ page

---

## Conversion Optimization Checklist

- [ ] Hero CTA above the fold on all devices
- [ ] Multiple CTAs throughout homepage (every 1-2 scrolls)
- [ ] Social proof near CTAs (testimonials)
- [ ] Audio samples easy to play (one-click)
- [ ] Mobile buttons large enough (44px min)
- [ ] Fast page loads (<3s)
- [ ] Pricing clearly visible
- [ ] Trust signals (testimonials, sample quality)
- [ ] Clear value proposition in hero
- [ ] FAQ addresses objections

---

## Development Workflow

1. **Setup & Config**
   - Fix npm warnings (remove shamefully-hoist from .npmrc)
   - Run `npm audit fix` for vulnerabilities
   - Update `astro.config.mjs` with site URL
   - Configure site metadata

2. **Build Pages (In Order)**
   - Homepage (most important, focus here)
   - Examples page
   - Pricing page
   - FAQ page
   - Legal pages (use templates)

3. **Test & Optimize**
   - Mobile responsive testing
   - Audio player testing across browsers
   - CTA click-through testing
   - Load time optimization
   - Cross-browser compatibility

4. **Deploy**
   - Deploy to Vercel or Netlify
   - Configure DNS for yourbanger.com
   - Set up SSL
   - Submit sitemap to search engines

---

## Success Criteria

Your site is successful if:
✅ Loads in <3 seconds on mobile  
✅ All CTAs link correctly to app.yourbanger.com  
✅ Audio players work on all major browsers  
✅ Mobile responsive on all pages  
✅ Clear value proposition immediately visible  
✅ Conversion-optimized design (CTAs prominent)  
✅ Professional, modern aesthetic  
✅ SEO optimized (meta tags, headings, etc.)

---

## Questions to Ask If Unclear

1. Do you have real sample songs, or should I create placeholders?
2. Do you have a logo/favicon, or should I create one?
3. Should I set up analytics tracking (Google Analytics)?
4. Any specific brand colors beyond purple/pink?
5. Do you want a blog section for content marketing?

---

## Resources Available

- **Full guide:** See `MARKETING_SITE_GUIDE.md` for detailed content specifications
- **App reference:** Check app.yourbanger.com for design consistency
- **Template docs:** AstroWind documentation for component usage

---

## Final Notes

- **Focus on conversion** - This site exists to drive signups
- **Mobile-first** - Most traffic will be mobile
- **Speed matters** - Every 100ms delay costs conversions
- **Social proof** - Use testimonials liberally
- **Keep it simple** - Don't overcomplicate, just get users to click "Get Started"

Good luck! Build something that makes people want to create their own legend. 🎵
