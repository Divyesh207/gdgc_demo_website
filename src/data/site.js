// Central content + link configuration for the site.
// Values marked "CONFIGURE" are not available in the Figma file and must be
// replaced with the chapter's real accounts before going live.

import techAndroid from '../assets/figma/tech-android.png'
import techWeb from '../assets/figma/tech-web.png'
import techCloud from '../assets/figma/tech-cloud.png'
import techMl from '../assets/figma/tech-ml.png'
import techCyber from '../assets/figma/tech-cyber.png'
import techCp from '../assets/figma/tech-cp.png'
import techLightAndroid from '../assets/figma/tech-light-android.webp'
import techLightWeb from '../assets/figma/tech-light-web.webp'
import techLightCloud from '../assets/figma/tech-light-cloud.webp'
import techLightMl from '../assets/figma/tech-light-ml.webp'
import techLightCyber from '../assets/figma/tech-light-cyber.webp'
import techLightCp from '../assets/figma/tech-light-cp.webp'
import eventFlutterForward from '../assets/figma/event-flutter-forward.png'

export const site = {
  name: 'Google Developer Student Club',
  college: 'D.Y. Patil College of Engineering - Akurdi',
  // CONFIGURE: chapter inbox used by the contact form, FAQ and sponsor buttons.
  contactEmail: 'gdsc@example.com',
  // Joining / registration happens on the official GDG community platform.
  communityUrl: 'https://gdg.community.dev/',
  repoUrl: 'https://github.com/Divyesh207/gdgc_demo_website',
}

export const socials = [
  // CONFIGURE: replace with the chapter's own profiles.
  { id: 'github', label: 'GitHub', href: 'https://github.com/Divyesh207/gdgc_demo_website' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { id: 'discord', label: 'Discord', href: 'https://discord.com/' },
]

export const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'OVERVIEW', to: '/#overview' },
  { label: 'PROJECTS', href: 'https://github.com/Divyesh207/gdgc_demo_website' },
  { label: 'TECHNOLOGIES', to: '/#technologies' },
  { label: 'EVENTS', to: '/events' },
  { label: 'LEARN', href: 'https://codelabs.developers.google.com/' },
  { label: 'TEAM', href: 'https://gdg.community.dev/' },
  { label: 'ABOUT', to: '/contact' },
]

export const concepts = [
  {
    title: 'Concept of GDSC',
    tone: 'green',
    text: 'The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.',
  },
  {
    title: 'Target Audience',
    tone: 'orange',
    text: 'The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.',
  },
  {
    title: 'Why GDSC?',
    tone: 'blue',
    text: 'The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.',
  },
  {
    title: 'Some Other Concept',
    tone: 'yellow',
    text: 'The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.',
  },
]

export const technologies = [
  {
    id: 'android',
    accent: 'ANDROID',
    rest: ' DEVELOPMENT',
    color: '#14b25f',
    band: '#e7f7ef',
    image: techAndroid,
    imageLight: techLightAndroid,
    href: 'https://developer.android.com/courses',
    text: "Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.",
  },
  {
    id: 'web',
    accent: 'WEB',
    rest: ' DEVELOPMENT',
    color: '#ffb808',
    band: '#fff7e6',
    image: techWeb,
    imageLight: techLightWeb,
    href: 'https://web.dev/learn',
    text: 'Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.',
  },
  {
    id: 'cloud',
    accent: 'CLOUD',
    rest: ' COMPUTING',
    color: '#4a90f4',
    band: '#ecf3fd',
    image: techCloud,
    imageLight: techLightCloud,
    href: 'https://www.cloudskillsboost.google/',
    text: 'For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to bridges gaps between data, insight, and action.',
  },
  {
    id: 'ml',
    accent: 'MACHINE',
    rest: ' LEARNING',
    color: '#f74037',
    band: '#feebeb',
    image: techMl,
    imageLight: techLightMl,
    href: 'https://developers.google.com/machine-learning/crash-course',
    text: 'Learn how to drive user engagement and retention with intelligent apps that are able to effectively serve users what they need without the fuss by providing these systems with the ability to automatically learn and improve from experience without being explicitly programmed.',
  },
  {
    id: 'cyber',
    accent: 'CYBER',
    rest: ' SECURITY',
    color: '#14b25f',
    band: '#e7f7ef',
    image: techCyber,
    imageLight: techLightCyber,
    href: 'https://grow.google/certificates/cybersecurity/',
    text: 'With exponential rise in digital world, the attacks are rising more and more. Learn how to keep your applications safe in this world of information technology.',
  },
  {
    id: 'cp',
    accent: 'COMPETITIVE',
    rest: ' PROGRAMMING',
    color: '#ffb808',
    band: '#fff7e6',
    image: techCp,
    imageLight: techLightCp,
    href: 'https://codeforces.com/',
    text: 'With ever-increasing competition in the IT industry, learn how to keep your knowledge sharp with competitive programming. It will enhance your problem solving skills, logic and many more.',
  },
]

