# SchemaMarkup Component Usage

The `SchemaMarkup.astro` component provides reusable schema markup for YourBanger pages.

## Import

```astro
---
import SchemaMarkup from '../components/seo/SchemaMarkup.astro';
---
```

## Usage Examples

### Software Application Schema
Use on: homepage, `/ai-song-generator`, `/create`

```astro
<SchemaMarkup 
  type="software" 
  data={{
    name: "YourBanger AI Song Generator",
    description: "Create personalized AI-generated songs in 2 minutes. Custom lyrics, professional vocals, any genre.",
    url: "https://yourbanger.com/ai-song-generator"
  }} 
/>
```

### Product Schema
Use on: `/birthday-songs`, `/wedding-songs`, `/pricing`, occasion pages

```astro
<SchemaMarkup 
  type="product" 
  data={{
    name: "Personalized Birthday Song",
    description: "Create a unique birthday song with custom lyrics and AI-generated vocals.",
    category: "Digital Music"
  }} 
/>
```

### FAQ Schema
Use on pages with FAQ sections

```astro
<SchemaMarkup 
  type="faq" 
  data={{
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to create a song?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can create a personalized song in just 2 minutes using our AI technology."
        }
      },
      {
        "@type": "Question", 
        name: "Can I customize the lyrics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! You have full control over the lyrics and can personalize every aspect of your song."
        }
      }
    ]
  }} 
/>
```

### Article Schema
Use on blog posts and content pages

```astro
<SchemaMarkup 
  type="article" 
  data={{
    headline: "How AI is Revolutionizing Music Creation",
    description: "Learn how artificial intelligence is changing the way we create and experience music.",
    datePublished: "2024-01-15"
  }} 
/>
```

## Component Features

- **TypeScript Support**: Full type safety with proper interfaces
- **Data Merging**: Intelligent merging of base schema with page-specific data
- **Valid JSON-LD**: Ensures proper formatting for search engines
- **Flexible**: Supports multiple schema types with extensible data structure

## Schema Types

- `software`: SoftwareApplication schema for tool pages
- `product`: Product schema for purchase/occasion pages  
- `faq`: FAQPage schema for pages with Q&A content
- `article`: Article schema for blog posts and content pages

## Testing

After adding schema markup to a page:

1. Build the project: `npm run build`
2. Check page source for valid JSON-LD in `<head>`
3. Test with Google's Rich Results Test: https://search.google.com/test/rich-results
