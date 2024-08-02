import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAx7gZRULGUrUTrkvNyRJGz0bakDvMjY-Q",
  authDomain: "todo-4f47d.firebaseapp.com",
  projectId: "todo-4f47d",
  storageBucket: "todo-4f47d.appspot.com",
  messagingSenderId: "459753584599",
  appId: "1:459753584599:web:986d3d4355e42763b4bd92",
  measurementId: "G-GZ1B35DZ9V"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firebase Auth ve Analytics'i alın
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics, app };