export const stats = [
  { value: 14, suffix: '', label: 'EVENTS', tone: 'red' },
  { value: 10, suffix: '', label: 'WORKSHOPS', tone: 'green' },
  { value: 100, suffix: '+', label: 'MEMBERS', tone: 'yellow' },
]

const flutterForward = {
  title: 'FLUTTER FORWARD',
  date: '10 - 11 January 2023',
  level: 'Beginner',
  image: eventFlutterForward,
  description:
    'Flutter Forward is a hands-on session on building beautiful, natively compiled apps for mobile, web and desktop from a single codebase with Flutter.',
}

export const upcomingEvents = [{ id: 'flutter-forward-upcoming', ...flutterForward }]

// The Figma file only contains "Flutter Forward" cards for previous events;
// edit this list to publish the real event history.
const badges = ['flutter', 'compose', 'js']
export const previousEvents = Array.from({ length: 9 }, (_, i) => ({
  id: `previous-${i + 1}`,
  ...flutterForward,
  badge: badges[i % 3],
}))

export const faqs = [
  {
    id: 'member',
    q: 'Who can become a member?',
    a: 'The clubs is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.',
    border: '#f74037',
  },
  {
    id: 'frequency',
    q: 'How frequently do events and workshops occur?',
    a: 'We have a hands-on session every Tuesday at SG25 from 1800hrs to 2030hrs. We also hold workshops and showcases & we would recommend you to join our community to get updates.',
    border: '#4285f4',
    illustration: 'peeps',
  },
  {
    id: 'carry',
    q: 'What should I carry when attending a workshop?',
    a: 'We recommend you carry with you a notebook, pen and a laptop because more often than not we make our hands dirty with code. Most importantly, carry along a healthy dose of curiosity and enthusiasm.',
    border: '#14b25f',
    illustration: 'floor',
  },
  {
    id: 'questions',
    q: 'Who should I reach out to if I have any questions?',
    a: "If you have any questions or comments, please don't hesitate to contact us by clicking the button below. We would be happy to stay engaged via email even after the event",
    border: '#ffb808',
  },
]

export const footerColumns = [
  {
    title: 'Contribute',
    links: [
      { label: 'File a Bug', href: 'https://github.com/Divyesh207/gdgc_demo_website/issues' },
      { label: 'View Source', href: 'https://github.com/Divyesh207/gdgc_demo_website' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Women Techmakers', href: 'https://www.womentechmakers.com/' },
      { label: 'Google Developer Experts', href: 'https://developers.google.com/community/experts' },
      { label: 'Google Developer Groups', href: 'https://developers.google.com/community/gdg' },
    ],
  },
  {
    title: 'Important Links',
    links: [
      { label: 'Firebase Console', href: 'https://console.firebase.google.com/' },
      { label: 'Google Cloud Platform', href: 'https://console.cloud.google.com/' },
      { label: 'Actions on Google', href: 'https://developers.google.com/assistant' },
    ],
  },
]
