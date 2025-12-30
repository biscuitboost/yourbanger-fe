# Internal Linking Strategy - Linking Map

## Hub Page: /ai-song-generator

### OUTBOUND LINKS (Current + Required)
**FROM /ai-song-generator, link TO:**
- `/create` (3+ times) ✅ [Current: 2 links]
- `/examples` (2 times) ✅ [Current: 2 links] 
- `/pricing` (1 time) ❌ [Missing]
- `/birthday-songs` ✅ [Current: 1 link]
- `/wedding-songs` ✅ [Current: 1 link]
- `/anniversary-songs` ✅ [Current: 1 link]
- `/retirement-songs` ✅ [Current: 1 link]
- `/graduation-songs` ❌ [Missing - page doesn't exist]
- `/memorial-songs` ❌ [Missing - page doesn't exist]
- `/vs-songfinch` ✅ [Current: 1 link]

### INBOUND LINKS (Required from other pages)
**TO /ai-song-generator, need links FROM:**
- Homepage (/) - prominent placement
- /vs-songfinch (2-3 times)
- All occasion pages (at least once each)
- All blog posts (at least once each)
- Navigation header
- Footer

## Homepage (/) Updates

### ADD links to:
- `/ai-song-generator` (prominent, in hero or features section)
- Keep existing links to other pages

## /vs-songfinch Page Updates

### FROM /vs-songfinch, link TO:
- `/ai-song-generator` (2-3 times)
- `/create` (3 times)
- `/examples` (2 times)
- `/pricing` (1 time)

## Occasion Pages Updates

### Pages to update:
- `/birthday-songs`
- `/wedding-songs`
- `/anniversary-songs`
- `/retirement-songs`
- `/christmas`
- `/funny-songs`

### FROM each occasion page, link TO:
- `/ai-song-generator` (at least once)
- `/create` (should exist, verify)
- Related occasion pages (e.g., birthday links to anniversary)

## Blog Posts Updates

### FROM every blog post, link TO:
- `/ai-song-generator` (at least once)
- Most relevant occasion page
- `/create` (at least once)

### Blog post categories:
- Birthday gift ideas → link to `/birthday-songs`
- Wedding gift ideas → link to `/wedding-songs`
- Christmas/holiday gifts → link to `/christmas`
- General/personalized gifts → link to `/ai-song-generator`

## Anchor Text Strategy

### Varied anchor text to avoid over-optimization:
- "AI song generator" (30% of the time)
- "create a custom song with AI" (20%)
- "our AI music generator" (15%)
- "make a personalized song" (15%)
- "Create Your Song →" (CTAs, 20%)

### AVOID:
- Same anchor text every time
- Generic "click here" or "learn more"
- Over-linking (max 2-3 links per 500 words)

## Navigation Structure Updates

### Current Header: Need to add AI hub
### Suggested nav structure:
- Create Your Song (→ /create)
- AI Song Generator (→ /ai-song-generator) [NEW]
- Examples (→ /examples)
- Pricing (→ /pricing)
- Occasions (dropdown → occasion pages)

## Footer Updates

### Add/ensure links:
- `/ai-song-generator` [Check if missing]
- All key pages linked
- `/vs-songfinch` under "Compare" section

## Related Posts Component

### For blog posts, create "Related" section:
```typescript
interface Props {
  currentPage: string;
  category: 'birthday' | 'wedding' | 'holiday' | 'milestone' | 'general';
}

const relatedPagesMap = {
  birthday: ['/birthday-songs', '/ai-song-generator', '/21st-birthday-gift-ideas', '/unique-birthday-gift-ideas'],
  wedding: ['/wedding-songs', '/ai-song-generator', '/personalized-wedding-gifts', '/wedding-gift-ideas-unique'],
  holiday: ['/christmas', '/ai-song-generator', '/christmas-gift-ideas', '/personalized-christmas-gifts'],
  milestone: ['/anniversary-songs', '/ai-song-generator', '/graduation-gift-ideas', '/retirement-gift-ideas'],
  general: ['/ai-song-generator', '/create', '/examples', '/vs-songfinch']
};
```

## Verification Checklist

### Link Counts:
- [ ] /ai-song-generator has 10+ outbound internal links
- [ ] /ai-song-generator has 20+ inbound internal links from other pages
- [ ] Homepage links to /ai-song-generator prominently
- [ ] Every occasion page links to /ai-song-generator
- [ ] Every blog post links to /ai-song-generator
- [ ] Navigation includes /ai-song-generator
- [ ] Footer includes /ai-song-generator
- [ ] No broken internal links

### Success Criteria:
- [ ] Linking map documented
- [ ] All high-priority links implemented
- [ ] Navigation updated
- [ ] Footer updated
- [ ] Related posts component created (if applicable)
- [ ] Verification checklist complete
- [ ] Build succeeds without errors

## Implementation Priority

### HIGH PRIORITY:
1. Update /ai-song-generator with missing links
2. Add AI hub link to homepage
3. Update navigation structure
4. Update /vs-songfinch page

### MEDIUM PRIORITY:
5. Update all occasion pages
6. Update all blog posts
7. Update footer links
8. Create related posts component

### VERIFICATION:
9. Run build test
10. Crawl internal links
11. Manual verification of key pages
