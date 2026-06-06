// ─────────────────────────────────────────────
//  Wedding content - edit this file freely
// ─────────────────────────────────────────────

// Paste your Google Apps Script web app URL here after setup:
export const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzSGT7d_Yl_gz7-Y3t5rUHEWpbekPAoG433ThQbVvvSD6rqKTWCUiwoKDN_oNxiOD_fDg/exec';

// Drop your image files in /public and update the paths below.
export const images = {
  heroBackground: '/couple-hero.jpg',
  couplePhoto: '/couple-story.jpg',
  couplePhotoAlt: 'Karina and Jonathan',
};

export const couple = {
  name1: 'Jonathan',
  name2: 'Karina',
  combined: 'Jonathan\u00A0&\u00A0Karina',
  initials: 'J\u2009&\u2009K',
};

export const event = {
  date: 'September 5, 2026',
  dateShort: 'Sept 5, 2026',
  day: 'Saturday',
  venue: 'The Fly Farm',
  address: '1949 Verona Caney Rd, Lewisburg, TN 37091',
  city: 'Lewisburg, Tennessee',
  dressCode: 'Semi-Formal',
};

export const rehearsalDinner = {
  date: 'Friday, September 4, 2026',
  time: '6:00 PM – 8:00 PM',
  venue: 'Woodfeather Farm Winery and Vineyard Tasting Room',
  address: '106 North Horton Parkway, Chapel Hill, TN 37034',
  guestNote: 'For bridal party & family',
  description: "We'll be serving dinner and drinks and look forward to a relaxed evening together. Parking is available on-site.",
};

export const story = {
  text: `Thank you for being part of our lives and for celebrating with us. We are so grateful to share this day with the people we love most.`,
};

export const schedule = [
  { time: '3:00 PM', label: 'Guest Arrival' },
  { time: '3:30 PM', label: 'Ceremony', highlight: true },
  { time: '4:00 PM', label: 'Cocktail Hour' },
  { time: '4:30 PM', label: 'Reception Seating' },
  { time: '4:40 PM', label: 'Grand Entrance', highlight: true },
  { time: '4:50 PM', label: 'Welcome' },
  { time: '5:00 PM', label: 'Dinner' },
  { time: '6:00 PM', label: 'Toasts' },
  { time: '6:15 PM', label: 'Cake' },
  { time: '6:30 PM', label: 'First Dances', highlight: true },
  { time: '7:00 PM', label: 'Open Dancing', highlight: true },
  { time: '9:30 PM', label: 'Last Call' },
  { time: '9:45 PM', label: 'Send-Off Lineup' },
  { time: '10:00 PM', label: 'Exit' },
];

export const details = [
  {
    label: 'Date',
    value: 'Saturday, September 5, 2026',
  },
  {
    label: 'Venue',
    value: 'The Fly Farm\n1949 Verona Caney Rd\nLewisburg, TN 37091',
  },
  {
    label: 'Dress Code',
    value: 'Semi-formal. Suits, cocktail dresses, dressy separates, tuxes, and gowns are all welcome.',
  },
  {
    label: 'Children',
    value: 'Kids are warmly welcome.',
  },
  {
    label: 'Plus Ones',
    value: 'Plus ones are welcome. Please include your guest\u2019s name when you RSVP.',
  },
];

export const faqs = [
  {
    q: 'What should I wear?',
    a: 'The dress code is semi-formal. Suits, cocktail dresses, dressy separates, tuxes, and gowns are all welcome. The ceremony and reception will be held outdoors and on grass, so please keep that in mind when choosing shoes.',
  },
  {
    q: 'Are kids invited?',
    a: 'Yes, children are absolutely welcome. We love your little ones and want them there with you.',
  },
  {
    q: 'Can I bring a plus one?',
    a: 'Yes, plus ones are welcome. Please note your guest\u2019s name in your RSVP so we can plan accordingly.',
  },
  {
    q: 'Where is the wedding?',
    a: 'The wedding will be held at The Fly Farm, 1949 Verona Caney Rd, Lewisburg, TN 37091. More details and directions will be shared closer to the date.',
  },
  {
    q: 'What time should I arrive?',
    a: 'Guests are welcome to arrive starting at 3:00 PM. The ceremony begins promptly at 3:30 PM, so please plan to be seated before then.',
  },
  {
    q: 'Will there be parking?',
    a: 'Yes, parking will be available on-site at The Fly Farm.',
  },
];

export const registry = [
  { label: 'Registry & Honeymoon Fund', url: 'https://www.amazon.com/wedding/guest-view/1ZDVT04QC5SCQ' },
];

export const nav = [
  { label: 'A Note From Us', href: '#welcome' },
  { label: 'Details', href: '#details' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Registry', href: '#registry' },
  { label: 'FAQ', href: '#faq' },
];
