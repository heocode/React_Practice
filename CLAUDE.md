# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check and build for production (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — configured in `src/index.css` with `@import "tailwindcss"` and `@custom-variant dark (&:where(.dark, .dark *))`
- **React Router v6** for client-side routing
- **Firebase Auth** for Google OAuth (config in `src/lib/firebase.ts`, env vars via `.env`)
- **lucide-react** for icons

## Architecture

### Providers (wrapping order in `App.tsx`)
`ThemeProvider` → `AuthProvider` → `BrowserRouter`

- `ThemeContext` (`src/contexts/ThemeContext.tsx`): toggles `.dark` class on `<html>`, persists to `localStorage`
- `AuthContext` (`src/contexts/AuthContext.tsx`): wraps Firebase `onAuthStateChanged`, exposes `user`, `signInWithGoogle()`, `logout()`

### Routing
All pages except `/login` render inside a `<Layout>` wrapper (Header + Footer). Login page is full-screen standalone.

| Route | Page |
|---|---|
| `/` | LandingPage |
| `/pricing` | PricingPage |
| `/login` | LoginPage |
| `/community` | CommunityPage |
| `/terms` | TermsPage |

### Dark mode
Toggle adds/removes `.dark` on `<html>`. Use `dark:` Tailwind prefix throughout. Default: follows `prefers-color-scheme`.

## Environment

Copy `.env.example` → `.env` and fill in Firebase config:
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Firebase setup (first time)
1. Go to [console.firebase.google.com](https://console.firebase.google.com) → create project
2. **Authentication** → Sign-in methods → enable **Google**
3. **Project settings** → Web app → copy config to `.env`
4. Add `localhost` and your domain to **Authorized domains**
