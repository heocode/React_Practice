# Reweb — Visual Website Builder

A landing site for **Reweb**, a visual builder for Next.js & Tailwind. Built with React 19, TypeScript, and Vite.

## Stack

| Layer | Technology |
|---|---|
| UI framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router v6 |
| Auth | Firebase (Google OAuth + Email/Password) |
| Icons | lucide-react |

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/pricing` | Pricing plans |
| `/login` | Sign-in form |
| `/signup` | Registration form |
| `/community` | Community page |
| `/terms` | Terms & Conditions |
| `*` | 404 Not Found |

All pages except `/login` and `/signup` render inside a shared `<Layout>` (Header + Footer).

## Features

### Authentication
- Google OAuth via Firebase popup
- Email/password sign-in and registration
- Persistent auth state via `onAuthStateChanged`
- Redirect back to the originating page after login

### Dark / Light Mode
- Toggle in the header switches `.dark` class on `<html>`
- Persists to `localStorage`; defaults to `prefers-color-scheme`
- All components use `dark:` Tailwind variants throughout

### Landing Page
- **Hero section** — gradient headline, CTA buttons, tech logo strip, interactive app mockup
- **Visual editing section** — feature list + syntax-highlighted code preview
- **Features tabs** — clickable tab list (Visual Builder, Code Export, Templates, AI Themes) with a live preview panel
- **Testimonials** — masonry column grid (1 → 2 → 3 columns)
- **FAQ accordion** — expand/collapse items with animated icon
- **CTA banner** — bottom call-to-action section

### Pricing Page
- Three plans: Free, Pro (highlighted), Enterprise
- Mobile: horizontal snap-scroll carousel with dot navigation, centered on Pro by default
- Desktop: 3-column CSS grid
- "Coming soon" modal shown to already-signed-in users instead of navigating away

### Header
- Fixed with backdrop blur
- Active-route highlighting via `NavLink`
- Responsive: collapses to hamburger menu on mobile
- Shows user avatar + name + logout button when signed in

### Other UI
- `ScrollToTop` button appears on scroll
- `PageTransition` wrapper keyed on pathname for CSS fade between routes
- `ComingSoonModal` overlay component

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check and build for production (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Environment Setup

Copy `.env.example` → `.env` and fill in your Firebase config:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

### Firebase first-time setup
1. Go to [console.firebase.google.com](https://console.firebase.google.com) → create project
2. **Authentication** → Sign-in methods → enable **Google** and **Email/Password**
3. **Project settings** → Web app → copy config to `.env`
4. Add `localhost` and your production domain to **Authorized domains**
