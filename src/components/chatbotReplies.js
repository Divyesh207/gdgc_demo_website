import { faqs, previousEvents, site, technologies, upcomingEvents } from '../data/site.js'

// Simple keyword-matched answers drawn from the site content. There is no AI
// or server behind the chat; unknown questions are routed to the contact page.
const unique = (list) => [...new Set(list)]

const rules = [
  {
    match: /past|previous|old|history/,
    reply: () => ({
      text: 'Here are some past events',
      list: unique(['DSA in December', ...previousEvents.map((e) => titleCase(e.title)), 'Compose Camp']),
      link: { label: 'See all events', to: '/events' },
    }),
  },
  {
    match: /upcoming|next|register|registration|event/,
    reply: () => ({
      text: `Next up: ${upcomingEvents.map((e) => `${titleCase(e.title)} (${e.date})`).join(', ')}.`,
      link: { label: 'Register on the community page', href: site.communityUrl },
    }),
  },
  {
    match: /join|member|become|sign ?up/,
    reply: () => ({ text: faqs.find((f) => f.id === 'member').a, link: { label: 'Join the community', href: site.communityUrl } }),
  },
  {
    match: /workshop|session|when|often|tuesday|schedule/,
    reply: () => ({ text: faqs.find((f) => f.id === 'frequency').a }),
  },
  {
    match: /carry|bring|laptop|need/,
    reply: () => ({ text: faqs.find((f) => f.id === 'carry').a }),
  },
  {
    match: /tech|android|web|cloud|machine|ml|cyber|security|competitive|cp|learn/,
    reply: () => ({
      text: 'We run sessions on these technologies:',
      list: technologies.map((t) => titleCase(`${t.accent}${t.rest}`)),
      link: { label: 'Explore technologies', to: '/#technologies' },
    }),
  },
  {
    match: /sponsor|partner/,
    reply: () => ({ text: 'We would love to partner with you!', link: { label: 'Sponsor us', to: '/contact#sponsor' } }),
  },
  {
    match: /contact|email|mail|question|help|reach/,
    reply: () => ({ text: faqs.find((f) => f.id === 'questions').a, link: { label: 'Open the contact form', to: '/contact' } }),
  },
  {
    match: /^(hi|hey|hello|yo|hola)\b/,
    reply: () => ({ text: 'Hey! Ask me about past events, upcoming events, workshops or how to join.' }),
  },
]

function titleCase(s) {
  return s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
}

export function getReply(input) {
  const q = input.toLowerCase().trim()
  const rule = rules.find((r) => r.match.test(q))
  if (rule) return rule.reply()
  return {
    text: "I'm not sure about that one. Our team can help you directly.",
    link: { label: 'Contact the team', to: '/contact' },
  }
}

export const quickReplies = ['Past Events', 'Upcoming Events', 'How do I join?', 'Workshops']
