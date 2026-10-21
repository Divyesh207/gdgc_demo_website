import { site } from '../data/site.js'

// There is no backend in this project: forms open the visitor's email app with
// the message pre-filled, addressed to site.contactEmail.
export function buildMailto({ subject, body }) {
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
