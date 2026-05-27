// ─────────────────────────────────────────────
//  Wedding content — edit this file freely
// ─────────────────────────────────────────────

// Paste your Google Apps Script web app URL here after setup:
export const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzSGT7d_Yl_gz7-Y3t5rUHEWpbekPAoG433ThQbVvvSD6rqKTWCUiwoKDN_oNxiOD_fDg/exec';

export const couple = {
  name1: 'Karina',
  name2: 'Jonathan',
  combined: 'Karina & Jonathan',
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
  // Replace this placeholder with your own words before launch
  text: `Some stories begin quietly, with a shared laugh, a lingering conversation, a moment neither of you expected to matter. Ours was like that. What started as something ordinary became something we couldn't imagine living without. We've spent years building a life together, learning each other, choosing each other. And on September 5th, we get to do it in front of everyone we love. We're so glad you're part of this.`,
};

export const schedule = [
  { time: '2:30 PM', label: 'Guest Arrival' },
  { time: '3:00 PM', label: 'Ceremony', highlight: true },
  { time: '3:30 PM', label: 'Cocktail Hour' },
  { time: '4:00 PM', label: 'Reception Seating' },
  { time: '4:10 PM', label: 'Grand Entrance', highlight: true },
  { time: '4:20 PM', label: 'Welcome' },
  { time: '4:30 PM', label: 'Dinner' },
  { time: '5:30 PM', label: 'Toasts' },
  { time: '5:45 PM', label: 'Cake' },
  { time: '6:00 PM', label: 'First Dances', highlight: true },
  { time: '6:35 PM', label: 'Open Dancing', highlight: true },
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
    value: 'Semi-Formal. Tuxes, gowns, suits, and cocktail dresses are all welcome.',
  },
  {
    label: 'Children',
    value: 'Kids are warmly welcome.',
  },
  {
    label: 'Plus Ones',
    value: 'Included only if your invitation lists a plus one.',
  },
];

export const faqs = [
  {
    q: 'What should I wear?',
    a: 'The dress code is semi-formal. Tuxes and gowns are welcome, and so are suits and cocktail dresses. The ceremony and reception are held outdoors and on grass, so keep that in mind when choosing footwear.',
  },
  {
    q: 'Are kids invited?',
    a: 'Yes, children are absolutely welcome. We love your little ones and want them there with you.',
  },
  {
    q: 'Can I bring a plus one?',
    a: 'Plus ones are included only if they are listed on your invitation. If you have questions about your specific invitation, feel free to reach out to us directly.',
  },
  {
    q: 'Where is the wedding?',
    a: 'The wedding will be held at The Fly Farm, 1949 Verona Caney Rd, Lewisburg, TN 37091. More details and directions will be shared closer to the date.',
  },
  {
    q: 'What time should I arrive?',
    a: 'Guests are welcome to arrive starting at 2:30 PM. The ceremony begins promptly at 3:00 PM, so please plan to be seated before then.',
  },
  {
    q: 'Will there be parking?',
    a: 'Yes, parking will be available on-site at The Fly Farm. More specific parking details will be provided closer to the date.',
  },
];

export const registry = [
  { label: 'Registry & Honeymoon Fund', url: 'https://www.amazon.com/wedding/guest-view/1ZDVT04QC5SCQ' },
];

export const nav = [
  { label: 'Our Story', href: '#welcome' },
  { label: 'Details', href: '#details' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Registry', href: '#registry' },
  { label: 'FAQ', href: '#faq' },
];
