export const genres = [
  { slug: 'pop', name: 'Pop', description: 'Catchy melodies and upbeat vibes' },
  { slug: 'rock', name: 'Rock', description: 'Guitar-driven energy and power' },
  { slug: 'country', name: 'Country', description: 'Heartfelt storytelling and twang' },
  { slug: 'hip-hop', name: 'Hip-Hop', description: 'Rhythmic flow and creative wordplay' },
  { slug: 'r-and-b', name: 'R&B', description: 'Smooth soul and emotional depth' },
  { slug: 'folk', name: 'Folk', description: 'Acoustic warmth and intimacy' },
  { slug: 'jazz', name: 'Jazz', description: 'Sophisticated and timeless' },
  { slug: 'electronic', name: 'Electronic', description: 'Modern beats and synth sounds' }
];

export const occasions = [
  { slug: 'birthday', name: 'Birthday', mainPage: '/birthday-songs' },
  { slug: 'wedding', name: 'Wedding', mainPage: '/wedding-songs' },
  { slug: 'anniversary', name: 'Anniversary', mainPage: '/anniversary-songs' },
  { slug: 'retirement', name: 'Retirement', mainPage: '/retirement-songs' },
  { slug: 'graduation', name: 'Graduation', mainPage: '/graduation-songs' },
  { slug: 'mothers-day', name: "Mother's Day", mainPage: '/mothers-day-gift-ideas' },
  { slug: 'fathers-day', name: "Father's Day", mainPage: '/fathers-day-gift-ideas' },
  { slug: 'valentines', name: "Valentine's Day", mainPage: '/valentines-gift-ideas-for-her' },
  { slug: 'christmas', name: 'Christmas', mainPage: '/christmas-gift-ideas' },
  { slug: 'memorial', name: 'Memorial', mainPage: '/memorial-songs' },
  { slug: 'new-baby', name: 'New Baby', mainPage: '/baby-shower-gift-ideas' },
  { slug: 'get-well', name: 'Get Well', mainPage: null }
];

// This creates 8 genres × 12 occasions = 96 pages
export function getAllCombinations() {
  const combinations: {
    genre: typeof genres[0];
    occasion: typeof occasions[0];
    slug: string;
  }[] = [];
  for (const genre of genres) {
    for (const occasion of occasions) {
      combinations.push({
        genre,
        occasion,
        slug: `${genre.slug}-${occasion.slug}-song`,
        // e.g., "pop-birthday-song", "country-wedding-song"
      });
    }
  }
  return combinations;
}
