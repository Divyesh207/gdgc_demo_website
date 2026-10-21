# GDGC Demo Website

Website for the Google Developer Student Club, D.Y. Patil College of Engineering (Akurdi), built from the
"GDGC Website – sankalp" Figma file.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
npm run lint
```

## Pages

| Route      | Figma frame                         | Contents |
|------------|-------------------------------------|----------|
| `/`        | Frame 34634 (dark) / 34636 (light)  | Hero, What is GDSC, Technologies, Events & Workshops, FAQ, footer |
| `/events`  | Desktop - 4                         | Counters, upcoming event, previous events with badges |
| `/contact` | Login / signup                      | Contact form and Sponsor Us |

The moon button switches between the dark and light designs (saved in `localStorage`; `?theme=light|dark` also works).
A floating keyword-based chat assistant (Figma "Frame 28") answers questions from the site content.

## Configuration

All copy and links live in [`src/data/site.js`](src/data/site.js). Before going live, replace:

- `site.contactEmail` (currently the placeholder `gdsc@example.com`) – used by the contact form, FAQ and Sponsor buttons.
- `socials` – LinkedIn, Instagram and Discord point to the platform home pages until the chapter's profiles are added.
- `site.communityUrl` – the chapter's page on gdg.community.dev (used by JOIN COMMUNITY, REGISTER and TEAM).
- `previousEvents` / `upcomingEvents` – the design only contains "Flutter Forward" placeholder cards.

There is no backend: the contact and sponsor forms open the visitor's email app with a pre-filled message.

## Structure

```
src/
  data/site.js        content + links
  theme/              dark/light theme context
  components/         Navbar, Footer, SocialRail, EventCard, EventModal, ContactForm, Chatbot…
  sections/           Hero, Overview, Technologies, EventsSection, Faq
  pages/              Home, Events, Contact, NotFound
  assets/figma/       images and icons exported from the Figma file
```
