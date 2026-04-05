import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, type Auth } from 'firebase/auth'

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY

let app: FirebaseApp
let auth: Auth
let googleProvider: GoogleAuthProvider

if (!apiKey) {
  console.warn(
    '[Firebase] VITE_FIREBASE_API_KEY is missing. ' +
    'Copy .env.example to .env and fill in your Firebase config.'
  )
  // Create dummy exports so imports don't break — auth won't work until .env is filled
  app = {} as FirebaseApp
  auth = {} as Auth
  googleProvider = new GoogleAuthProvider()
} else {
  const firebaseConfig = {
    apiKey,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  }
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  googleProvider = new GoogleAuthProvider()
}

export { auth, googleProvider }
